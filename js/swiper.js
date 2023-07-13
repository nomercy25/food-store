const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed: 400,
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    effect: 'slide',
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