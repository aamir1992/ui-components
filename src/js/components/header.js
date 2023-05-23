/* Search */
$(document).ready(function () {
    $(".search").on("click", function (e) {
      if ($("body").hasClass("fixed")) {
      }
      $("html,body").toggleClass("fixed");
      $(this)
        .addClass("active")
        .closest("header")
        .find(".search-overlay")
        .addClass("active");
    });
    $(".search-overlay .hamburger").on("click", function (e) {
      $(".search-box").removeClass("slide-top");
      $(".search-box input").val("");
      $("#pages").blur();
      if ($("body").hasClass("fixed")) {
      }
      $("html,body").removeClass("fixed");
      $(this).closest("header").find(".search-overlay").toggleClass("active");
    });
  
    // Search Focus
    $(".search-box input").focus(function () {
      $(".search-box").addClass("slide-top");
    });
    $(".search-box input").blur(function () {
      var $this = $(this).val();
      if ($this <= 0) {
        $(".search-box").removeClass("slide-top");
      }
    });
  
    var prevScrollpos = window.pageYOffset;
    var headerHeight = $(".header").outerHeight();
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos || currentScrollPos == "0") {
        $(".header").css("top", "0");
      } else {
        $(".header").css("top", -headerHeight);
      }
  
      var scroll = $(window).scrollTop();
      if (scroll >= 10) {
        $(".header").addClass("stickyHeader");
        //$(".header .wrapper").removeClass("border-bottom-1");
      } else {
        $(".header").removeClass("stickyHeader");
        //$(".header .wrapper").addClass("border-bottom-1");
      }
      prevScrollpos = currentScrollPos;
    };
  });
  
  $(".hamburger.main-ham").on("click", function (e) {
    $("header + div, header + section").css("z-index", "1");
    if ($("body").hasClass("fixed")) {
    }
    $("html,body").toggleClass("fixed");
    $(this)
      .toggleClass("active")
      .closest("header")
      .find("#menu")
      .toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".hamburger input").prop("checked", "true");
    } else {
      $(".hamburger input").prop("checked", "false");
    }
  });
  $(".hamburger.main-ham.active").on("click", function (e) {
    $("header + div, header + section").css("z-index", "9");
  });
  $("#menu li a").click(function () {
    $(this).closest("header").find(".hamburger").removeClass("active");
    $(this).closest("#menu").removeClass("active");
    $("body").removeClass("body-fixed");
    $("body").removeClass("fixed");
  });
  /* Search */