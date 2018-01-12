//
document.addEventListener("DOMContentLoaded", function() {
    var arrow_left = document.querySelector('.arrow_left');
    var arrow_right = document.querySelector('.arrow_right');
    var chairs_img = document.querySelectorAll('.slider_img ul li');

    var index = 0;

    chairs_img[index].style.display = "initial";

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

});