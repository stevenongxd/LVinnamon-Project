const burgerMenu = document.querySelector('.burger-menu input')
const nav= document.querySelector('#list-container');


burgerMenu.addEventListener('click',function(){
    nav.classList.toggle('slide');
    });