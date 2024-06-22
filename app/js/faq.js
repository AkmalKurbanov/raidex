$(document).on('click', '.faq-js', function () {
  $(this).parents('.faq__item').toggleClass('open').find('.faq__answer').slideToggle();
  $('.faq__item').not($(this).parents('.faq__item')).removeClass('open').find('.faq__answer').slideUp();
});