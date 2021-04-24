$(function () {

  $('.btn, .menu__link').on('click', function () {
    $('.btn, .menu').toggleClass('active');
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 70) {
      $(".menu__wrapper").addClass("dark-header");
    } else {
      $(".menu__wrapper").removeClass("dark-header");
    }
  });

  $('#wrapper').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
    menu: '#menu',
    fitToSection:false,
    responsiveWidth: 1199
  });
});
