// for card slideshow
let cardContent = document.querySelector(".card-content");
let cardImage = document.querySelector(".card-image");

let content = {
    0:{
        "img": "ganesh.webp",
        "cardTitle": "fafsa",
        "cardDiscribtion": "fasfdaffaadssa"
    },
    
    1:{
        "img": "saveElephant.webp",
        "cardTitle": "Card title",
        "cardDiscribtion": "This is a wider cardLorem ipsum dolor sit amet consectetur adipisicing elit. Rerum obcaecati porro quibusdam reiciendis enim praesentium adipisci at error maxime quo, modi et quaerat ullam voluptatum iste eius amet, expedita earum quisquam nesciunt. Voluptatem ut minus vero aliquid! Fugiat, ducimus perspiciatis ut ullam harum quis, facilis voluptatum in inventore aliquid porro! with supporting text below as a natural lead-in to additional content. This content is a little bit longer"
    },
    
}




console.log(Object.keys(content).length)
function executeIteration(index) {
    if (index < Object.keys(content).length) {
        // console.log(`Iteration ${index}`);
        cardImage.src = `http://127.0.0.1:5500/NGO/images/${content[index].img}`;
        cardContent.firstElementChild.textContent = content[index].cardTitle;
        cardContent.children[1].textContent = content[index].cardDiscribtion;

        setTimeout(function() {
            executeIteration(index + 1);
        }, 3000); // Delay between iterations
    }else{
        executeIteration(0);
    }
}

executeIteration(0); // Start the loop
    


// },1000);














// let slideIndex1 = 0;

// setInterval(()=>{
    
// },3000)

// console.log(content.slide1.img);
// showSlides1();
// function cardslides(){
//     for(let i in content){
//         cardImage.src = content.i.img,
//         // cardBody.children[0].textContent = content[i].cardTitle,
//         // cardBody.children[1].textContent = content[i].cardDiscribtion,

//     }
    
// }
// function showSlides1() {
//     let slides1 = document.querySelectorAll('.card00');
//     for (let i = 0; i < slides1.length; i++) {
//         slides1[i].style.display = 'none';
//     }
//     slideIndex1++;
//     if (slideIndex1 > slides1.length) {
//         slideIndex1 = 1;
//     }
//     slides1[slideIndex1 - 1].style.display = 'flex';
//     setTimeout(showSlides1, 2000); // Change image every 2 seconds (adjust as needed)
// }
