const burger_icon = document.querySelector('.header__burger-icon-mobile');
burger_icon.addEventListener('click', function() {
    const header_menu = document.querySelector('.header__menu');
    header_menu.classList.toggle('header__show-menu');
    header_menu.style.transition = 'height 1s';
});