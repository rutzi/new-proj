$(document).ready(function(){
  $('.slider').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true
  });


  $('.sliders').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true,
	adaptiveWidth: true
  });
});