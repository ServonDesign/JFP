import $ from "./../vendor/jquery/dist/jquery";
import slick from "./../vendor/slick/rdslick.js";

const slider = () => {

	$(".slider__items").slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true,
		arrows: false,
		responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
				arrows: true,
				dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
				arrows: true,
				dots: false
      }
    }
  ]
	});

};


export { slider };
