const fs = require("fs");

 function getFolderFiles(path, extension) {
     let files = fs.readdirSync(path);
     return files.filter((file) =>
       file.match(new RegExp(`.*\.(${extension})`, "ig"))
     );
 }

 console.log(getFolderFiles("./fiu", ".jpg"));
 images = [getFolderFiles("./fiu", ".jpg")];
 console.log(images[0]);
/*
let slideIndex = 0;

function showSlides() {
    const slidePairs = document.querySelectorAll(".slide-pair");

    slidePairs.forEach((pair) => {
        pair.style.display = "none"; 
        pair.style.animation = "none"; 
    });

    slideIndex++;
    if (slideIndex > slidePairs.length) {
        slideIndex = 1; 
    }

    const currentSlide = slidePairs[slideIndex - 1];
    currentSlide.style.display = "flex"; 
    currentSlide.style.animation = "slideIn 4s ease-in-out forwards";

    setTimeout(showSlides, 5000); 
}


document.addEventListener("DOMContentLoaded", showSlides);
*/