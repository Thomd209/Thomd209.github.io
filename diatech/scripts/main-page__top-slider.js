$(document).ready(function(){
  $('.top-slider').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: "<span class='top-slider__prev-arrow'><i class='fas fa-chevron-left'></i></span>",
      nextArrow: "<span class='top-slider__next-arrow'><i class='fas fa-chevron-right'></i></span>",
  });
});

$(document).ready(function(){
  $('.slider-partners').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      prevArrow: "<span class='slider-partners__prev-arrow'><i class='fas fa-chevron-left'></i></span>",
      nextArrow: "<span class='slider-partners__next-arrow'><i class='fas fa-chevron-right'></i></span>",
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