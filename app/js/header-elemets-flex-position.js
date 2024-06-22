$(document).ready(function () {

  function checkPosition() {

    let lengthElemnt = $('.header .header__inner-item').length;
    if (lengthElemnt >= 2) {
      $('.header__inner').css('justify-content', 'space-between');
    }
  }


  checkPosition();



  $(window).on('resize', function () {
    checkPosition();
  });

});