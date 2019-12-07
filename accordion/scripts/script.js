$(".js-btn").click(function () {
    $(this.nextElementSibling).toggleClass("open");
    $(this.children[1]).toggleClass('turn');
    $(".accordion__content").not(this.nextElementSibling).removeClass("open");
    $(".accordion__btn-icon").not(this.children[1]).removeClass('turn');
});

