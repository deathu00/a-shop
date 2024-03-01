$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    speed: 300,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    waitForAnimate: false,
    centerMode: true,
    nextArrow: '.next',
    prevArrow: '.previous'
  });


});
