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
    

});
