// CONSTANTS
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const burgerButton = document.querySelector(".burger-button");

const mobileMenu = document.querySelector(".mobile-menu");
const closeButton = mobileMenu.querySelector(".close-button");
const mobileMenuLinks = mobileMenu.querySelectorAll(".mobile-menu__link");

const form = document.querySelector(".form");
const formButton = form.querySelector(".form__button");

const overlayModal = document.querySelector(".overlay-modal");
const modal = overlayModal.querySelector(".modal");
const closeOverlayModal = overlayModal.querySelector(".close-button");

// FUNCTIONS
function showMobileMenu() {
  overlay.classList.add("overlay--active");
  mobileMenu.classList.add("mobile-menu--active");
  body.classList.add("no-scroll");
}

function hideMobileMenu() {
  overlay.classList.remove("overlay--active");
  mobileMenu.classList.remove("mobile-menu--active");
  body.classList.remove("no-scroll");
}

function showModal() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    formButton.classList.add("button--loading");

    setTimeout(() => {
      formButton.classList.remove("button--loading");
      overlayModal.classList.add("overlay--active");
      modal.classList.add("modal--active");
      body.classList.add("no-scroll");
    }, 1000);
  });
}

// LISTENERS
burgerButton.addEventListener("click", showMobileMenu);

closeButton.addEventListener("click", hideMobileMenu);

closeOverlayModal.addEventListener("click", () => {
  overlayModal.classList.remove("overlay--active");
  modal.classList.remove("modal--active");
  body.classList.remove("no-scroll");
});

mobileMenuLinks.forEach((mobileMenuLink) => {
  mobileMenuLink.addEventListener("click", hideMobileMenu);
});

formButton.addEventListener("click", showModal);
