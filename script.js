const nav = document.querySelector('nav');
const burger = document.querySelector('.burgerMenu');

burger.addEventListener('click', function(){
    nav.classList.toggle('navMobile');
    burger.classList.toggle('burgerMenuOpen')
})