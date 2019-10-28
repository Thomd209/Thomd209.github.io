let work = document.querySelectorAll('.portfolio__work');
for(let i = 0; i < work.length; i++){
    work[i].addEventListener('click', openBlock);
}

function openBlock(){
    this.children[2].classList.toggle('portfolio__work-description-change');
}