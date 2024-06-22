$('.select-js').on('click', function () {
  $(this).parent().toggleClass('open');
  $(this).parent().find('.select__dropdown').toggleClass('open');
  $('.select__dropdown').not($(this).parent().find('.select__dropdown')).removeClass('open');
  $(this).parent().find('.tabs_item:first').addClass('active');
  $(this).parent().find('.tabs_item:not(:first)').removeClass('active');
  $(this).parent().find('.tabs li:first').addClass('current');
  $(this).parent().find('.tabs li:not(:first)').removeClass('current');
});

$(document).on('click', function (e) {
  if (!$(e.target).closest(".select").length) {
    $('.select, .select__dropdown').removeClass('open');
  }
  e.stopPropagation();
});


$(document).on('click', '.select__option', function () {
  let dataText = $(this).attr('data-text');
  let dataId = $(this).attr('data-id');
  let imgUrl = $(this).find('.select__option-img img').attr('src');
  let dataSize = $(this).find('.select__option-size').text();
  $(this).parents('.select').addClass('selected');
  $(this).parents('.select').find('.select-input').attr('value', dataId);
  $(this).parents('.select').find('.select__selected-label').text(dataText);
  if (imgUrl) {
    $(this).parents('.select').find('.select__selected .select__selected-img').remove();
    $(this).parents('.select').find('.select__selected').prepend(`<div class="select__selected-img"><img src="${imgUrl}" alt="size"></div>`)
  } 
  if (dataSize) {
    $(this).parents('.select').find('.select__selected-label').text(dataText).append(`<i class="select__selected-size">${dataSize}</i>`);
    
  }
});