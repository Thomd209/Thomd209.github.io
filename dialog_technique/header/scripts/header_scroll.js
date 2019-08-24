const header = document.querySelector('header');
const contacts = document.querySelector('.header__contacts');
const menu = document.querySelector('.header__menu');
const header_logo = document.querySelector('.header__logo');
const logo = document.querySelector('.header__logo-img');
const min_logo = document.querySelector('.header__min-logo-img');

window.addEventListener('scroll', function(){
    if(window.pageYOffset >= 100){
        contacts.style.display = 'none';
        menu.classList.add('header__menu-change');
        header.classList.add('header-change');
        header_logo.classList.add('header__logo-change');
        /*logo.style.display = "none";
        min_logo.classList.add('header__min-logo-img-change');*/
    }
    else if(window.pageYOffset < 100) {
        contacts.style.display = 'flex';
        menu.classList.remove('header__menu-change');
        header.classList.remove('header-change');
        header_logo.classList.remove('header__logo-change');
        min_logo.classList.remove('header__min-logo-img-change');
        logo.style.display = "block";

    }
});


