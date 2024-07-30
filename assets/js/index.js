const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const navLinks = document.querySelector(".nav-links");
const navToggleEllipsis = document.querySelector(".toggle-menu-ellipsis");
const topLinksContainer = document.querySelector(".top-links-container");
const topLinks = document.querySelector(".top-links");

navToggle.addEventListener("click", function () {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `calc(100vh - 80px)`;
    topLinksContainer.style.height = 0;
  } else {
    linksContainer.style.height = 0;
  }
});
navToggleEllipsis.addEventListener("click", function () {
  const topLinksHeight = topLinks.getBoundingClientRect().height;
  const topLinksContainerHeight =
    topLinksContainer.getBoundingClientRect().height;
  if (topLinksContainerHeight === 0) {
    topLinksContainer.style.height = `${topLinksHeight}px`;
    linksContainer.style.height = 0;
  } else {
    topLinksContainer.style.height = 0;
  }
});

let slideIndex = 0;
let timeout;
const slides = document.querySelectorAll(".corousel-slide");
const btnDots = document.querySelectorAll(".dot");

function showSlides() {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  btnDots.forEach((btnDot) => {
    btnDot.classList.remove("active");
  });

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  slides[slideIndex - 1].style.display = "flex";
  btnDots[slideIndex - 1].classList.add("active");
  timeout = setTimeout(showSlides, 3000);
}
function currentSlide(n) {
  slideIndex = n;
  showSlides();
}
btnDots.forEach((dot, index) => {
  clearTimeout(timeout);
  dot.addEventListener("click", () => currentSlide(index));
});
showSlides();
