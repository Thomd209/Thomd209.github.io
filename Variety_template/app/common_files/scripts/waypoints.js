$("#header").waypoint(function () {
    $(".header__menu-link")[1].style.color = "#fff";
    let link = $(".header__menu-link")[0];
    link.style.color = "red";

});

$("#about").waypoint(function () {
    $(".header__menu-link")[0].style.color = "#fff";
    $(".header__menu-link")[2].style.color = "#fff";
    let link = $(".header__menu-link")[1];
    link.style.color = "red";

});

$("#portfolio").waypoint(function () {
    $(".header__menu-link")[1].style.color = "#fff";
    $(".header__menu-link")[3].style.color = "#fff";
    let link = $(".header__menu-link")[2];
    link.style.color = "red";

});

$("#contact").waypoint(function () {
    $(".header__menu-link")[2].style.color = "#fff";
    let link = $(".header__menu-link")[3];
    link.style.color = "red";

});