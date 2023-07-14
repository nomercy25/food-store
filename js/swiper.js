const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed: 400,
    autoplay: false,
    loop: true,
    effect: 'slide',
    slidesPerView: 1,
    spaceBetween: 11,

    breakpoints: {
      900: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
    /*
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    */
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    
  });