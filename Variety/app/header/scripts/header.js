window.addEventListener('scroll', function(){
    if (window.pageYOffset >= 10) {
        let menu = document.querySelector('.top-header__top-block-mobile');
        menu.style.background = '#222';
    }
    else {
        let menu = document.querySelector('.top-header__top-block-mobile');
        menu.style.background = 'transparent';
    }
});


$('.header__mobile-icon').click(function(){
    $('.header__menu').slideToggle(1000);
});


    
