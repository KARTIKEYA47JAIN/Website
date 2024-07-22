const swiper = new Swiper(".js-testimonials-slider", 
{
    grabCursor: true,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 10,
    keyboard: {
      enabled: true,
    },
    loop: true,
    pagination: {
      el: ".js-testimonials-paginations",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

const slides = document.getElementsByClassName("swiper-slide");
for (const slide of slides) {
    slide.addEventListener("click", () => {
        const { className } = slide;
        if (className.includes("swiper-slide-next")) {
            swiper.slideNext();
        } else if (className.includes("swiper-slide-prev")) {
            swiper.slidePrev();
        }
    });
}