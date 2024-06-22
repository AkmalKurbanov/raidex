$(document).on("click", ".tracking-close-js", function () {
  $(".tracking").removeClass("open");
});

$(".tracking__status-detail-trigger").on("click", function () {
  $(this).toggleClass("open");
  $(this)
    .parents(".tracking__status-desc")
    .find(".tracking__status-detail")
    .toggle();
});
