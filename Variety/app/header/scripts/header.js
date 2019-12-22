$('.header__burger-icon').click(function() {
    $('.header__menu').slideToggle(1000);
    this.children[0].classList.toggle("change__burger-icon-item-1");
    this.children[0].style.transition = "transform .5s";
    this.children[1].classList.toggle("change__burger-icon-item-2");
    this.children[2].classList.toggle("change__burger-icon-item-3");
    this.children[2].style.transition = "transform .5s";
    this.classList.toggle("move-up__burger-icon");
});

$(window).scroll(function () {
    if (this.pageYOffset >= 10) {
        $(".header").addClass("header__sticky");
        $(".header").css("transition", "background-color 1s");
        $(".header__container").addClass("change__container");
        $(".header__logo").addClass("change__logo");
        $(".header__burger-icon").addClass("change__burger-icon");
        $(".header__menu").addClass("change__menu");
    } else {
        $(".header").removeClass("header__sticky");
        $(".header__container").removeClass("change__container");
        $(".header__logo").removeClass("change__logo");
        $(".header__burger-icon").removeClass("change__burger-icon");
        $(".header__menu").removeClass("change__menu");
    }
});






    
