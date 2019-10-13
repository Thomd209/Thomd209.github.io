$(document).ready(function(){
  $('.top-slider').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
  });
});

$(document).ready(function(){
  $('.slider-partners').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 980,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
        },
        {
          breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
        },
      ]
  });
});