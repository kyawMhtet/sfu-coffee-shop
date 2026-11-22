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