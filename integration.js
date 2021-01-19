document.addEventListener('DOMContentLoaded', nav)
function nav(){
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.main-nav');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}