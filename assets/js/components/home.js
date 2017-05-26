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
    });

    $('.js-hero-videos-slider').owlCarousel({
      items: 3,
      loop: true,
      dots: true,
      nav: false,
      margin: 5
    });

    $('.js-hero-videos .js-videos-nav a').on('click', function (e) {
      e.preventDefault();

      var $el = $(this);
      var $html = $($el.data('html'));

      $('.js-hero-videos .js-video-container').html($html);
    });

    setTimeout(function () {
      $('.js-hero-slider').css({opacity: 1});
      $('.js-hero-videos').css({opacity: 1});
    }, 500);
  }

})();
