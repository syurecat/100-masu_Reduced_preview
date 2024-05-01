const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav');

hamburger.addEventListener('click',function(){
    console.log("styles: hamburger");
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
})