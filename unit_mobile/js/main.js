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
			// console.log(sroll - $(document).scrollTop());
			$('.logo').css("width", sroll - $(document).scrollTop());
			// $('.logo').css("width") = $('.logo').css("width") - ($(document).scrollTop() - $(".main").position().top);
		}
});


$(document).ready(function(){
	$(".owl-one").owlCarousel({
		items: 1,
		itemsDesktop : false,
		itemsDesktopSmall : false,
		itemsTablet: false,
		itemsMobile : false,
		nav: false,
		animateOut: 'fadeOut',
		margin: 20
	});

    $(".owl-two").owlCarousel({
        items: 1,
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        animateOut: 'fadeOut',
        margin: 40
    });

    $(".owl-three").owlCarousel({
        items: 5,
		loop: false,

        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        animateOut: 'fadeOut',
        margin: 5,
		stagePadding: 50,
        autoplay:false,
        autoplayTimeout:5000,
        responsive:{
        	320:{
        		items:1
			},
        	375:{
        		items:2
			},
            600:{
                items:5
            }
        }
    });
    $('.photo-carousel').owlCarousel({
        items: 1,
        loop:true,
    });
    $('.video-carousel').owlCarousel({
        items: 1,
        video: true
    });
    $('.city-carousel').owlCarousel({
        items: 1,
        video: true,
    });


	$('.read-more-button').click(function(event) {
        console.log($(this).parent().parent().find('.read-more-target').toggleClass('hide'));
        console.log('click');
    });
});