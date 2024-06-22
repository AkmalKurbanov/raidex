$(document).ready(function () {
  $('.input_pass').each(function () {
    $(this).find('.hide').on('click', function () {
      $(this).hide();
      $(this).parent().find('.show').fadeIn();
      $(this).parent().find('input').attr('type', 'text')
    });
    $(this).find('.show').on('click', function () {
      $(this).hide();
      $(this).parent().find('.hide').fadeIn();
      $(this).parent().find('input').attr('type', 'password')
    });
  });
});
