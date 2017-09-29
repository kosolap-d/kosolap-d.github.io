 $(document).ready(function(){
      $(".navbar-mobile-open").click(function(){
        $(".navbar-mobile").toggleClass("in");
        $('body').toggleClass("overflow-hidden");
      });

      $(".navbar-mobile__link").click(function () {
          $(".navbar-mobile").toggleClass("in");
        $('body').toggleClass("overflow-hidden");
      });

      $(".navbar-mobile-close").click(function () {
          $(".navbar-mobile").toggleClass("in");
        $('body').toggleClass("overflow-hidden");
      });

      $(".navbar-search-open").click(function(){
        $(".navbar-search").toggleClass("in");
        $('body').toggleClass("overflow-hidden");
      });

      $(".navbar-search-close").click(function () {
        $(".navbar-search").toggleClass("in");
        $('body').toggleClass("overflow-hidden");
      });
});
