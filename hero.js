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

  const counters = document.querySelectorAll('.gp-stat-value');
let counterStarted = false;

function runCounter() {
  counters.forEach(counter => {
    let target = +counter.getAttribute("data-target");
    let current = 0;
    let speed = Math.ceil(target / 100);

    function animate() {
      current += speed;
      if (current < target) {
        counter.innerText = current.toLocaleString() + "+";
        requestAnimationFrame(animate);
      } else {
        counter.innerText = target.toLocaleString() + "+";
      }
    }
    animate();
  });
}

function scrollTrigger() {
  const section = document.querySelector(".gp-stats-wrapper");
  let top = section.getBoundingClientRect().top;

  if (top < window.innerHeight - 100 && !counterStarted) {
    counterStarted = true;
    runCounter();
  }
}

window.addEventListener("scroll", scrollTrigger);






