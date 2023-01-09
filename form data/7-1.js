(()=>{
const form = document.querySelector('.form-7-1');
const resultContainer = document.querySelector('.js-result-7-1');

const jokeOutOfWorkers = (event) => {
event.preventDefault();
const formData = new FormData(event.tardet);
const age = formData('age')

let insult = 50;
if( age >= 10){
    insult +=50
} if (age >= 20){
    insult +=100;
} 
 const insultStr = `jusu bonusas : ${ insult}euru`;
 resultContainer.innerText =insultStr;
}
form.addEventListener('submit',jokeOutOfWorkers);
})()
