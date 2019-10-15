$(document).ready(function(){
    $('.header-mobile__menu-icon').click(function(){
        $('.header-mobile__menu-all-links').toggleClass('header-mobile__menu-move-left');
        $('.header-mobile__menu-all-links').css("transition","transform .5s");
        $('html').toggleClass("no-scrolling");
    });
});

$(window).scroll(function(){
    if(window.pageYOffset >= 50){
        $('.header-mobile__logo').css("width","35%");
        $('.header-mobile__logo').css("transition",".5s");
        $('.header-desktop__logo').css("width", "10%");
        $('.header-desktop__logo').css("transition", "width .5s");
        $('.header-desktop__menu').css("top", "30px");
        $('.header-desktop__menu').css("transition", "top .5s");
        $('.site-path').css("top","4.9em");
        $('.site-path').css("transition","top .5s");
        $('.header-desktop').css("padding-bottom","6%");
        $('.header-desktop').css("transition","padding-bottom .5s");
    }
    else {
        $('.header-mobile__logo').css("width","50%");
        $('.header-mobile__logo').css("transition",".5s");
        $('.header-desktop__logo').css("width", "20%");
        $('.header-desktop__logo').css("transition", "width .5s");
        $('.header-desktop__menu').css("top", "40%");
        $('.header-desktop__menu').css("transition", "top 1s");
        $('.site-path').css("top","8.3em");
        $('.site-path').css("transition","top .5s");
        $('.header-desktop').css("padding-bottom","10%");
        $('.header-desktop').css("transition","padding-bottom .5s");
    }
});
