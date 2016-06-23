import $ from "./../vendor/jquery/dist/jquery";
import slick from "./../vendor/slick/rdslick.js";

const slider = () => {

	$(".slider__items").slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true,
		arrows: false
	});

};


export { slider };
