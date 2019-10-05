let burger_icon = document.querySelector('.mobile-menu__burger-icon');
burger_icon.addEventListener('click', func);

function func() {
    let menu_navigation = document.querySelector('.mobile-menu__navigation');
    menu_navigation.classList.toggle('change_mobile-menu__navigation');
    menu_navigation.style.transition = 'transform .8s';
}