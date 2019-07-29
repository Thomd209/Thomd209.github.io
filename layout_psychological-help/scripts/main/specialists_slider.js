let arrow_left_mobile = document.querySelector('.specialists-slider__arrow-left-mobile');
arrow_left_mobile.addEventListener('click', moveLeft(this));

function moveLeft(){
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

    let arrow_right_mobile = document.querySelector('.specialists-slider__arrow-right-mobile');
    arrow_right_mobile.addEventListener('click', moveRight(this));

    function moveRight(){
        let motion = 0;
        return function(){
        let slider_list =  document.querySelector('.specialists-slider__list-mobile');
        if(motion == -400){
           motion = 0;
        }
        else {
           motion -= 100;
        }
        slider_list.style.left = motion + '%';
    }
    
}

    let dote_1_mobile = document.querySelector('.dote-1-mobile');
    dote_1_mobile.addEventListener('click',switchSlide1);

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

    let dote_2_mobile = document.querySelector('.dote-2-mobile');
    dote_2_mobile.addEventListener('click',switchSlide2);


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

    let dote_3_mobile = document.querySelector('.dote-3-mobile');
    dote_3_mobile.addEventListener('click',switchSlide3);


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

    let dote_4_mobile = document.querySelector('.dote-4-mobile');
    dote_4_mobile.addEventListener('click',switchSlide4);


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

    let dote_5_mobile = document.querySelector('.dote-5-mobile');
    dote_5_mobile.addEventListener('click',switchSlide5);


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