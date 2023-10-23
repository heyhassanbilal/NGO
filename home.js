const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu")
const logo = document.querySelector(".logo")
const container = document.querySelector(".container")
const navLinks = document.querySelectorAll(".nav-links")
let bgImg01 = document.querySelector(".bg-img01");
  


const bgImgSrc = [
    "http://127.0.0.1:5500/NGO/images/ganesh.webp",
    "http://127.0.0.1:5500/NGO/images/saveElephant.webp",
]

hamburger.addEventListener("click",()=>{
    console.log("heheh");
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    logo.classList.toggle("active");
})

// JavaScript for the image slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.bg-img');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 10000); // Change image every 10 seconds 
}


