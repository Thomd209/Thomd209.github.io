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


$('.top-header__mobile-menu-btn').click(function(){
    $('.top-header__mobile-menu').slideToggle(1000);
});


    
