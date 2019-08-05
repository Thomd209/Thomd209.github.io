let arrow_left_mobile = document.querySelector('.specialists-slider__arrow-left-mobile');
arrow_left_mobile.addEventListener('click', moveLeft_mobile(this));

function moveLeft_mobile(){
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
    arrow_right_mobile.addEventListener('click', moveRight_mobile(this));

    function moveRight_mobile(){
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
    dote_1_mobile.addEventListener('click',switchSlide1_mobile);

    function switchSlide1_mobile(){
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
    dote_2_mobile.addEventListener('click',switchSlide2_mobile);


    function switchSlide2_mobile(){
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
    dote_3_mobile.addEventListener('click',switchSlide3_mobile);


    function switchSlide3_mobile(){
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
    dote_4_mobile.addEventListener('click',switchSlide4_mobile);


    function switchSlide4_mobile(){
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
    dote_5_mobile.addEventListener('click',switchSlide5_mobile);


    function switchSlide5_mobile(){
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

    let arrow_left_desktop = document.querySelector('.specialists-slider__arrow-left-desktop');
    arrow_left_desktop.addEventListener('click', moveLeft_desktop(this));

    function moveLeft_desktop(){
        let motion = 0;
        return function(){
            let slider_list =  document.querySelector('.specialists-slider__list-desktop');
            if(motion == 0){
                motion -= 400;
            }
            else {
                motion += 100;
            }
            slider_list.style.left = motion + '%';
        }
    }

    let arrow_right_desktop = document.querySelector('.specialists-slider__arrow-right-desktop');
    arrow_right_desktop.addEventListener('click', moveRight_desktop(this));

    function moveRight_desktop(){
        let motion = 0;
        return function(){
        let slider_list =  document.querySelector('.specialists-slider__list-desktop');
        if(motion == -400){
           motion = 0;
        }
        else {
           motion -= 100;
        }
        slider_list.style.left = motion + '%';
    }
    
    }

    let dote_1_desktop = document.querySelector('.dote-1-desktop');
    dote_1_desktop.addEventListener('click',switchSlide1_desktop);

    function switchSlide1_desktop(){
        let slider_list =  document.querySelector('.specialists-slider__list-desktop');
        slider_list.style.left = 0 + '%';
        let dotes = document.querySelectorAll('.dote-desktop');
        for(let i = 0; i < dotes.length; i++){
            if(i != 0){
                dotes[i].style.backgroundColor = '#e4e4e4';
            }
            else {
                dotes[i].style.backgroundColor = '#a3a3a3';
            }
        }
    }

    let dote_2_desktop = document.querySelector('.dote-2-desktop');
    dote_2_desktop.addEventListener('click',switchSlide2_desktop);


    function switchSlide2_desktop(){
        let slider_list =  document.querySelector('.specialists-slider__list-desktop');
        slider_list.style.left = -100 + '%';
        let dotes = document.querySelectorAll('.dote-desktop');
        for(let i = 0; i < dotes.length; i++){
            if(i != 1){
                dotes[i].style.backgroundColor = '#e4e4e4';
            }
            else {
                dotes[i].style.backgroundColor = '#a3a3a3';
            }
        }
    }

    let dote_3_desktop = document.querySelector('.dote-3-desktop');
    dote_3_desktop.addEventListener('click',switchSlide3_desktop);


    function switchSlide3_desktop(){
        let slider_list =  document.querySelector('.specialists-slider__list-desktop');
        slider_list.style.left = -200 + '%';
        let dotes = document.querySelectorAll('.dote-desktop');
        for(let i = 0; i < dotes.length; i++){
            if(i != 2){
                dotes[i].style.backgroundColor = '#e4e4e4';
            }
            else {
                dotes[i].style.backgroundColor = '#a3a3a3';
            }
        }
    }

    let dote_4_desktop = document.querySelector('.dote-4-desktop');
    dote_4_desktop.addEventListener('click',switchSlide4_desktop);


    function switchSlide4_desktop(){
        let slider_list =  document.querySelector('.specialists-slider__list-desktop');
        slider_list.style.left = -300 + '%';
        let dotes = document.querySelectorAll('.dote-desktop');
        for(let i = 0; i < dotes.length; i++){
            if(i != 3){
                dotes[i].style.backgroundColor = '#e4e4e4';
            }
            else {
                dotes[i].style.backgroundColor = '#a3a3a3';
            }
        }
    }

    let dote_5_desktop = document.querySelector('.dote-5-desktop');
    dote_5_desktop.addEventListener('click',switchSlide5_desktop);


    function switchSlide5_desktop(){
        let slider_list =  document.querySelector('.specialists-slider__list-desktop');
        slider_list.style.left = -400 + '%';
        let dotes = document.querySelectorAll('.dote-desktop');
        for(let i = 0; i < dotes.length; i++){
            if(i != 4){
                dotes[i].style.backgroundColor = '#e4e4e4';
            }
            else {
                dotes[i].style.backgroundColor = '#a3a3a3';
            }
        }
    }

