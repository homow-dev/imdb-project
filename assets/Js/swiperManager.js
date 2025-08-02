// Swiper Manager - All Swiper initializations
function initializeSwipers() {
  // Simple Swiper setups
  new Swiper(".bannerslide", {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
  });

  // Desktop sliders
  const desktopSliders = [
    ".featured-today-swiper-desktop",
    ".up-next-swiper-desktop",
    ".box-office-swiper-desktop",
    ".coming-soon-swiper-desktop",
    ".oscar-winners-swiper-desktop",
    ".exclusive-slider-desktop",
    ".more-explore-swiper-desktop",
    ".news-slider-desktop",
    ".coming-soon-swiper-desktop",
  ];

  desktopSliders.forEach(selector => {
    new Swiper(selector, {
      slidesPerView: 2,
      slidesPerGroup: 1,
      cssMode: true,
      freeMode: true,
      keyboard: { enabled: true },
      scrollbar: { el: ".swiper-scrollbar" },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
    });
  });

  // Top Ten Desktop - 4 slides
  new Swiper(".top-ten-slider-desktop", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    cssMode: true,
    freeMode: true,
    keyboard: { enabled: true },
    scrollbar: { el: ".swiper-scrollbar" },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
  });

  // Popular Interests Desktop - 4 slides
  new Swiper(".interests-slider-desktop", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    cssMode: true,
    freeMode: true,
    keyboard: { enabled: true },
    scrollbar: { el: ".swiper-scrollbar" },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
  });

  // Mobile sliders
  const mobileSliders = [
    ".featured-today-swiper-mobile",
    ".born-today-swiper-mobile",
    ".up-next-swiper-mobile",
    ".box-office-swiper-mobile",
    ".coming-soon-swiper-mobile",
    ".oscar-winners-swiper-mobile",
    ".exclusive-slider-mobile",
    ".more-explore-swiper-mobile",
    ".news-slider-mobile"
  ];

  mobileSliders.forEach(selector => {
    new Swiper(selector, {
      slidesPerView: 1,
      slidesPerGroup: 1,
      cssMode: true,
      freeMode: true,
      keyboard: { enabled: true },
      scrollbar: { el: ".swiper-scrollbar" },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
    });
  });

  // Top Ten Mobile - 2 slides
  new Swiper(".top-ten-slider-mobile", {
    slidesPerView: 2,
    slidesPerGroup: 1,
    cssMode: true,
    freeMode: true,
    keyboard: { enabled: true },
    scrollbar: { el: ".swiper-scrollbar" },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
  });

  // Popular Interests Mobile - 2 slides
  new Swiper(".interests-slider-mobile", {
    slidesPerView: 2,
    slidesPerGroup: 1,
    cssMode: true,
    freeMode: true,
    keyboard: { enabled: true },
    scrollbar: { el: ".swiper-scrollbar" },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
  });

  // Tablet sliders
  const tabletSliders = [
    ".exclusive-slider-tablet",
    ".more-explore-swiper-tablet",
    ".news-slider-tablet",
    ".recent-slider-tablet"
  ];

  tabletSliders.forEach(selector => {
    new Swiper(selector, {
      slidesPerView: 2,
      slidesPerGroup: 1,
      cssMode: true,
      freeMode: true,
      keyboard: { enabled: true },
      scrollbar: { el: ".swiper-scrollbar" },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
    });
  });

  // Top Ten Tablet - 3 slides
  new Swiper(".top-ten-slider-tablet", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    cssMode: true,
    freeMode: true,
    keyboard: { enabled: true },
    scrollbar: { el: ".swiper-scrollbar" },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
  });

  // Popular Interests Tablet - 3 slides
  new Swiper(".interests-slider-tablet", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    cssMode: true,
    freeMode: true,
    keyboard: { enabled: true },
    scrollbar: { el: ".swiper-scrollbar" },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
  });

  // Recent sliders with specific slidesPerView settings
  new Swiper(".recent-slider-desktop", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    cssMode: true,
    freeMode: true,
    keyboard: { enabled: true },
    scrollbar: { el: ".swiper-scrollbar" },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
  });

  new Swiper(".recent-slider-tablet", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    cssMode: true,
    freeMode: true,
    keyboard: { enabled: true },
    scrollbar: { el: ".swiper-scrollbar" },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
  });

  new Swiper(".recent-slider-mobile", {
    slidesPerView: 2,
    slidesPerGroup: 1,
    cssMode: true,
    freeMode: true,
    keyboard: { enabled: true },
    scrollbar: { el: ".swiper-scrollbar" },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
  });

  // Most Popular Celebrities with specific slidesPerView settings
  new Swiper(".popular-actors-slider-desktop", {
    slidesPerView: 5,
    slidesPerGroup: 1,
    cssMode: true,
    freeMode: true,
    keyboard: { enabled: true },
    scrollbar: { el: ".swiper-scrollbar" },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
  });

  new Swiper(".popular-actors-slider-tablet", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    cssMode: true,
    freeMode: true,
    keyboard: { enabled: true },
    scrollbar: { el: ".swiper-scrollbar" },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
  });

  new Swiper(".popular-actors-slider-mobile", {
    slidesPerView: 2,
    slidesPerGroup: 1,
    cssMode: true,
    freeMode: true,
    keyboard: { enabled: true },
    scrollbar: { el: ".swiper-scrollbar" },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
  });

  // Fan Favorites with specific slidesPerView settings
  new Swiper(".fan-favorites-slider-desktop", {
    slidesPerView: 5,
    slidesPerGroup: 1,
    cssMode: true,
    freeMode: true,
    keyboard: { enabled: true },
    scrollbar: { el: ".swiper-scrollbar" },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
  });

  new Swiper(".fan-favorites-slider-tablet", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    cssMode: true,
    freeMode: true,
    keyboard: { enabled: true },
    scrollbar: { el: ".swiper-scrollbar" },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
  });

  new Swiper(".fan-favorites-slider-mobile", {
    slidesPerView: 2,
    slidesPerGroup: 1,
    cssMode: true,
    freeMode: true,
    keyboard: { enabled: true },
    scrollbar: { el: ".swiper-scrollbar" },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
  });

  // Born Today Desktop - 4 slides
  new Swiper(".born-today-slider-desktop", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    cssMode: true,
    freeMode: true,
    keyboard: { enabled: true },
    scrollbar: { el: ".swiper-scrollbar" },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
  });

  // Born Today Tablet - 3 slides
  new Swiper(".born-today-slider-tablet", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    cssMode: true,
    freeMode: true,
    keyboard: { enabled: true },
    scrollbar: { el: ".swiper-scrollbar" },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
  });

  // Born Today Mobile - 2 slides
  new Swiper(".born-today-slider-mobile", {
    slidesPerView: 2,
    slidesPerGroup: 1,
    cssMode: true,
    freeMode: true,
    keyboard: { enabled: true },
    scrollbar: { el: ".swiper-scrollbar" },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
  });
}

export { initializeSwipers }; 