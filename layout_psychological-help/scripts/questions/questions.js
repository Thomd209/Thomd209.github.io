{

let categories_item = document.querySelector('.categories__list-item-1');
categories_item.addEventListener('click',function(){
    let categories_items = document.getElementsByClassName('categories__list-item');
    for(let i = 0; i < categories_items.length; i++){
        if(i == 0){
            categories_items[i].classList.add('add-green-background');
        }
        else {
            categories_items[i].classList.remove('add-green-background');
        }
    }
});

}

{

let categories_item = document.querySelector('.categories__list-item-2');
categories_item.addEventListener('click',function(){
    let categories_items = document.getElementsByClassName('categories__list-item');
    for(let i = 0; i < categories_items.length; i++){
        if(i == 1){
            categories_items[i].classList.add('add-green-background');
            categories_items[0].classList.remove('categories__list-item-active');
        }
        else {
            categories_items[i].classList.remove('add-green-background');
        }
    }
});

}

{

    let categories_item = document.querySelector('.categories__list-item-3');
    categories_item.addEventListener('click',function(){
        let categories_items = document.getElementsByClassName('categories__list-item');
        for(let i = 0; i < categories_items.length; i++){
            if(i == 2){
                categories_items[i].classList.add('add-green-background');
                categories_items[0].classList.remove('categories__list-item-active');
            }
            else {
                categories_items[i].classList.remove('add-green-background');
            }
        }
    });
    
}

{

    let categories_item = document.querySelector('.categories__list-item-4');
    categories_item.addEventListener('click',function(){
        let categories_items = document.getElementsByClassName('categories__list-item');
        for(let i = 0; i < categories_items.length; i++){
            if(i == 3){
                categories_items[i].classList.add('add-green-background');
                categories_items[0].classList.remove('categories__list-item-active');
            }
            else {
                categories_items[i].classList.remove('add-green-background');
            }
        }
    });
    
}

{

    let categories_item = document.querySelector('.categories__list-item-5');
    categories_item.addEventListener('click',function(){
        let categories_items = document.getElementsByClassName('categories__list-item');
        for(let i = 0; i < categories_items.length; i++){
            if(i == 4){
                categories_items[i].classList.add('add-green-background');
                categories_items[0].classList.remove('categories__list-item-active');
            }
            else {
                categories_items[i].classList.remove('add-green-background');
            }
        }
    });
    
    }
    
    {
    
    let categories_item = document.querySelector('.categories__list-item-6');
    categories_item.addEventListener('click',function(){
        let categories_items = document.getElementsByClassName('categories__list-item');
        for(let i = 0; i < categories_items.length; i++){
            if(i == 5){
                categories_items[i].classList.add('add-green-background');
                categories_items[0].classList.remove('categories__list-item-active');
            }
            else {
                categories_items[i].classList.remove('add-green-background');
            }
        }
    });
    
    }
    
    {
    
        let categories_item = document.querySelector('.categories__list-item-7');
        categories_item.addEventListener('click',function(){
            let categories_items = document.getElementsByClassName('categories__list-item');
            for(let i = 0; i < categories_items.length; i++){
                if(i == 6){
                    categories_items[i].classList.add('add-green-background');
                    categories_items[0].classList.remove('categories__list-item-active');
                }
                else {
                    categories_items[i].classList.remove('add-green-background');
                }
            }
        });
        
    }
    
    {
    
        let categories_item = document.querySelector('.categories__list-item-8');
        categories_item.addEventListener('click',function(){
            let categories_items = document.getElementsByClassName('categories__list-item');
            for(let i = 0; i < categories_items.length; i++){
                if(i == 7){
                    categories_items[i].classList.add('add-green-background');
                    categories_items[0].classList.remove('categories__list-item-active');
                }
                else {
                    categories_items[i].classList.remove('add-green-background');
                }
            }
        });
        
    }

let arrow_down = document.getElementsByClassName('questions-answers__arrow-down');
for(i = 0; i < arrow_down.length; i++){
        arrow_down[i].addEventListener('click', function(){
        this.classList.toggle('rotate-angle-down');
        let answer = this.parentElement.nextElementSibling;
        answer.classList.toggle('open-block');
    });
}


  

