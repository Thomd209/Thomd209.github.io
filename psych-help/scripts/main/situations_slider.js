let menu_list = document.querySelector('.situations-scroll-memu__list');
menu_list.addEventListener('mousemove',moveBlock);


function moveBlock(event){
    let slider = document.querySelector('.slider');
    slider.style.left = (event.clientX - (slider.offsetWidth + 130)) + 'px';
}

