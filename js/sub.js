$(document).ready(function () {
  // aos
  AOS.init();

  // gotop
  $(".gotop").hide();

  $(".gotop").click(function () {
    $("html").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".gotop").fadeIn();
    } else {
      $(".gotop").fadeOut();
    }
  });

  // header fix
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $("#header").addClass("fix");
    } else {
      $("#header").removeClass("fix");
    }
  });

  // booking
  $(".gnb > li:nth-child(2)").click(function () {
    $(this).toggleClass("active");
    $(".booking_wrap").slideToggle();
  });
  $(".booking_wrap").hide();
  $(".booking_wrap .btn_close").click(function () {
    $(".booking_wrap").slideUp();
    $(".gnb > li:nth-child(2)").removeClass("active");
  });

  // booking fix
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".booking_wrap").addClass("fix");
    } else {
      $(".booking_wrap").removeClass("fix");
    }
  });

  // depth2
  $(".depth2, .depth2_bg").hide();
  $(".gnb > li:not(:first-child, :nth-child(2), :last-child)").hover(
    function () {
      $(this).find(".depth2").stop().fadeToggle();
      $(".depth2_bg").stop().fadeToggle();
    }
  );

  // 호텔/항공/렌터카 메인 변경 메뉴 버튼
  $(".gnb .home_other").hide();
  $(".gnb > li:nth-child(1)").click(function () {
    $(".gnb > li:nth-child(1) img:nth-child(2)").stop().toggleClass("active");
    $(".gnb .home_other").stop().slideToggle();
  });

  // util
  $(".util_list").hide();
  $(".util > li").click(function () {
    $(this)
      .find(".util_list")
      .stop()
      .slideToggle()
      .parent()
      .siblings(".util > li")
      .find(".util_list")
      .stop()
      .slideUp();
  });

  // mgnb
  $(".ham").click(function () {
    $(".mgnb_wrap").animate({
      left: "0",
    });
  });

  // 모바일 호텔/항공/렌터카 메인 변경 메뉴 버튼
  $(".mgnb .home_other").hide();
  $(".mgnb > li:nth-child(1)").click(function () {
    $(".mgnb > li:nth-child(1) img:nth-child(2)").stop().toggleClass("active");
    $(".mgnb .home_other").stop().slideToggle();
  });

  // m_util
  $(".m_util_list").hide();
  $(".m_util > li").click(function () {
    $(this)
      .find(".m_util_list")
      .stop()
      .slideToggle()
      .parent()
      .siblings(".m_util > li")
      .find(".m_util_list")
      .stop()
      .slideUp();
  });

  // mdepth2
  $(".mdepth2").hide();
  $(".mgnb > li:not(:last-child)").click(function () {
    $(this)
      .find(".mdepth2")
      .stop()
      .slideDown()
      .parent()
      .siblings()
      .find(".mdepth2")
      .stop()
      .slideUp();
  });

  // mgnb_close
  $(".mgnb_close").click(function () {
    $(".mgnb_wrap").animate({
      left: "200%",
    });
  });

  // list_option button
  $(".list_option .list_option_more").hide();
  $(".list_option").click(function () {
    $(this).find("img").stop().toggleClass("active");
    $(".list_option .list_option_more").stop().slideToggle();
  });

  /* 

    // booking_option > price_slider
    var slider = document.getElementById('priceSlider');
    var output = document.getElementById('value');
    output.innerHTML = slider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function () {
        output.innerHTML = this.value;
    }
    
    */

  // booking_option
  $(".booking_option .option_title").click(function () {
    $(".booking_option .option_title img").toggleClass("active");
    $(".booking_option .option_list").stop().slideToggle();
  });

  // booking_option > option
  $(".booking_option .option_list .toggle_title").click(function () {
    $(this).find("img").toggleClass("active");
    $(this)
      .siblings(".booking_option .option_list .option")
      .stop()
      .slideToggle();
  });

  // booking_option > level
  $(".booking_option .level button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // booking_option > .option_list > more_btn
  $(
    ".booking_option input[type=checkbox].c_box + label:nth-of-type(n+6)"
  ).hide();
  $(
    ".booking_option input[type=checkbox].c_box + label:nth-of-type(n+6)::before"
  ).hide();

  $(".booking_option .more_btn p:nth-of-type(2)").hide();
  $(".booking_option .more_btn p").click(function () {
    $(this).siblings().fadeIn().siblings().fadeOut();
    $(this).parents().siblings(
      ".booking_option input[type=checkbox].c_box + label:nth-of-type(n+6)"
    ).slideToggle();
    $(this).parents().siblings(
      ".booking_option input[type=checkbox].c_box + label:nth-of-type(n+6)::before"
    ).slideToggle();
  });

  // booking_option > site
  $(".booking_option .site").hide();

  // hotel h_img
  var h_img = new Swiper(".h_img1", {
    speed: 2000, // 슬라이드 동작 속도
    loop: true, // 슬라이드 반복 여부

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });

});
