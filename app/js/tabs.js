$(document).ready(function () {
  $(".tab-js").each(function (e) {
    $(this).find(".tabs-js li:first").addClass("current");
    $(this).find(".tab_content-js .tabs_item-js:first").addClass("active");

    $(this)
      .find(".tabs-js li")
      .on("click", function (e) {
        e.preventDefault();
        $(this).parent().find("li").not(this).removeClass("current");
        $(this).addClass("current");
        let tabId1 = $(this).attr("data-tab-id");

        $(".tab-js .tab_content-js .tabs_item-js").each(function (index) {
          let tabId2 = $(this).attr("data-tab-id");
          if (tabId1 == tabId2) {
            $(this)
              .parent()
              .find(".tabs_item-js")
              .removeClass("active")
              .not($(this).addClass("active"));
          }
        });
      });
  });

  $(".tabs-js li a").on("click", function (e) {
    e.preventDefault();
  });
});
