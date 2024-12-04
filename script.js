let arrow_down = document.getElementById("arrow-down");
let display = document.getElementById("small-box");


arrow_down.addEventListener("click",function(){
    if(display.style.display ==="none" ||display.style.display ==="" ){
        display.style.display = "block"; 
        display.classList.toggle('open');
    }
    else{
        display.style.display = "none"; 
    }
})

let menu_display = document.getElementById("display-menu1");
let clickbtn = document.getElementById("menuu");
clickbtn.addEventListener("click", function () {
    if (menu_display.style.display === "none" || menu_display.style.display === "") {
        menu_display.style.display = "block";
    } else {
        menu_display.style.display = "none";
    }
}); 

let Book_now=document.getElementById("Book_now")
Book_now.addEventListener("click",function(){
    location.href="contact.html"
})

const images = [
    "/Bridal_Makeup/7.jpg",
    "/Bridal_Makeup/2.jpg",
    "/Bridal_Makeup/3.jpg",
    "/Bridal_Makeup/5.jpg",
    "/Bridal_Makeup/13.jpg",
    "/Bridal_Makeup/2.jpg",
    "/Party_Makeup/11.jpg",
    "/cosplay/2.jpg",
    "/cosplay/6.jpg",
    "/cosplay/4.jpg",
    "/cosplay/10.jpg",
];

// Set the initial index and get the image element
let currentIndex = 0;
const slideshowImage = document.getElementById("slideshow");


function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; 
    slideshowImage.src = images[currentIndex];
}

setInterval(changeImage, 4000);

let Services=document.getElementById("Services")
Services.addEventListener("click",function(){
    console.log("hi")
    const targetSection = document.getElementById("services-section");
    targetSection.scrollIntoView({ behavior: "smooth" });
})

