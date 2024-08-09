(function($) {
  "use strict";

  // Cache jQuery selectors
  const $window = $(window);
  const $document = $(document);
  const $backToTop = $('.backtotop');
  const $scroll = $(".scroll");
  const $preloader = $('#preloader');
  const $mobileMenuBtn = $(".mobile_menu_btn");
  const $stricky = $('.stricky');
  const $filterNav = $(".filter_elements_nav > ul > li");
  const $odometer = jQuery('.odometer');
  const $pricingToggleBtn = $(".pricing_toggle_btn > button");
  const $videoBtn = $('.video_btn');
  const $zoomGallery = $('.zoom-gallery');
  const $parallaxie = $('.parallaxie');

  // Back To Top - Start
  $window.scroll(function() {
    if ($window.scrollTop() > 200) {
      $backToTop.stop(true, true).fadeIn();
    } else {
      $backToTop.stop(true, true).fadeOut();
    }
  });

  $scroll.on('click', function() {
    $("html, body").animate({scrollTop: 0}, 0);
    return false;
  });
  // Back To Top - End

  // Preloader - Start
  $window.on('load', function(){
    $preloader.fadeOut('slow', function(){
      $(this).remove();
    });
  });
  // Preloader - End

  // Mobile Menu Button Class Change - Start
  $mobileMenuBtn.on('click', function(){
    $mobileMenuBtn.find('i').toggleClass("far fa-bars fa-solid fa-xmark");
  });
  // Mobile Menu Button Class Change - End

  // Sticky Header - Start
  if ($stricky.length) {
    $stricky.addClass('original').clone(true).insertAfter($stricky).addClass('stricked-menu').removeClass('original');
  }

  $window.on('scroll', function () {
    if ($('.stricked-menu').length) {
      const headerScrollPos = 150;
      const $strickedMenu = $('.stricked-menu');
      if ($window.scrollTop() > headerScrollPos) {
        $strickedMenu.addClass('stricky-fixed');
      } else {
        $strickedMenu.removeClass('stricky-fixed');
      }
    }
  });
  // Sticky Header - End

  // Filter Elements - Start
  $filterNav.click(function(){
    const filterValue = $(this).data('filter');
    if (filterValue === "all") {
      $(".filter_elements_wrapper > div").show();
    } else {
      $(".filter_elements_wrapper > div").each(function() {
        $(this).toggleClass('hidden', !$(this).hasClass(filterValue));
      });
    }
    $filterNav.removeClass('active');
    $(this).addClass('active');
  });
  // Filter Elements - End

  // Odometer Counter - Start
  $odometer.appear(function () {
    $odometer.each(function () {
      const countNumber = $(this).data("count");
      $(this).html(countNumber);
    });
  });
  // Odometer Counter - End

  // Pricing Toggle Button - Start
  $pricingToggleBtn.on('click', function(){
    $(this).toggleClass("active");
    $(".pricing_block").toggleClass("active");
  });
  // Pricing Toggle Button - End

  // Videos & Images Popup - Start
  $videoBtn.magnificPopup({
    type: 'iframe',
    preloader: false,
    removalDelay: 160,
    mainClass: 'mfp-fade',
    fixedContentPos: false
  });

  $zoomGallery.magnificPopup({
    delegate: '.popup_image',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    gallery: { enabled: true },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function(element) { return element.find('img'); }
    }
  });
  // Videos & Images Popup - End

  // Wow JS - Start
  new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: true,
    duration: 1000,
  }).init();
  // Wow JS - End

  // Progress Bar - Start
  const bgGlobalProgress = {
    index: 58,
    speed: 100,
    round: true,
    strokeBottom: 5,
    colorSlice: "#FF6D00",
    colorCircle: "#f1f1f1",
  };
  new CircularProgressBar("business_growth", bgGlobalProgress).initial();
  // Progress Bar - End

  // Background Parallax - Start
  $parallaxie.parallaxie({
    speed: 0.5,
    offset: 0,
  });
  // Background Parallax - End

  // Swiper Initializations
  function initSwiper(selector, config) {
    return new Swiper(selector, config);
  }

  // Client Logo Carousel
  initSwiper(".client_logo_carousel", {
    loop: true,
    speed: 2000,
    freeMode: true,
    centeredSlides: true,
    allowTouchMove: true,
    autoplay: { delay: 1, disableOnInteraction: true },
    breakpoints: {
      376: { slidesPerView: 2 },
      768: { slidesPerView: 4 },
      1025: { slidesPerView: 7 },
    }
  });

  // Portfolio Carousel
  initSwiper(".portfolio_carousel", {
    loop: true,
    speed: 400,
    spaceBetween: 30,
    allowTouchMove: true,
    centeredSlides: true,
    pagination: { el: ".portfolio-swiper-pagination", clickable: true },
    breakpoints: { 1025: { slidesPerView: 2 } }
  });

  // Team Carousel
  initSwiper(".team_carousel", {
    loop: true,
    speed: 800,
    spaceBetween: 10,
    allowTouchMove: true,
    centeredSlides: true,
    pagination: { el: ".team-swiper-pagination", clickable: true },
    breakpoints: {
      576: { slidesPerView: 5 },
      1025: { slidesPerView: 3 },
    }
  });

  // Blog 1 Col Carousel
  initSwiper(".blog_onecol_carousel", {
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".b1cc-swiper-button-next",
      prevEl: ".b1cc-swiper-button-prev"
    },
    autoplay: { delay: 4000, disableOnInteraction: true },
    pagination: { el: ".b1cc-swiper-pagination", clickable: true }
  });

  // Review 1 Col Carousel
  initSwiper(".review_onecol_carousel", {
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: {
      nextEl: ".r1cc-swiper-button-next",
      prevEl: ".r1cc-swiper-button-prev"
    },
    autoplay: { delay: 4000, disableOnInteraction: true }
  });

  // Service Pill Carousel
  initSwiper(".service_pill_carousel", {
    loop: true,
    speed: 4000,
    spaceBetween: 20,
    navigation: {
      nextEl: ".spc-swiper-button-next",
      prevEl: ".spc-swiper-button-prev"
    },
    autoplay: { delay: 1, disableOnInteraction: true },
    breakpoints: {
      321: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1025: { slidesPerView: 4 },
      1200: { slidesPerView: 5 },
    }
  });

  // Review 4 Col Carousel
  initSwiper(".review_4col_carousel", {
    loop: true,
    speed: 1000,
    spaceBetween: 20,
    autoplay: { delay: 3000, disableOnInteraction: true },
    breakpoints: {
      576: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    }
  });

})(jQuery);
