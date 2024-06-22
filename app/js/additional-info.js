$('.trigger-info-js').on('click', function () {
  $(this).toggleClass('open');
  $('.additional-info__hidden-part').slideToggle();
});