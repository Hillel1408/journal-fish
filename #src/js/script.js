const swiper = new Swiper(".slider__swiper", {
  slidesPerView: 1.5,
  spaceBetween: 10,
  navigation: {
    nextEl: ".slider__button-next",
    prevEl: ".slider__button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.4,
      spaceBetween: 15,
    },
  },
});

const openBtn = document.querySelector(".header__open-btn");
const closeBtn = document.querySelector(".header__close-btn");
const mobileMenu = document.querySelector(".header__mobile-block");

openBtn.addEventListener("click", function () {
  mobileMenu.classList.add("active");
  document.body.classList.add("loсk");
});
closeBtn.addEventListener("click", function () {
  mobileMenu.classList.remove("active");
  document.body.classList.remove("loсk");
});
