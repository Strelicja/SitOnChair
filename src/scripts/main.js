//
document.addEventListener("DOMContentLoaded", function() {
    //SLIDER ARROWS - CLICK//
    let arrowLeft          = document.querySelector('.arrow_left');
    let arrowRight         = document.querySelector('.arrow_right');
    let chairsImg          = document.querySelectorAll('.slider_img ul li'); 
    let chairsImgTouch     = document.querySelectorAll('.slider_img ul li img'); 

     //BURGER MENU //
    let hoverA              = document.querySelector(".hover");
    let nav                 = document.querySelector ("nav");
    let burger              = document.querySelector (".burger");   

    // // PRICING //
    let addPlan            = document.querySelectorAll('.pricing_button_a');
    let addPrice           = document.querySelectorAll('.pricing_h1');
    let orderPricing       = document.querySelector('.order_pricing .order_kind');

    //ORDER//

    let order               = document.querySelector('.order');
    let orderArrowName      = order.querySelectorAll('.order_arrow');
    let orderChoice         = order.querySelectorAll('.order_choice li');

    
//SLIDER ARROWS - CLICK//
function sliderArray() {
    let index               = 0;
    chairsImg[index].style.display = "initial";
    arrowLeft.addEventListener("click", function() {
        chairsImg[index].style.display = "none";
        index--;
        if (index < 0) {
            index = chairsImg.length - 1;
        }
        chairsImg[index].style.display = "initial";
    });

    arrowRight.addEventListener("click", function() {
        chairsImg[index].style.display = "none";
        index++;
        if (index >= chairsImg.length) {
            index = 0;
        }
        chairsImg[index].style.display = "initial";
    });

//SLIDER MOBILE -TOUCHSTART//
    chairsImgTouch.forEach(function (item) {
        item.addEventListener('touchstart', function() {
            chairsImg[index].style.display = "none";
        index--;
        if (index < 0) {
            index = chairsImg.length - 1;
        }
        chairsImg[index].style.display = "initial";
        console.log('sdf')
        })
    })
}
sliderArray();  


//BURGER MENU //
function burgerMenu() {
    burger.addEventListener("click", function(){
    burger.classList.toggle("on");
    nav.classList.toggle("nav_mobile");
    if (nav.classList.contains("hidden-xs")  ) {
        nav.classList.remove("hidden-xs");
        hoverA.classList.add("arrowDown"); 
      }
      else {
         nav.classList.add("hidden-xs");
          hoverA.classList.remove("arrowDown");   
      }   
    })

    hoverA.addEventListener("click", function(){
            hoverA.classList.remove("arrowDown");   
 });
}
burgerMenu();

// PRICING //
function pricingPlan() {
     addPlan.forEach(function (item, index, ){
      item.addEventListener("click", function(){
        orderPricing.textContent = addPrice[index].textContent;
      });
   });
}
pricingPlan();
     

//ORDER//
function orderBox() {
     orderArrowName.forEach(function (item, index, ){
      item.addEventListener("click", function(){
        item.nextElementSibling.classList.toggle('showList');

            orderChoice.forEach(function (item, index, ){
            item.addEventListener("click", function(){
                console.log("dsaf")
                item.parentElement.parentElement.children[0].textContent = this.textContent;
                item.parentElement.classList.remove('showList'); 
              });
           });
        })
     }
)}
orderBox();

 

});
