 $(document).ready(function(){
      $(".nav-bar__mobile-open").click(function(){
        $(".nav-bar__mobile").toggleClass("in");
        $('body').toggleClass("overflow-hidden");
      });

      $(".nav-bar__link_mobile").click(function () {
          $(".nav-bar__mobile").toggleClass("in");
        $('body').toggleClass("overflow-hidden");
      });
});
