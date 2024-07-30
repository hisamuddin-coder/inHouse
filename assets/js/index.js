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
