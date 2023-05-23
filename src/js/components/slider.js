//SliderOne
var swiperOne = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-next-button",
    prevEl: ".swiper-prev-button",
  },
  effect: "slide",
  loop: "infinite",
  pagination: {
    el: ".swiper-pagination-one",
    type: "fraction",
  },
  //   autoplay: {
  //     delay: 5000,
  //   },
});
// swiperOne.on("slideChange", function (sld) {
//   document.body.setAttribute("data-sld", sld.realIndex);
// });
// swiperOne.on("slideChange", function (sld) {
//   document.getElementById("slideImage").setAttribute("data-sld", sld.realIndex);
// });
// SliderTwo

var swiper = new Swiper(".mySwiperTwo", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  autoplay: {
    delay: 3000,
  },
});

// SliderThree

var swiper = new Swiper(".mySwiperThree", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  direction: "vertical",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//SliderFour

var swiper = new Swiper(".mySwiperFour", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3,
  paginationClickable: true,
  spaceBetween: 5,
  breakpoints: {
    1920: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    1028: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
  },
});

//SliderFive

var swiper = new Swiper(".mySwiperFive", {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 1000,
  autoplay: {
    delay: 0,
  },
  loop: true,
  slidesPerView: "auto",
  allowTouchMove: false,
  disableOnInteraction: true,
});

//SliderSix
var swiper = new Swiper(".mySwiperSix", {
  pagination: {
    el: ".swiper-pagination-six",
    dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-next-button-six",
    prevEl: ".swiper-prev-button-six",
  },
  autoplay: {
    delay: 4000,
  },
});

//SliderSeven

var swiper = new Swiper(".mySwiperSeven", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3,
  paginationClickable: true,
  spaceBetween: 5,
  breakpoints: {
    1920: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    1028: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
  },
});

// SliderEight
var swiper = new Swiper(".mySwiperEight", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 0,
  speed: 1000,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },
});

var container = document.querySelectorAll(".mySwiperEight")[0];
var arrow = document.querySelectorAll(".arrow")[0];
var leftSide = document.querySelectorAll(".swiper-button-prev-custom")[0];
var rightSide = document.querySelectorAll(".swiper-button-next-custom")[0];

TweenMax.set(arrow, { scale: 0, xPercent: -50, yPercent: -50 });

if(container || arrow || leftSide || rightSide) {
  container.addEventListener("pointerenter", function(e) {
    positionArrow(e);
  });
  
  leftSide.addEventListener("pointerenter", function(e) {
    TweenMax.to(arrow, 0.5, { scale: 1, opacity: 1 , rotation:-45 });
  });
  rightSide.addEventListener("pointerenter", function(e) {
    TweenMax.to(arrow, 0.5, { scale: 1, opacity: 1, rotation:135 });
  });
  
  container.addEventListener("pointerleave", function(e) {
    TweenMax.to(arrow, 0.5, { scale: 0, opacity: 0 });
    positionArrow(e);
  });
  
  container.addEventListener("pointermove", function(e) {
    positionArrow(e);
  });
}

function positionArrow(e) {
  var rect = container.getBoundingClientRect();  
  var relX = e.pageX - container.offsetLeft;
  var relY = e.pageY - container.offsetTop;

  TweenMax.to(arrow, 0.5, { x: relX, y: relY });
}
