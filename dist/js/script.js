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
