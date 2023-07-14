const swiper = new Swiper('.swiper', {
    // Optional parameters
        spaceBetween: 10,
        loop: true,
        freeMode: false,
        autoplay: true,
        speed: 700,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
              600: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              650: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              900: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            },
    });