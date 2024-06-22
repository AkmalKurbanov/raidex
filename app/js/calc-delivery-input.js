$(document).on("click", ".place-js", function (e) {
  e.preventDefault();
  let dataVal = $(this).attr("data-value");
  let dataId = $(this).attr("data-id");

  $(this).parents(".place-input-wrap-js").find(".place-val-js").val(dataVal);
  $(this).parents(".place-input-wrap-js").find('.place-hidden-val-js').val(dataId);

});
