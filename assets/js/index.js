const data = [
  {
    id: 1,
    img: "/assets/img/property-01.jpeg",
    name: "Home In Serenity Heights",
    desc: "Nestled in lush greenery, Serenity Heights offers breathtaking views and a tranquil atmosphere for peaceful living.",
    bedroom: 4,
    bathroom: 4,
    area: "3600",
    price: "5,000",
    option: "Rent",
    categaory: "Popular",
  },
  {
    id: 1,
    img: "/assets/img/property-02.jpeg",
    name: "Villa In Crescent Villas",
    desc: "Modern luxury meets classic elegance in Crescent Villas, providing sophisticated living spaces with top-notch amenities.",
    bedroom: 5,
    bathroom: 6,
    area: "3000",
    price: "10,000",
    option: "Rent",
    categaory: "Popular",
  },
  {
    id: 3,
    img: "/assets/img/property-03.jpeg",
    name: "Home In  Harbor View Residences",
    desc: "Located by the waterfront, Harbor View Residences boast stunning sea views and easy access to vibrant coastal activities.",
    bedroom: 2,
    bathroom: 3,
    area: "3000",
    price: "500,000",
    option: "Buy",
  },
  {
    id: 4,
    img: "/assets/img/property-04.jpeg",
    name: "Home InSilver Oaks Retreat",
    desc: "Experience serene living in Silver Oaks Retreat, with contemporary designs surrounded by nature's beauty and quietude.",
    bedroom: 3,
    bathroom: 4,
    area: "3400",
    price: "400,000",
    option: "Buy",
    categaory: "Popular",
  },
  {
    id: 5,
    img: "/assets/img/property-05.jpeg",
    name: " Aspen Creek Lodge",
    desc: "A perfect blend of rustic charm and modern convenience, Aspen Creek Lodge is ideal for those seeking a cozy yet upscale lifestyle.",
    bedroom: 4,
    bathroom: 5,
    area: "2800",
    price: "450,000",
    option: "Sell",
  },
  {
    id: 6,
    img: "/assets/img/property-06.jpeg",
    name: "Home In Maple Grove Estate",
    desc: "A charming community featuring spacious homes and beautiful landscapes, perfect for family living and outdoor activities.",
    bedroom: 2,
    bathroom: 2,
    area: "2500",
    price: "20,000",
    option: "PG",
  },
];

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".nav-links-container");
const navLinks = document.querySelector(".nav-links");
const navToggleEllipsis = document.querySelector(".toggle-menu-ellipsis");
const topLinksContainer = document.querySelector(".top-links-container");
const topLinks = document.querySelector(".top-nav-links");

// NAVIGATION
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
// HERO SLIDER
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
// ========= PROPERTIES ==========
const cardContainer = document.querySelector(".cards");
window.addEventListener("DOMContentLoaded", function () {
  displayCards(data);
});
function displayCards(items) {
  let displayCard = items
    .filter((item) => item.categaory === "Popular")
    .map(function (e) {
      return `<div class="card">
              <div class="top">
                <img src=${e.img} alt=${e.name} />
                <span
                  ><i class="fas fa-heart"></i
                  ><i class="fas fa-exchange-alt"></i
                ></span>
              </div>
              <div class="bottom">
                <h3>${e.name}</h3>
                <p>
                  ${e.desc}
                </p>
                <div class="advants">
                  <div>
                    <span>Bedrooms</span>
                    <div><i class="fas fa-th-large"></i><span>${e.bedroom}</span></div>
                  </div>
                  <div>
                    <span>Bathrooms</span>
                    <div><i class="fas fa-th-large"></i><span>${e.bathroom}</span></div>
                  </div>
                  <div>
                    <span>Area</span>
                    <div>
                      <i class="fas fa-th-large"></i
                      ><span>${e.area}<span>Sq Ft</span></span>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <span>${e.option}</span>
                  <span>$${e.price}</span>
                </div>
              </div>
            </div>`;
    });
  displayCard = displayCard.join("");
  cardContainer.innerHTML = displayCard;
}
// TESTIMONIALS SLIDER
