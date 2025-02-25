document.addEventListener("DOMContentLoaded", function () {
    // Slideshow
    let slideIndex = 0;
    function showSlides() {
        let slides = document.querySelectorAll(".slide");
        slides.forEach(slide => slide.style.display = "none");
        slideIndex++;
        if (slideIndex >= slides.length) slideIndex = 0; // Changed to loop correctly
        slides[slideIndex].style.display = "block"; // Adjusted index for correct display
        setTimeout(showSlides, 4000);
    }
    showSlides();

    // Menu Carousel
    let carousel = document.querySelector(".carousel");
    let prevBtn = document.querySelector(".prev");
    let nextBtn = document.querySelector(".next");
    let index = 0;

    function moveSlide(step) {
        let totalItems = document.querySelectorAll(".carousel-item").length;
        index += step;
        if (index < 0) index = totalItems - 1;
        if (index >= totalItems) index = 0;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener("click", () => moveSlide(-1));
    nextBtn.addEventListener("click", () => moveSlide(1));
});
