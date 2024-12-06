// script.js
let slideIndex = 0;

function showSlides() {
    const slidePairs = document.querySelectorAll(".slide-pair");

    slidePairs.forEach((pair) => (pair.style.display = "none")); // Rejtse el az összes képpárt

    slideIndex++;
    if (slideIndex > slidePairs.length) {
        slideIndex = 1; // Visszatérés az első képpárhoz
    }

    slidePairs[slideIndex - 1].style.display = "flex"; // Mutassa az aktuális képpárt
    setTimeout(showSlides, 4000); // 4 másodpercenként váltás
}

// Indítás
document.addEventListener("DOMContentLoaded", showSlides);
