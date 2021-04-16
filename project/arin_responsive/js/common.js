// JavaScript Document

$(document).ready(function () {

    // 맨위로가기 버튼
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#gotop").fadeIn();
        } else {
            $("#gotop").fadeOut();
        }
    });

    $("#gotop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });


    // 상단메뉴
    $(".dp2,.dp2_bg").hide();

    $("#gnb>li").mouseover(function () {
        $(".dp2,.dp2_bg").stop().slideDown();
    });
    $("#gnb>li").mouseout(function () {
        $(".dp2,.dp2_bg").stop().slideUp();
    });



    // 전체메뉴(모달)
    $(".all_box").hide();

    $(".all_menu").click(function () {
        $(".all_box").fadeIn();
    });
    $(".all_close").click(function () {
        $(".all_box").fadeOut();
    });


    // 메인슬라이드
    $(".main_visual").bxSlider({
        auto: true
    });

    $(".sns_list").bxSlider({
        auto: true,
        pager: false,
        slideWidth: 240,
        maxSlides: 5,
        moveSlides: 1
    });
    
    
    //스크롤트리거
    $(window).scroll(function () {
        $('.ani_stop').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('ani_stop');
            }
            if (bottom_of_window < bottom_of_object) {
                $(this).addClass('ani_stop');
            }
        });
    });
    
    
    

    // 메인슬라이드
    $(".mv").bxSlider({
        auto: true
    });

    
    // 모바일메뉴
    $(".m_menu").click(function(){
        $(".mgnb_wrap").animate({
            left: '0' 
        });                   
    });

    $(".close").click(function(){
        $(".mgnb_wrap").animate({
            left: '100%' 
        });                   
    });

    
    // 아코디언 배너
    
    var m = matchMedia("screen and (min-width:1024px)");
    if (m.matches) {
        $("#room ul li:nth-child(1)").addClass("over");
        $("#room ul li").mouseenter(function(){
            $(this).addClass("over").siblings().removeClass("over");
        });
    } else {
        $("#room ul li").removeClass("over");
    }
    

});