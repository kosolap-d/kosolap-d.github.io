$(function() {
	// Карусель
    $('.jcarousel').jcarousel({
    });
    // селектор
    $('.basic').fancySelect();
    // чекбокс
    function customCheckbox(checkboxName){
        var checkBox = $('input[name="'+ checkboxName +'"]');
        $(checkBox).each(function(){
            $(this).wrap( "<span class='custom-checkbox'></span>" );
            if($(this).is(':checked')){
                $(this).parent().addClass("selected");
            }
            if ($(this).is(':disabled')) {
                $(this).parent().addClass("disabled");
            }
        });
        $(checkBox).click(function(){
            $(this).parent().toggleClass("selected");
        });
    }
    $(document).ready(function (){
        customCheckbox("jQ");
    })

    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(500);
        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }

    );

});


