"use strict";

$(window).scroll(function () {
    var elems = $(".about__text-container");
    var elemPos = elems.offset().top;
    var winHeight = $(this).height();
    var scrollToElem = elemPos - winHeight;
    var winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToElem) {
        elems.addClass("animated");
        elems.addClass("fadeIn");
    }
});

$(window).scroll(function () {
    var elems = $(".about__skills-item");
    var elemPos = elems.offset().top;
    var winHeight = $(this).height();
    var scrollToElem = elemPos - winHeight;
    var winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToElem) {
        elems.addClass("animated");
        elems.addClass("fadeInLeft");
    }
});

$(window).scroll(function () {
    var elems = $(".portfolio__work");
    var elemPos = elems.offset().top;
    var winHeight = $(this).height();
    var scrollToElem = elemPos - winHeight;
    var winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToElem) {
        elems.addClass("animated");
        elems.addClass("zoomIn");
    }
});

$(window).scroll(function () {
    var elems = $(".portfolio__btn");
    var elemPos = elems.offset().top;
    var winHeight = $(this).height();
    var scrollToElem = elemPos - winHeight;
    var winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToElem) {
        elems.addClass("animated");
        elems.addClass("bounceIn");
    }
});

$(window).scroll(function () {
    var elems = $(".contact");
    var elemPos = elems.offset().top;
    var winHeight = $(this).height();
    var scrollToElem = elemPos - winHeight;
    var winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToElem) {
        elems.addClass("animated");
        elems.addClass("bounceIn");
    }
});
$("#header").waypoint(function () {
    $(".header__menu-link")[1].style.color = "#fff";
    var link = $(".header__menu-link")[0];
    link.style.color = "red";
});

$("#about").waypoint(function () {
    $(".header__menu-link")[0].style.color = "#fff";
    $(".header__menu-link")[2].style.color = "#fff";
    var link = $(".header__menu-link")[1];
    link.style.color = "red";
});

$("#portfolio").waypoint(function () {
    $(".header__menu-link")[1].style.color = "#fff";
    $(".header__menu-link")[3].style.color = "#fff";
    var link = $(".header__menu-link")[2];
    link.style.color = "red";
});

$("#contact").waypoint(function () {
    $(".header__menu-link")[2].style.color = "#fff";
    var link = $(".header__menu-link")[3];
    link.style.color = "red";
});
$('.header__burger-icon').click(function () {
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

$(".header__menu-link").click(function () {
    var id = $(this).attr("href");
    var top = $(id).offset().top;
    $("body, html").animate({ scrollTop: top }, 1500);
});