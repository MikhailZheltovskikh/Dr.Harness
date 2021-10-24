$(function () {

   $('.catalog__link').on('click', function () {
      if ($(this).hasClass('active')) {
         $(this).removeClass('active');
      }
      else {
         $(this).addClass('active');
      }
   });

   $('.menu__btn').on('click', function () {
      $('.menu > ul').slideToggle();
   });

   $('input, select').styler();

   $('.description__photo-slider').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      focusOnSelect: true,
      arrows: false,
      responsive: [
         {
            breakpoint: 1500,
            settings: {
               slidesToShow: 5,
            }
         },
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 4,
            }
         },
         {
            breakpoint: 900,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 322,
            settings: {
               slidesToShow: 1,
            }
         },
      ]
   });


   var mixer = mixitup('.catalog__inner');

});