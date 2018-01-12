//
document.addEventListener("DOMContentLoaded", function() {
    var arrow_left = document.querySelector('.arrow_left');
    var arrow_right = document.querySelector('.arrow_right');
    var chairs_img = document.querySelectorAll('.slider_img ul li'); 
    var chairs_img_touch = document.querySelectorAll('.slider_img ul li img'); 

    var index = 0;

    chairs_img[index].style.display = "initial";
//SLIDER ARROWS - CLICK//

    arrow_left.addEventListener("click", function() {
        chairs_img[index].style.display = "none";
        index--;
        if (index < 0) {
            index = chairs_img.length - 1;
        }
        chairs_img[index].style.display = "initial";
    });

    arrow_right.addEventListener("click", function() {
        chairs_img[index].style.display = "none";
        index++;
        if (index >= chairs_img.length) {
            index = 0;
        }
        chairs_img[index].style.display = "initial";
    });

//SLIDER MOBILE -TOUCHSTART//
    chairs_img_touch.forEach(function (item) {
        item.addEventListener('touchstart', function() {
            chairs_img[index].style.display = "none";
        index--;
        if (index < 0) {
            index = chairs_img.length - 1;
        }
        chairs_img[index].style.display = "initial";
        console.log('sdf')
        })
    })

    





    });


