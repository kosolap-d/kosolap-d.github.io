$(function() {
    var main = $('main');
    var flickr_api = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var req = {
        tags: "",
        format: "json"
    }

    $('input[type="button"]').click(search);
    $('input[type="text"]').keyup(function(e) {
        if (e.keyCode == 13) {
            search();
        }
    });
    search();

    function search(e) {
        req.tags = $('input[type="text"]').val();
        $.getJSON(flickr_api, req, function(data) {
            console.log(data);

            main.html(tmpl("item_tmpl", data));
        });
    }
});
