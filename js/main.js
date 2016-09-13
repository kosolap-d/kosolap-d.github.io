
(function($){
   'use strict'; 
    
    $(window).load(function() {
        // PORTFOLIO ISOTOPE 
        $(".portfolio_items").isotope({
                itemSelector: '.single_item',
                layoutMode: 'fitRows',
                columnWidth: '.col-md-4'
        });

        // isotope click function

        $('.portfolio_filter ul li').on('click', function(){
                $(".portfolio_filter ul li").removeClass("select-cat");
                $(this).addClass("select-cat");

                var selector = $(this).attr('data-filter');
                $(".portfolio_items").isotope({
                        filter: selector,
                        animationOptions: {
                                duration: 750,
                                easing: 'linear',
                                queue: false,
                        }
                });	
        });


        // MAGNIFIC POPUP FOR PORTFOLIO PAGE
        $('.image-link').magnificPopup({
                type:'image'
        });
    });
    
    // TESTIMONIAL CAROUSEL
    if($("#owl-demo").length > 0)
    {
        var owl = $("#owl-demo");		
                owl.owlCarousel({
                navigation : false,
                pagination : false,
                singleItem : true,
                autoPlay   : 3000
        });
    }
    
    // GOOGLE MAP	
    if($("#map").length > 0)
    {
        var myOptions = {
        zoom: 15,
        center: new google.maps.LatLng(50.448509, 30.522816), //change the coordinates
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        mapTypeControl: false,
        styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
        };		 

        var map = new google.maps.Map(document.getElementById("map"), myOptions);
        var marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(50.448509, 30.522816) //change the coordinates
        });

        var infowindow = new google.maps.InfoWindow({
                content: "<b>Kiev</b> <br />Ukrain"
        });

        google.maps.event.addListener(marker, "click", function () {
                infowindow.open(map, marker);
        });
        infowindow.open(map, marker);
    }
    
   $(".contact-form").on('submit', function(e){
        e.preventDefault();
        
        var uri = $(this).attr('action');
        $("#con_submit").val('Wait...');
        var con_name = $("#con_name").val();
        var con_email = $("#con_email").val();
        var con_message = $("#con_message").val();
        
        var required = 0;
        $(".requie", this).each(function() {
            if ($(this).val() == '')
            {
                $(this).addClass('reqError');
                required += 1;
            }
            else
            {
                if ($(this).hasClass('reqError'))
                {
                    $(this).removeClass('reqError');
                    if (required > 0)
                    {
                        required -= 1;
                    }
                }
            }
        });
        if (required === 0)
        {
            $.ajax({
                type: "POST",
                url: 'mail.php',
                data: {con_name: con_name, con_email: con_email, con_message: con_message},
                success: function(data)
                {
                    $(".contact-form input, .contact-form textarea").val('');
                    $("#con_submit").val('Done!');
                }
            });
        }
        else
        {
            $("#con_submit").val('Failed!');
        }
   });
   $(".requie").on('keyup', function() {
        $(this).removeClass('reqError');
    });
   
})(jQuery);