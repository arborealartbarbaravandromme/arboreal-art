document.addEventListener("DOMContentLoaded", function () {


const images = document.querySelectorAll(".artwork img");


const lightbox = document.createElement("div");

lightbox.className = "lightbox";


lightbox.innerHTML = `
<img src="" alt="">
<span class="close">×</span>
`;


document.body.appendChild(lightbox);



const lightboxImage = lightbox.querySelector("img");

const close = lightbox.querySelector(".close");



images.forEach(function(image){


image.addEventListener("click", function(){


lightboxImage.src = image.src;

lightbox.classList.add("active");


});


});



close.addEventListener("click", function(){


lightbox.classList.remove("active");


});



lightbox.addEventListener("click", function(e){


if(e.target === lightbox){

lightbox.classList.remove("active");

}


});


});