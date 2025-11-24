const slides = document.querySelectorAll('.slide');
let index = 0;
const slideTime = 3000; 

function showSlide(i) {
  slides.forEach((slide, n) => {
    slide.classList.toggle('active', n === i);
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

setInterval(nextSlide, slideTime);
showSlide(index);


 document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about-section");

    if ("IntersectionObserver" in window && aboutSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              aboutSection.classList.add("visible");
              observer.unobserve(aboutSection);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(aboutSection);
    } else {
      // Fallback: show immediately
      aboutSection.classList.add("visible");
    }
  });