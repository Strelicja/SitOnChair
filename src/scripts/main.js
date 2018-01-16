//
document.addEventListener("DOMContentLoaded", function() {
    //SLIDER ARROWS - CLICK//
    let arrowLeft          = document.querySelector('.arrow_left');
    let arrowRight         = document.querySelector('.arrow_right');
    let chairsImg          = document.querySelectorAll('.slider_img ul li'); 
    let chairsImgTouch    = document.querySelectorAll('.slider_img ul li img'); 

     //BURGER MENU //
    let hoverA              = document.querySelector(".hover");
    let nav                 = document.querySelector ("nav");
    let burger              = document.querySelector (".burger");   

    // PRICING //
    let addPlan            = document.querySelectorAll('.pricing_button_a');
    let addPrice           = document.querySelectorAll('.pricing_h1');
    let orderPricing       = document.querySelector('.order_pricing .order_kind');
    
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

// let addPlan            = document.querySelectorAll('.pricing_button_a');
// let addPrice           = document.querySelectorAll('.pricing_h1');
// let orderPricing       = document.querySelector('.order_pricing .order_kind');



//ORDER//

let order               = document.querySelector('.order');

let orderArrowName    = order.querySelector('.order_arrow.order_name');
let orderName          = order.querySelector('.order_name');

let orderArrowColor   = order.querySelector('.order_arrow.order_color');
let orderColor         = order.querySelector('.order_color');

let orderArrowFabric  = order.querySelector('.order_arrow.order_fabric');
let orderFabric        = order.querySelector('.order_fabric');

let orderChoice        = order.querySelector('.order_choice');
let orderChoiceLi     = order.querySelectorAll('li');



 orderArrowName.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('showList');
        for (let i = 0; i < this.nextElementSibling.children.length; i++) {
            this.nextElementSibling.children[i].addEventListener('click', function() {
                orderName.textContent = this.textContent;
                this.parentElement.classList.remove('showList');
            });
        }
    });

 orderArrowColor.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('showList');
        for (let i = 0; i < this.nextElementSibling.children.length; i++) {
            this.nextElementSibling.children[i].addEventListener('click', function() {
                orderColor .textContent = this.textContent;
                this.parentElement.classList.remove('showList');
            });
        }
    });


 orderArrowFabric.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('showList');
        for (let i = 0; i < this.nextElementSibling.children.length; i++) {
            this.nextElementSibling.children[i].addEventListener('click', function() {
                orderFabric.textContent = this.textContent;
                this.parentElement.classList.remove('showList');
            });
        }
    });










});
