(function () {
  'use strict';

  app.bindHome = function () {
    $('.js-hero-slider').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 7000,
      dots: false,
      nav: false
    })
  }

})();
