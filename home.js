const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu")
const logo = document.querySelector(".logo")
const container = document.querySelector(".container")
const screen=document.querySelector('.screen')
const navLinks = document.querySelectorAll(".nav-links")
let bgImg01 = document.querySelector(".bg-img01");
const carousel =document.querySelector('.carousel')
const slides=document.querySelectorAll('.slides')
let slidecounter=0
let width=slides[0].offsetWidth

//Checking width and changing main pic
const devicewidth=window.innerWidth
console.log(devicewidth)
if(devicewidth<485){
    const any=document.querySelector('.main-img').style.display='none'
    document.querySelector('.main-image').style.display='block'
}





let scrollposition=0
function slidechange() {
    switch (slidecounter) {
        case 0:
            // console.log(scrollposition)
            screen.scrollLeft=width
            slidecounter++
            break;
        case 1:
            scrollposition=screen.scrollLeft
            // console.log(scrollposition)
            screen.scrollLeft=scrollposition+width
            slidecounter++
            break;
        case 2:
            scrollposition=screen.scrollLeft
            console.log(scrollposition)
            scrollposition=screen.scrollLeft
            screen.scrollLeft=0
            slidecounter=0
            scrollposition=0
            // console.log(scrollposition)
            break;
        default:
            break;
    }
}
setInterval(slidechange, 4000);



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
    if(devicewidth<485){
        let slides = document.querySelectorAll('.mobile-bg-img');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 10000);
    }
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


