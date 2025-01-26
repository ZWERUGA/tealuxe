const body = document.querySelector("body");
const burgerButton = document.querySelector(".burger-button");
const closeButton = document.querySelector(".mobile-menu__close");
const overlay = document.querySelector(".overlay");
const mobileMenu = document.querySelector(".mobile-menu");

burgerButton.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
  mobileMenu.classList.add("mobile-menu--active");
  body.classList.add("no-scroll");
});

closeButton.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
  mobileMenu.classList.remove("mobile-menu--active");
  body.classList.remove("no-scroll");
});
