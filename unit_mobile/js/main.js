$(".button").sideNav({
	menuWidth: 300,
	closeOnClick: true,
	draggable: true
});

var typed = new Typed('#typed', {
  strings: ["peer-2-peer", "24/7", "without teacher", "are you <b>BORN<b style='color: #444'>2</b>CODE?</b>"],
  typeSpeed: 40,
  backSpeed: 80
});

var		sroll = $('.logo').width();

$(window).on("scroll touchmove", function() {
		if ($(document).scrollTop() >= ($(".main").position().top - 78)) {
				$('.nav-wrapper').addClass('nav-bottom').animate();
			$('.logo-hidden').css("display", "block");
		};
		if ($(document).scrollTop() < $(".main").position().top - 78) {
			$('.logo-hidden').css("display", "none");
			$('.nav-wrapper').removeClass('nav-bottom');
			console.log(sroll - $(document).scrollTop());
			$('.logo').css("width", sroll - $(document).scrollTop());
			// $('.logo').css("width") = $('.logo').css("width") - ($(document).scrollTop() - $(".main").position().top);
		}
});