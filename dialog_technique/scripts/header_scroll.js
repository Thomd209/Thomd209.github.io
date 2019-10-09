$(window).scroll(function(){
    if(window.pageYOffset >= 50){
        $('.header__logo').css("width", "10%");
        $('.header__logo').css("transition", "width .5s");
        $('.header__menu').css("top", "30px");
        $('.header__menu').css("transition", "top .5s");
        $('.site-path').css("top","4.9em");
        $('.site-path').css("transition","top .5s");
        $('header').css("padding-bottom","6%");
        $('header').css("transition","padding-bottom .5s");
    }
    else {
        $('.header__logo').css("width", "20%");
        $('.header__logo').css("transition", "width .5s");
        $('.header__menu').css("top", "40%");
        $('.header__menu').css("transition", "top 1s");
        $('.site-path').css("top","8.3em");
        $('.site-path').css("transition","top .5s");
        $('header').css("padding-bottom","10%");
        $('header').css("transition","padding-bottom .5s");
    }
});