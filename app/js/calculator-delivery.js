$(".calculate-delivery__item").each(function () {

  var $this = $(this);

  $this.find('.calculate-delivery__icon-item').on('click', function () {
    $(this).parent().find('.calculate-delivery__icon-item.active').not($(this)).removeClass('active');
    $(this).addClass('active');

    $this.find('.calculate-delivery__icon-item').not($(this)).find('.icon svg path, .icon svg rect, .icon svg circle').each(function () {
      if ($(this).attr('stroke')) {
        $(this).attr('stroke', '#A3B1BB')
      } else {
        $(this).attr('fill', '#A3B1BB')
      }
    })
    $(this).find('.icon svg path, .icon svg rect, .icon svg circle').each(function () {
      if ($(this).attr('stroke')) {
        $(this).attr('stroke', '#009688')
        $(this).css('fill', 'inherit')
      } else {
        $(this).attr('fill', '#009688')
      }
    })
  })
});