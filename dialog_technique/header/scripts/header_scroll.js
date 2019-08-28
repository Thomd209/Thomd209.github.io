$(window).scroll(function(){
    if(window.pageYOffset >= 100){
        $('header').css("padding-bottom","4%");
        $('header').css("transition","padding-bottom .5s");
        $('.header__logo').css("width", "10%");
        $('.header__logo').css("transition", "width .5s");
        $('.header__menu').css("top", "20px");
        $('.header__menu').css("transition", "top .5s");
        $('.header__contacts').css("display", "none");
    }
    else {
        $('header').css("padding-bottom","8%");
        $('header').css("transition","padding-bottom 1s");
        $('.header__logo').css("width", "20%");
        $('.header__logo').css("transition", "width 1s");
        $('.header__menu').css("top", "40%");
        $('.header__menu').css("transition", "top 1s");
        $('.header__contacts').css("display", "flex");
    }
});