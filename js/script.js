/*control for navigation link active*/
document.addEventListener("DOMContentLoaded",()=>{
    /*access the all link element by using class name*/
    const navLinks=document.querySelectorAll(".navbar-nav .nav-link");
    /*iterate link by link from navLinks*/
    navLinks.forEach(link=>{
        //add click event for each link*/
        link.addEventListener("click", function(){
            //1)remove active
            document.querySelector(".navbar-nav .nav-link.active")?.classList.remove("active");
            //2)add active to current 
            this.classList.add("active");
        });

    });

});

/*show the total quantity of cart items on the cart badge*/
function updateCartBadgeUI(){
    const cartItems=JSON.parse(localStorage.getItem("magicshop_cart")) || [];
    let total=0;
    for (const item of cartItems){
        total+=item.quantity;
    }
    document.querySelectorAll(".shop-cart-badge").forEach(badge=>{
        badge.textContent=total;
    });
}

/*show a small message at the top right corner by using SweetAlert2*/
function showToastMessage(icon,message){
    Swal.fire({
        toast: true,
        position: "top-end",
        icon: icon,
        title: message,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
    });
}

/*show the saved cart quantity when the page is loaded*/
document.addEventListener("DOMContentLoaded",updateCartBadgeUI);