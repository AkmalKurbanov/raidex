import mCustomScrollbar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js'



(function ($) {
  $(window).on("load", function () {
    $(".vertical-scroll").mCustomScrollbar({
      axis: "y",
      theme: "dark",
      advanced: {
        autoExpandVerticalScroll: true
      }
    });
    $(".horizontal-scroll").mCustomScrollbar({
      axis: "x",
      theme: "dark",
      advanced: {
        autoExpandHorizontalScroll: true
      }
    });
  });
})(jQuery);


