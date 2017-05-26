(function () {
  'use strict';

  app.bindProduct = function () {

    $('.js-product-nav a').on('click', function (e) {
      e.preventDefault();

      var $el = $(this);
      var target = $el.attr('href').replace('#', '');
      var $content = $('.product-content[data-target="' + target + '"]');

      $('.js-product-nav a').removeClass('active');
      $('.js-product-content').removeClass('active');

      $el.addClass('active');
      $content.addClass('active');
    });

    $('.js-product-nav a:first').click();
  };

})();
