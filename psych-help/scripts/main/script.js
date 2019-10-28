

let arrow_left = document.querySelector('.work-features-slider__arrow-left');
    arrow_left.addEventListener('click', moveLeft(this));
    
function moveLeft(){
    let motion = 0;
    return function(){
        let slider_list =  document.querySelector('.work-features-slider__list');
        if(motion == 0){
            motion -= 300;
        }
        else {
            motion += 100;
        }
        slider_list.style.left = motion + '%';
    }
}



    let arrow_right_1 = document.querySelector('.work-features-slider__arrow-right');
    arrow_right_1.addEventListener('click', moveRight(this));

    function moveRight(){
    let motion = 0;
        return function(){
        let slider_list =  document.querySelector('.work-features-slider__list');
        if(motion == -300){
           motion = 0;
        }
        else {
           motion -= 100;
        }
        slider_list.style.left = motion + '%';
    }
    
}

    let dote_1 = document.querySelector('.dote-1');
    dote_1.addEventListener('click',switchSlide1);

    function switchSlide1(){
        let slider_list =  document.querySelector('.work-features-slider__list');
        slider_list.style.left = 0 + '%';
        let dotes = document.querySelectorAll('.dote');
        for(let i = 0; i < dotes.length; i++){
            if(i != 0){
                dotes[i].style.backgroundColor = '#e4e4e4';
            }
            else {
                dotes[i].style.backgroundColor = '#a3a3a3';
            }
        }
    }

    let dote_2 = document.querySelector('.dote-2');
    dote_2.addEventListener('click',switchSlide2);


    function switchSlide2(){
        let slider_list =  document.querySelector('.work-features-slider__list');
        slider_list.style.left = -100 + '%';
        let dotes = document.querySelectorAll('.dote');
        for(let i = 0; i < dotes.length; i++){
            if(i != 1){
                dotes[i].style.backgroundColor = '#e4e4e4';
            }
            else {
                dotes[i].style.backgroundColor = '#a3a3a3';
            }
        }
    }

    let dote_3 = document.querySelector('.dote-3');
    dote_3.addEventListener('click',switchSlide3);


    function switchSlide3(){
        let slider_list =  document.querySelector('.work-features-slider__list');
        slider_list.style.left = -200 + '%';
        let dotes = document.querySelectorAll('.dote');
        for(let i = 0; i < dotes.length; i++){
            if(i != 2){
                dotes[i].style.backgroundColor = '#e4e4e4';
            }
            else {
                dotes[i].style.backgroundColor = '#a3a3a3';
            }
        }
    }

    let dote_4 = document.querySelector('.dote-4');
    dote_4.addEventListener('click',switchSlide4);


    function switchSlide4(){
        let slider_list =  document.querySelector('.work-features-slider__list');
        slider_list.style.left = -300 + '%';
        let dotes = document.querySelectorAll('.dote');
        for(let i = 0; i < dotes.length; i++){
            if(i != 3){
                dotes[i].style.backgroundColor = '#e4e4e4';
            }
            else {
                dotes[i].style.backgroundColor = '#a3a3a3';
            }
        }
    }

let arrow_left_1 = document.querySelector('.specialists-slider__arrow-left-mobile');
arrow_left_1.addEventListener('click', moveLeftSpecialist(this));

function moveLeftSpecialist(){
    let motion = 0;
    return function(){
        let slider_list =  document.querySelector('.specialists-slider__list-mobile');
        if(motion == 0){
            motion -= 400;
        }
        else {
            motion += 100;
        }
        slider_list.style.left = motion + '%';
    }
}
    let motion = 0;
    let motion_right = document.querySelector('.specialists-slider__arrow-right-mobile');
    motion_right.addEventListener('click', moveRightSpecialist());

    function moveRightSpecialists(){
        //return function(){
        let slider_list =  document.querySelector('.specialists-slider__list-mobile');
        if(motion == -400){
           motion = 0;
        }
        else {
           motion -= 100;
        }
        slider_list.style.left = motion + '%';
    //}
    
}

    let dote_1_work = document.querySelector('.dote-1-mobile');
    dote_1_work.addEventListener('click',switchSlide1);

    function switchSlide1(){
        let slider_list =  document.querySelector('.specialists-slider__list-mobile');
        slider_list.style.left = 0 + '%';
        let dotes = document.querySelectorAll('.dote-mobile');
        for(let i = 0; i < dotes.length; i++){
            if(i != 0){
                dotes[i].style.backgroundColor = '#e4e4e4';
            }
            else {
                dotes[i].style.backgroundColor = '#a3a3a3';
            }
        }
    }

    let dote_2 = document.querySelector('.dote-2-mobile');
    dote_2.addEventListener('click',switchSlide2);


    function switchSlide2(){
        let slider_list =  document.querySelector('.specialists-slider__list-mobile');
        slider_list.style.left = -100 + '%';
        let dotes = document.querySelectorAll('.dote-mobile');
        for(let i = 0; i < dotes.length; i++){
            if(i != 1){
                dotes[i].style.backgroundColor = '#e4e4e4';
            }
            else {
                dotes[i].style.backgroundColor = '#a3a3a3';
            }
        }
    }

    let dote_3 = document.querySelector('.dote-3-mobile');
    dote_3.addEventListener('click',switchSlide3);


    function switchSlide3(){
        let slider_list =  document.querySelector('.specialists-slider__list-mobile');
        slider_list.style.left = -200 + '%';
        let dotes = document.querySelectorAll('.dote-mobile');
        for(let i = 0; i < dotes.length; i++){
            if(i != 2){
                dotes[i].style.backgroundColor = '#e4e4e4';
            }
            else {
                dotes[i].style.backgroundColor = '#a3a3a3';
            }
        }
    }

    let dote_4 = document.querySelector('.dote-4-mobile');
    dote_4.addEventListener('click',switchSlide4);


    function switchSlide4(){
        let slider_list =  document.querySelector('.specialists-slider__list-mobile');
        slider_list.style.left = -300 + '%';
        let dotes = document.querySelectorAll('.dote-mobile');
        for(let i = 0; i < dotes.length; i++){
            if(i != 3){
                dotes[i].style.backgroundColor = '#e4e4e4';
            }
            else {
                dotes[i].style.backgroundColor = '#a3a3a3';
            }
        }
    }

    let dote_5 = document.querySelector('.dote-5-mobile');
    dote_5.addEventListener('click',switchSlide5);


    function switchSlide5(){
        let slider_list =  document.querySelector('.specialists-slider__list-mobile');
        slider_list.style.left = -400 + '%';
        let dotes = document.querySelectorAll('.dote-mobile');
        for(let i = 0; i < dotes.length; i++){
            if(i != 4){
                dotes[i].style.backgroundColor = '#e4e4e4';
            }
            else {
                dotes[i].style.backgroundColor = '#a3a3a3';
            }
        }
    }