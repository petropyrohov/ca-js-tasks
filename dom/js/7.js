( () => {
const square = document.querySelector('.js-square-7');
const btn = document.querySelector('.js-btn-7');

const cchangeVisibility = () => {
    square.classList.toggle('d-none');
    if (square.classList.contains ('d-none')){
        btn.textContent ='rodyti';
    }else{
        btn.textContent ='slepti';
    }
}
btn.addEventListener('click',cchangeVisibility);
})()