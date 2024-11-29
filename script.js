let text = document.getElementById('text');
let deer = document.getElementById('deer');
let tiger = document.getElementById('tiger');
let hornbill = document.getElementById('hornbill');
let snake = document.getElementById('snake');
let eagle = document.getElementById('eagle');

window.addEventListener('scroll',() => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    deer.style.left = value * -4 + 'px';
    tiger.style.left = value * -3 + 'px';
    hornbill.style.left = value * 1.5 + 'px';
    snake.style.left = value * 1.5 + 'px';
    eagle.style.left = value * -2 + 'px';
   
})