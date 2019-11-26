let slide_list = document.querySelector('.slider__slides');
let slides = document.querySelectorAll('.slider__slide');
let right_arrow = document.querySelector('.slider__right-arrow');
let left_arrow = document.querySelector('.slider__left-arrow');
let dotes = document.getElementsByClassName('slider__dote');
let slide_counter = 0;
right_arrow.addEventListener('click', function() {
    if (slide_counter === slides.length - 1) {
        slide_list.style.transform = 'translate(0%)';
        slide_counter = 0;
    }
    else {
        slide_list.style.transform += 'translate(-25%)';
        slide_counter++;
    }
});

left_arrow.addEventListener('click', function() {
    if (slide_counter === slides.length - 4) {
        slide_list.style.transform = 'translate(-75%)';
        slide_counter = 3;
    }
    else {
        slide_list.style.transform += 'translate(25%)';
        slide_counter--;
    }
});

dotes[0].addEventListener('click', function() {
    slide_list.style.transform = 'translate(0%)';
});

dotes[1].addEventListener('click', function() {
    slide_list.style.transform = 'translate(-25%)';
});

dotes[2].addEventListener('click', function() {
    slide_list.style.transform = 'translate(-50%)';
});

dotes[3].addEventListener('click', function() {
    slide_list.style.transform = 'translate(-75%)';
});

let btn_stop = document.querySelector('.stop-btn');

function Run_slideshow() {
    if (slide_counter === slides.length - 1) {
        slide_list.style.transform = 'translate(0%)';
        slide_counter = 0;
    }
    else {
        slide_list.style.transform += 'translate(-25%)';
        slide_counter++;
    }
}

let timer_id = setInterval(Run_slideshow, 1500);

btn_stop.addEventListener('click', function() {
    clearInterval(timer_id);
});
