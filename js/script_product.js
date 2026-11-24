AOS.init({
    duration: 1200,
    easing: "ease-out",
    offset: 80,
    once: true
});

const products=[
    {
        id:1,
        name: "Dalgona Coffee",
        category:"K-signature",
        price: 59.99,
        desc:"Frothy, whipped drink with creamy foam and a sweet-bitter taste",
        tooltip:"Includes 2-year warrnaty & free pouch",
        image:"images/dalgona coffee.jpg"
    },
    { id: 2, name: "Seoul Latte", category: "K-signature", price: 29.99, desc: "Smooth milk base and rich coffee character", tooltip: "In Stock: units remaining", image: "images/Seoul latte.jpg" },
    { id: 3, name: "Grain Latte", category: "K-signature", price: 29.99, desc: "Roasted Grain Latte", tooltip: "In Stock: 15 units remaining", image: "images/Grain latte.jpg" },
    { id: 4, name: "Einspinner", category: "K-signature", price: 29.99, desc: "Korean version of an Einspinner coffee.Espresso drink with whipped cream", tooltip: "In Stock: 15 units remaining", image: "images/Einspinner.jpg" },


    { id: 5, name: "Caramel Frappuccino", category: "Idols'pick", price: 89.99, desc: "Caramel with coffee", tooltip: "Enhypen's Jay Favourite", image: "images/caramel frappuccino.jpg" },
    { id: 6, name: "Tiramisu coffee", category: "Idols'pick", price: 89.99, desc: "  Rich, creamy and perfectly balanced with bold espresso.", tooltip: "Top picked by BTS", image: "images/tiramisu coffee.jpg" },
    { id: 7, name: "Black Americano", category: "Idols'pick", price: 89.99, desc: "Shot of espresso with hot water.", tooltip: "BTS's RM picked", image: "images/americano.jpg" },
    
    
    { id: 8, name: "Strawberry matcha", category: "Matcha Series", price: 299.99, desc: "Worth the Hype🍓", tooltip: "Free express shipping available", image: "images/strawberry matcha.jpg" },
    { id: 10, name: "Coconut matcha", category: "Matcha Series", price: 299.99, desc: "Very refreshing and well blended of coconut water", tooltip: "Free express shipping available", image: "images/coconut matcha.jpg" },


    { id: 9, name: "Vienna creme latte", category: "Coffee Latte", price: 19.99, desc: "Layer espresso and cream over iced milk.Top with cocoa powder.", tooltip: "Fast Charging 3.0 supported", image: "images/vienna creme latte.jpg" },
    { id: 12, name: "hazel nut latte", category: "Coffee Latte", price: 19.99, desc: "Morning boost or afternoon comfort", tooltip: "Fast Charging 3.0 supported", image: "images/hazel nut latte.jpg" },

    { id: 11, name: "Creamy Hot Latte", category: "Coffee Latte", price: 19.99, desc: "Espresso with bubbles,too hot steamed milk.", tooltip: "Fast Charging 3.0 supported", image: "images/creamy hot latte.jpg" },
    



  ];
const catEle=document.getElementById("shopCategoryContainer");
const prodEle=document.getElementById("shopProductContainer");
const searchEle=document.getElementById("shopSearchBox");
let searchCat="All";


searchEle.addEventListener('input',processFilter);

function processFilter(){
    const searchValue=searchEle.value.toLowerCase().trim();
    
    let searchResult=[]

    for (const p of products){
        if ((p.name.toLowerCase().includes(searchValue)||
        p.desc.toLowerCase().includes(searchValue))
        &&
        (searchCat==="All" || searchCat===p.category)
       ){
         searchResult.push(p); 
         }
     }

      prepareProductContainer(searchResult);
}
function prepareCategoryContainer(){
    const cat=["All"];
    for (p of products){
        if (!cat.includes(p.category)){
            cat.push(p.category);
        }
    }
    catEle.innerHTML="";
    for (c of cat){
        const btn=document.createElement("button");
        btn.className=`shop-btn-category ${c===searchCat ? "active": ""}`;
        btn.textContent=c;
        btn.addEventListener("click",function(event){
            searchCat=event.target.textContent;
            processFilter();
            prepareCategoryContainer();
        });
        catEle.appendChild(btn);
    }
}
const notfoundEl=document.getElementById("shopSearchNotFound");
function prepareProductContainer(items){
    prodEle.innerHTML="";
    if (items.length===0){
        notfoundEl.style.display="flex";
        return;
    }else{
       notfoundEl.style.display="none";
        for (p of items){

        const itemEle=document.createElement("div");
        itemEle.className="shop-product-item";
        itemEle.setAttribute("data-aos","fade-up");

        const cardEle=document.createElement("article");
        cardEle.className="shop-product-card";
        cardEle.innerHTML=`
          <div class="shop-product-image-container">
            <img src="${p.image}" alt="${p.name}"
            class="zoomable-img">
          </div>
        <div class="shop-product-detail-container">
             <div>
                <div class="shop-category">${p.category}</div>
                <div class="shop-title-container">
                     <h2 class="shop-product-name">${p.name}</h2>
                     <div class="shop-product-tooltip">
                        <span class="shop-info-icon">i</span>
                        <span class="shop-info-text">${p.tooltip}</span>
                     </div>
                </div>
                <p class="shop-product-desc">${p.desc}</p>
              </div>
              <div>
                 <div class="shop-product-price">
                     ฿${p.price.toFixed(2)}
                  </div>
                  <button class="shop-btn-cart"
                    onclick="addToCart(${p.id})">
                     Add to Cart 
                  </button>
              </div>
        </div>
    `;
     itemEle.appendChild(cardEle);
     prodEle.appendChild(itemEle);

        }
        AOS.refreshHard();
    }

}
let shopCartItems=[]; 
function addToCart(pid){
    const selectProd=products.find(p=> p.id ===pid);

    const localItemsInCartStr=localStorage.getItem("magicshop_cart");
    if (localItemsInCartStr){
        shopCartItems=JSON.parse(localItemsInCartStr);
    }
    const existItem=shopCartItems.find(item=> item.id ===pid);
    if (existItem){
        existItem.quantity+=1;
    }else{
        shopCartItems.push({...selectProd,quantity:1});
    }
    localStorage.setItem("magicshop_cart",
        JSON.stringify(shopCartItems));

    updateCartBadgeUI();

   showToastMessage('success',`Add ${selectProd.name} to Shopping cart!`);
}

const modalEl=document.getElementById("shopImageModal");
const imageEl=document.getElementById("shopModalContent");
document.addEventListener("click", (e)=>{
    if (e.target.classList.contains("zoomable-img")){
        modalEl.style.display="flex";
        imageEl.src=e.target.src;
    }
    if(e.target.classList.contains("close-btn")){
        modalEl.style.display="none";
    }


});
prepareCategoryContainer();
prepareProductContainer(products);

