!function($, window, _) {
    "use strict";
   
    var $doc = $(document), win = $(window), AnimationsArray = [];
    window.SITE = {
        init: function() {
             var menu2 = $("#full-menu.style2"), 
                     items2 = menu2.find(".full-menu>li"), 
                     toggle = $(".hamburger-menu"), 
                     tlMainNav = (toggle.find("span"), 
            new TimelineLite({
                paused: !0,
                onStart: function() {
                    menu2.css("display", "block");
                },
                onReverseComplete: function() {
                    menu2.css("display", "none");
                }
            })), close = $(".menu-close"), links = menu2.find("li.scroll > a");
            
            AnimationsArray.push(tlMainNav), tlMainNav.add(TweenLite.to(menu2, .5, {
                    autoAlpha: 1,
                    ease: Quart.easeOut
                })).staggerFrom(items2, .1 * items2.length, {
                    y: "50",
                    opacity: 0,
                    ease: Quart.easeOut
                }, .1), toggle.on("click", function() {
                    return toggle.data("toggled") ? (tlMainNav.timeScale(1.6).reverse(), 
                    toggle.data("toggled", !1)) : (tlMainNav.timeScale(1).restart(), 
                    toggle.data("toggled", !0)), !1;
                }), close.on("click", function() {
                    return tlMainNav.timeScale(1.6).reverse(), 
                    toggle.data("toggled", !1), !1;
                }), links.on("click", function() {
                    var _this = $(this), url = _this.attr("href"), hash = -1 !== url.indexOf("#") ? url.substring(url.indexOf("#") + 1) : "", pos = $("#" + hash).offset().top - $(".header").outerHeight() 
                    return hash ? (tlMainNav.timeScale(2).reverse(), 
                    toggle.data("toggled", !1), TweenMax.to(window, win.height() / 500, {
                        scrollTo: {
                            y: pos - 90
                        },
                        ease: Quart.easeOut
                    }), !1) : !0;
                });
        }
    }, $doc.ready(function() {
        window.SITE.init();  		
		$("a.home-down").on('click', function(){
			$('html, body').animate({scrollTop: $(this.hash).offset().top - 90}, 1000);
			return false;
		});
    });
}(jQuery, this, _);