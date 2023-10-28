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
console.log(width)
let scrollposition=screen.scrollLeft;
// function transform(slidecounter){\
//     switch (slidecounter) {
//         case 0:
//             for(i in slides){
//                 i.style.transform='translate(-900px)'
//             }
//             break;
//         case 1:
//             for(i in slides){
//                 i.style.transform='translate(-900px)'
//             }
//             break;
//         case 2:
//             for(i in slides){
//                 i.style.transform='translate(-900px)'
//             }
//             break;
//         default:
//             break;
//     }
// }

// for(i in slides){
//     console.log(i)
// }
// slides[0].style.transform='translateX(-800px)'
console.log(slides)
function slidechange() {
    switch (slidecounter) {
        case 0:
            console.log(slidecounter)
            console.log(scrollposition)
            screen.scrollLeft=width
            scrollposition=width
            console.log(scrollposition)
            slidecounter++
            break;
        case 1:
            console.log(slidecounter)
            console.log(scrollposition)
            screen.scrollLeft=scrollposition+width
            scrollposition=screen.scrollLeft
            console.log(scrollposition)
            slidecounter++
            break;
        case 2:
            console.log(slidecounter)
            // screen.classList.add('endless')
            scrollposition=screen.scrollLeft
            screen.scrollLeft=0
            // screen.classList.remove('endless')
            console.log(scrollposition)
            slidecounter=0
            scrollposition=0
            break;
        default:
            break;
    }
}
// function slidechange() {
//     switch (slidecounter) {
//         case 0:
//             console.log(slidecounter)
//             console.log(scrollposition)
//             screen.scrollLeft=880
//             scrollposition=880
//             console.log(scrollposition)
//             slidecounter++
//             break;
//         case 1:
//             console.log(slidecounter)
//             console.log(scrollposition)
//             screen.scrollLeft=scrollposition+880
//             scrollposition=screen.scrollLeft
//             console.log(scrollposition)
//             slidecounter++
//             break;
//         case 2:
//             console.log(slidecounter)
//             // screen.classList.add('endless')
//             scrollposition=screen.scrollLeft
//             screen.scrollLeft=0
//             // screen.classList.remove('endless')
//             console.log(scrollposition)
//             slidecounter=0
//             scrollposition=0
//             break;
//         default:
//             break;
//     }
// }
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


