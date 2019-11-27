let buttons = document.querySelectorAll('.accordion__btn');
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('open');
        this.children[1].classList.toggle('turn');
    });
});