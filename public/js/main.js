// ==================================================
// * Project Name   :  Techco – IT Solutions & Technology, Business Consulting, Software Company Site Template
// * File           :  JS Base
// * Version        :  1.0.0
// * Author         :  XpressBuddy (https://themeforest.net/user/xpressbuddy/portfolio)
// * Developer      :  webrok (https://www.fiverr.com/webrok?up_rollout=true)
// ==================================================

(function($) {
  "use strict";

  // Back To Top - Start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('.backtotop').stop(true, true).fadeOut();
    }
  });
  $(".scroll").on('click', function() {
    $("html, body").animate({scrollTop: 0}, 0);
    return false; 
  });
  // Back To Top - End
  // --------------------------------------------------

  // preloader - start
  // --------------------------------------------------
  $(window).on('load', function(){
    $('#preloader').fadeOut('slow',function(){
      $(this).remove();
    });
  });
  // preloader - end
  // --------------------------------------------------

  // Mobile Menu Button Class Chnage - Start
  // --------------------------------------------------
  $(".mobile_menu_btn").on('click', function(){
    $(".mobile_menu_btn > i").toggleClass("far fa-bars fa-solid fa-xmark");
  });
  // Mobile Menu Button Class Chnage - End
  // --------------------------------------------------

  // Sticky Header - Start
  // --------------------------------------------------
  if ($('.stricky').length) {
    $('.stricky').addClass('original').clone(true).insertAfter('.stricky').addClass('stricked-menu').removeClass('original');
  }
  $(window).on('scroll', function () {
      if ($('.stricked-menu').length) {
          var headerScrollPos = 150;
          var stricky = $('.stricked-menu');
          if ($(window).scrollTop() > headerScrollPos) {
              stricky.addClass('stricky-fixed');
          } else if ($(this).scrollTop() <= headerScrollPos) {
              stricky.removeClass('stricky-fixed');
          }
      }

  });

  // Sticky Header - End
  // --------------------------------------------------

  // Filter Elements - Start
  // --------------------------------------------------
  $(".filter_elements_nav > ul > li").click(function(){
    var filterValue = $(this).attr('data-filter');
    if(filterValue == "all") {
      $(".filter_elements_wrapper > div").show();
    } else {
      $(".filter_elements_wrapper > div").not('.' + filterValue).hide();
      $(".filter_elements_wrapper > div").filter('.' + filterValue).show();
    }
  });
  $(".filter_elements_nav > ul > li").on("click", function() {
    $(this).addClass("active").siblings().removeClass("active");
  });
  // Filter Elements - End
  // --------------------------------------------------

  // Odometer Counter - Start
  // --------------------------------------------------
  jQuery('.odometer').appear(function (e) {
    var odo = jQuery(".odometer");
    odo.each(function () {
      var countNumber = jQuery(this).attr("data-count");
      jQuery(this).html(countNumber);
    });
  });
  // Odometer Counter - End
  // --------------------------------------------------

  // Pricing Toggle Button - Start
  // --------------------------------------------------
  $(".pricing_toggle_btn > button").on('click', function(){
    $(this).toggleClass("active");
    $(".pricing_block").toggleClass("active");
  });
  // Pricing Toggle Button - End
  // --------------------------------------------------

  // Videos & Images popup - Start
  // --------------------------------------------------
  $('.video_btn').magnificPopup({
    type: 'iframe',
    preloader: false,
    removalDelay: 160,
    mainClass: 'mfp-fade',
    fixedContentPos: false
  });

  $('.zoom-gallery').magnificPopup({
    delegate: '.popup_image',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function(element) {
        return element.find('img');
      }
    }
    
  });
  // Videos & Images popup - End
  // --------------------------------------------------

  // Wow JS - Start
  // --------------------------------------------------
  var wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: true,
    duration: 1000,
  });
  wow.init();
  // Wow JS - End
  // --------------------------------------------------

  // Progress Bar - Start
  // --------------------------------------------------
  // Business Growth Circle Progress
  const bgGlobalProgress = {
    index: 58,
    speed: 100,
    round: true,
    strokeBottom: 5,
    colorSlice: "#FF6D00",
    colorCircle: "#f1f1f1",
  }
  const bgCircle = new CircularProgressBar("business_growth", bgGlobalProgress);
  bgCircle.initial();
  // Progress Bar - End
  // --------------------------------------------------
  
  // Background Parallax - Start
  // --------------------------------------------------
  $('.parallaxie').parallaxie({
    speed: 0.5,
    offset: 0,
  });
  // Background Parallax - End
  // --------------------------------------------------

  // Client Logo Carousel - Start
  // --------------------------------------------------
  var swiperClientLogo = new Swiper(".client_logo_carousel", {
    loop: true,
    speed: 2000,
    freeMode: true,
    centeredSlides: true,
    allowTouchMove: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
    breakpoints: {
      376: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      1025: {
        slidesPerView: 7,
      },
    },
  });
  // Client Logo Carousel - End
  // --------------------------------------------------

  // Portfolio Carousel - Start
  // --------------------------------------------------
  var swiperPortfolio = new Swiper(".portfolio_carousel", {
    loop: true,
    speed: 400,
    spaceBetween: 30,
    allowTouchMove: true,
    centeredSlides: true,
    pagination: {
      el: ".portfolio-swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1025: {
        slidesPerView: 2,
      },
    },
  });
  // Portfolio Carousel - End
  // --------------------------------------------------

  // Team Carousel - Start
  // --------------------------------------------------
  var swiperTeam = new Swiper(".team_carousel", {
    loop: true,
    speed: 800,
    spaceBetween: 30,
    allowTouchMove: true,
    centeredSlides: true,
    pagination: {
      el: ".team-swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 3,
      },
    },
  });
  // Team Carousel - End
  // --------------------------------------------------

  // Blog 1 Col Carousel - Start
  // --------------------------------------------------
  var blogOneColCarousel = new Swiper(".blog_onecol_carousel", {
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".b1cc-swiper-button-next",
      prevEl: ".b1cc-swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".b1cc-swiper-pagination",
      clickable: true,
    },
  });
  // Blog 1 Col Carousel - End
  // --------------------------------------------------

  // Review 1 Col Carousel - Start
  // --------------------------------------------------
  var reviewOneColCarousel = new Swiper(".review_onecol_carousel", {
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: {
      nextEl: ".r1cc-swiper-button-next",
      prevEl: ".r1cc-swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
  });
  // Review 1 Col Carousel - End
  // --------------------------------------------------

  // Service Pill Carousel - Start
  // --------------------------------------------------
  var servicePillCarousel = new Swiper(".service_pill_carousel", {
    loop: true,
    speed: 4000,
    spaceBetween: 20,
    navigation: {
      nextEl: ".spc-swiper-button-next",
      prevEl: ".spc-swiper-button-prev",
    },
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
    breakpoints: {
      321: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1025: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });
  // Service Pill Carousel - End
  // --------------------------------------------------

  // Service Pill Carousel - Start
  // --------------------------------------------------
  var review4ColCarousel = new Swiper(".review_4col_carousel", {
    loop: true,
    speed: 1000,
    spaceBetween: 20,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
  // Service Pill Carousel - End
  // --------------------------------------------------

})(jQuery);