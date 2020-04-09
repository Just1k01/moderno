$(function () {

  $(".rate-star").rateYo({
    normalFill: "#A0A0A0",
    starWidth: "12px",
    rating: 5,
    readOnly: true
  });
  $('.product__slider-inner').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4

  });

  var mixer = mixitup('.products__inner-box');


});