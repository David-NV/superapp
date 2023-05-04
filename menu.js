let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');
let lien1 = document.querySelector('.lien1');
let lien2 = document.querySelector('.lien2');
let lien3 = document.querySelector('.lien3');
let lien4 = document.querySelector('.lien4');

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})

lien1.addEventListener('click',function(){
    body.classList.toggle('open');
})
lien2.addEventListener('click',function(){
    body.classList.toggle('open');
})
lien3.addEventListener('click',function(){
    body.classList.toggle('open');
})
lien4.addEventListener('click',function(){
    body.classList.toggle('open');
})
