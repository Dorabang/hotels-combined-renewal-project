$(document).ready(function () {


    // aos
    AOS.init();



    // gotop
    $('.gotop').hide();

    $('.gotop').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 500);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.gotop').fadeIn();
        }
        else {
            $('.gotop').fadeOut();
        }
    });



    // header fix
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#header').addClass('fix');
        } else {
            $('#header').removeClass('fix');
        }
    });



    // booking
    $('.gnb > li:nth-child(2)').addClass('active');
    $('.gnb > li:nth-child(2)').click(function () {
        $(this).toggleClass('active');
        $('.booking_wrap').slideToggle();
    });
    $('.booking_wrap .btn_close').click(function () {
        $('.booking_wrap').slideUp();
        $('.gnb > li:nth-child(2)').removeClass('active');
    });



    // booking fix
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.booking_wrap').addClass('fix');
        } else {
            $('.booking_wrap').removeClass('fix');
        }
    });



    // depth2
    $('.depth2, .depth2_bg').hide();
    $('.gnb > li:not(:first-child, :nth-child(2), :last-child)').hover(function () {
        $(this).find('.depth2').stop().fadeToggle();
        $('.depth2_bg').stop().fadeToggle();
    });


    // 호텔/항공/렌터카 메인 변경 메뉴 버튼
    $('.gnb .home_other').hide();
    $('.gnb > li:nth-child(1)').click(function () {
        $('.gnb > li:nth-child(1) img:nth-child(2)').stop().toggleClass('active');
        $('.gnb .home_other').stop().slideToggle();
    });


    // util
    $('.util_list').hide();
    $('.util > li').click(function () {
        $(this).find('.util_list').stop().slideToggle().parent().siblings('.util > li').find('.util_list').stop().slideUp();
    });



    // mgnb
    $('.ham').click(function () {
        $('.mgnb_wrap').animate({
            left: '0',
        });
    });


    // 모바일 호텔/항공/렌터카 메인 변경 메뉴 버튼
    $('.mgnb .home_other').hide();
    $('.mgnb > li:nth-child(1)').click(function () {
        $('.mgnb > li:nth-child(1) img:nth-child(2)').stop().toggleClass('active');
        $('.mgnb .home_other').stop().slideToggle();
    });



    // m_util
    $('.m_util_list').hide();
    $('.m_util > li').click(function () {
        $(this).find('.m_util_list').stop().slideToggle().parent().siblings('.m_util > li').find('.m_util_list').stop().slideUp();
    });



    // mdepth2
    $('.mdepth2').hide();
    $('.mgnb > li:not(:last-child)').click(function () {
        $(this).find('.mdepth2').stop().slideDown().parent().siblings().find('.mdepth2').stop().slideUp();
    });



    // mgnb_close
    $('.mgnb_close').click(function () {
        $('.mgnb_wrap').animate({
            left: '200%',
        });
    });



    // main_banner
    const mb = new Swiper('.mb', {
        speed: 1500,  // 슬라이드 동작 속도
        loop: true,  // 슬라이드 반복 여부

        autoplay: {
            delay: 3000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },

        pagination: {
            el: '.swiper-pagination',  // 버튼 태그 설정
            type: 'fraction',
        },

        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },

    });



    // main_banner play/pause button
    $('.mb_play').hide();

    $('.mb_pause').click(function () {
        mb.autoplay.stop();
        $('.mb_pause').hide();
        $('.mb_play').show();
    });

    $('.mb_play').click(function () {
        mb.autoplay.start();
        $('.mb_pause').show();
        $('.mb_play').hide();
    });



    // near heart
    $('.heart_fill').hide();
    $('.near_list li .heart').click(function () {
        $(this).fadeOut();
        $(this).siblings('.heart_fill').fadeIn();
    });
    $('.near_list li .heart_fill').click(function () {
        $(this).fadeOut();
        $(this).siblings('.heart').fadeIn();
    });


    // near_list banner
    var near_list = new Swiper(".near_list", {
        loop: true,
        speed: 1500,
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },

        scrollbar: {
            el: ".swiper-scrollbar",
        },

        breakpoints: {
            769: {  // 가로해상도가 768px 이상일 경우
                slidesPerView: 3,
                spaceBetween: 0,
                centeredSlides: true,
            },
            1024: {  // 가로해상도가 768px 이상일 경우
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: true,
            },
            1400: {  // 가로해상도가 1024px 이상일 경우
                slidesPerView: 4,
                spaceBetween: 20,
                centeredSlides: false,
            },
        },

    });



    // trip 아코디언 메뉴
    $("#trip ul li:nth-child(1)").addClass("active");
    $("#trip ul li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });



    // hot heart
    $('.hot_list .heart').click(function () {
        $(this).fadeOut();
        $(this).siblings('.heart_fill').fadeIn();
    });
    $('.hot_list .heart_fill').click(function () {
        $(this).fadeOut();
        $(this).siblings('.heart').fadeIn();
    });


});