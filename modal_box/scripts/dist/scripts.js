'use strict';

var button = document.querySelector('.button');
var cross = document.querySelector('.modal-box__cross');
button.addEventListener('click', function () {
    this.nextElementSibling.classList.toggle('move_down');
    this.nextElementSibling.style.transition = 'transform .5s';
});

cross.addEventListener('click', function () {
    this.parentElement.parentElement.classList.toggle('move_down');
    this.parentElement.parentElement.transition = 'transform .5s';
});