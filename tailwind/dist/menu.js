const menubutt =document.querySelector('#menubutt');
const menu = document.querySelector('#menu');

menubutt.addEventListener('click', () =>{
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden')
    }

})