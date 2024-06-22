$(document).on("click", ".popup-trigger-js", function (e) {
  e.preventDefault();
  let dataNameTrigger = $(this).attr("data-name");

  $(".popup-js").each(function () {
    let dataNamePopup = $(this).attr("data-name");

    if (dataNamePopup == dataNameTrigger) {
      $(this).addClass("open");
    }
    $("body").addClass("popup-no-scroll");
  });
});

$(document).on("click", ".popup__close", function (e) {
  e.preventDefault();
  $(this).parents(".popup-js").removeClass("open");
  $("body").removeClass("popup-no-scroll");
});

jQuery(function ($) {
  $(document).mouseup(function (e) {
    var div = $(".popup__window");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".popup-js").removeClass("open");
      $("body").removeClass("popup-no-scroll");
    }
  });
});
