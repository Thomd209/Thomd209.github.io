$(window).scroll(function () {
    let elems = $(".about__text-container");
    let elemPos = elems.offset().top;
    let winHeight = $(this).height();
    let scrollToElem = elemPos - winHeight;
    let winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToElem) {
        elems.addClass("animated");
        elems.addClass("fadeIn");
    }
});

$(window).scroll(function () {
    let elems = $(".about__skills-item");
    let elemPos = elems.offset().top;
    let winHeight = $(this).height();
    let scrollToElem = elemPos - winHeight;
    let winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToElem) {
        elems.addClass("animated");
        elems.addClass("fadeInLeft");
    }
});

$(window).scroll(function () {
    let elems = $(".portfolio__work");
    let elemPos = elems.offset().top;
    let winHeight = $(this).height();
    let scrollToElem = elemPos - winHeight;
    let winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToElem) {
        elems.addClass("animated");
        elems.addClass("zoomIn");
    }
});

$(window).scroll(function () {
    let elems = $(".portfolio__btn");
    let elemPos = elems.offset().top;
    let winHeight = $(this).height();
    let scrollToElem = elemPos - winHeight;
    let winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToElem) {
        elems.addClass("animated");
        elems.addClass("bounceIn");
    }
});

$(window).scroll(function () {
    let elems = $(".contact");
    let elemPos = elems.offset().top;
    let winHeight = $(this).height();
    let scrollToElem = elemPos - winHeight;
    let winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToElem) {
        elems.addClass("animated");
        elems.addClass("bounceIn");
    }
});