$(document).on("click", ".trigger-js", function (e) {
  e.preventDefault();
  let triggerDataName = $(this).attr("data-name");
  $(".trigger-js").not(this).removeClass("active");
  $(this).addClass("active");

  $(".called-js").each(function () {
    let calledDataName = $(this).attr("data-name");

    if (calledDataName == triggerDataName) {
      $(this).addClass("show");
    } else {
      $(this).removeClass("show");
    }
  });
});