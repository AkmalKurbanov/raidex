$(document).ready(function () {
  $(document).on("click", ".hamburger-js", function () {
    $("body").toggleClass("menu-no-scroll");
    $(this).toggleClass("open");
    $(this).parent().toggleClass("open");
    $(".header__control-icon").not($(this).parent()).toggleClass("hide");
    $(".menu").toggleClass("open");
  });
  
  $(document).on("click", ".menu__nav-link", function () {
    $("body").removeClass("menu-no-scroll");
    $(".menu-js").removeClass("open");
    $(".hamburger-js").removeClass("open");
    $(".header__control-icon").removeClass("hide");
  });
});
