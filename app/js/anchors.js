$(document).ready(function () {
  // Добавляем обработчик клика по кнопкам
  $(".scroll-button").on("click", function () {
    // Получаем идентификатор целевой секции из data-атрибута кнопки
    let target = $(this).data("target");

    
    // Получаем целевой элемент, к которому нужно прокрутиться
    var $target = $(target);
    
    // Плавно скроллим к цели
    $("html, body").animate(
      
      {
        scrollTop: $target.offset().top,
      },
      1000,
      
    );
  });




    var lastScrollTop = 0;
    $(window).scroll(function () {
      var currentScrollTop = $(this).scrollTop();

      if (currentScrollTop > lastScrollTop && currentScrollTop > 300) {
        // Скролл вниз и больше 300 пикселей
        $(".header").addClass("hidden");
      } else {
        // Скролл вверх или меньше 300 пикселей
        $(".header").removeClass("hidden");
      }

      lastScrollTop = currentScrollTop;
    });
});
