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
