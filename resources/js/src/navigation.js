import $ from "./../vendor/jquery/dist/jquery";

const navigation = () => {

	let navBtn = $(".header__nav--menu"),
			navBtnClose = $(".close-nav"),
			nav = $(".main__nav");


	navBtn.on("click", function(e) {
		e.preventDefault();
		nav.toggleClass("active");
	});

	navBtnClose.on("click", function(e) {
		e.preventDefault();
		nav.removeClass("active");
	});

};


export { navigation };
