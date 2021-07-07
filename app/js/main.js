$(function () {

  $('.btn, .menu__link').on('click', function () {
    $('.btn, .menu').toggleClass('active');
  });
  $('.form-thank__close').on('click', function () {
    $('.form-thank').removeClass('active');
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
    fitToSection: false,
    responsiveWidth: 1199
  });

  $('.portfolio__inner').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: ' <button type="button" class="slick-prev">   <img src="../images/prev.svg" alt="prev images"></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../images/next.svg" alt="next images"></button>',
    responsive: [
      {
        breakpoint: 981,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 571,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  });

  //E-mail Ajax Send
  $("form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      $(".form-thank").addClass("active");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});
