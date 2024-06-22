import Swiper from "swiper";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";

var swiper = new Swiper(".header-top-js", {
  modules: [EffectFade, Autoplay, Navigation],
  effect: "fade",
  fadeEffect: { crossFade: true },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
    autoplayStopOnLast: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".slider-js", {
  modules: [Pagination, EffectFade, Autoplay],
  effect: "fade",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
    autoplayStopOnLast: true,
  },
});


$(document).ready(function () {
  $(".shopping-js").each(function () {
    var children = $(this).find(".shopping__tabs-country-item");


    if (children.length > 1) {
      var index = 0;

      function toggleClass() {
      
        if (index > 0) {
          $(children[index - 1]).removeClass("active");
        } else {
         
          $(children[children.length - 1]).removeClass("active");
        }
     
        $(children[index]).addClass("active");
        index++;
       
        if (index === children.length) {
          index = 0;
        }
      }

      
      setInterval(toggleClass, 4000);
    }
  });
});



var swiper = new Swiper(".reviews-js", {
  modules: [Autoplay],
  autoplay: {
    delay: 3500,
    disableOnInteraction: true,
    autoplayStopOnLast: true,
  },

  centeredSlides: true,
  watchOverflow: true,
  watchSlidesProgress: true,
  updateOnWindowResize: true,
  loop: true,
  spaceBetween: 22,

  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 16,
    },
    480: {
      slidesPerView: 1.8,
      spaceBetween: 16,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2.8,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3.8,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 4.2,
      spaceBetween: 24,
    },
  },
});


var swiper = new Swiper(".category-js", {
  modules: [Navigation],
  loop: false,
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: "auto",
    },
  },
});


$(".calculator-js").each(function (index, value) {
  var swiper = new Swiper(value, {
    loop: false,
    spaceBetween: 24,
    speed: 1000,
    centeredSlides: false,

    breakpoints: {
      0: {
        slidesPerView: 7,
        spaceBetween: 24,
        centeredSlides: false,
      },
      576: {
        slidesPerView: 8,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 10,
        centeredSlides: false,
      },
      992: {
        slidesPerView: 13,
        spaceBetween: 16,
        centeredSlides: false,
      },
      1200: {
        slidesPerView: 16,
        centeredSlides: false,
      },
    },
  });
  
});
