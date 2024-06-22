$(document).ready(function () {
  if ($(".line-js").length) {
    let activePosition = $(".line-js").find(".active").position();
    let activeWidth = $(".line-js").find(".active").outerWidth();
    let lineRunner = $(".line-js").find(".line-runner");
    lineRunner.css({
      left: activePosition.left,
      width: activeWidth,
    });

    $(document).on("click", ".line-js .trigger-js", function () {
      let activePosition = $(".line-js").find(".active").position();
      let activeWidth = $(".line-js").find(".active").outerWidth();
      let lineRunner = $(".line-js").find(".line-runner");
      lineRunner.css({
        left: activePosition.left,
        width: activeWidth,
      });
    });
  } else {
  }
});
