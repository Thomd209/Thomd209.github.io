icon_menu.onclick = function function_menu(){
    var x = document.getElementById('menu_id');
    
    if (x.className === 'menu'){
        x.className = 'responsive';
    }  
    
      else {
          x.className = 'menu';
      }
    
}