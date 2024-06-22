$(document).ready(function () {
  $(document).on('click', '.inside-tab-trigger-js', function () {
    $('.inside-tab-trigger-js').not(this).removeClass('active');
    $(this).addClass('active');

    let triggerTabId = $(this).attr('data-tab-id');

    $('.shopping__tab-child-list .shopping__tab-child-item').each(function () {
      let tabId = $(this).attr('data-tab-id');

      if (tabId == triggerTabId) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });

  });


  $(document).on('click', '.category-tab-trigger-js', function () {
    $('.category-tab-trigger-js').not(this).removeClass('active');
    $(this).addClass('active');

    let $this = $(this);
    let categoryTabId = $(this).attr('data-tab-id');



    $('.shopping__tab-list .shopping__tab-parent-item').each(function () {
      let tabId = $(this).attr('data-tab-id');

      if (tabId == categoryTabId) {
        $(this).addClass('active');
        $(this).find('.inside-tab-trigger-js:first').trigger('click');
      } else {
        $(this).removeClass('active');
      }
    });

  });

  $('.category-tab-trigger-js:first').trigger('click');





});