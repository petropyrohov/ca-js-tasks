console.group('3')
(() => {
    const square = document.querySelector('.js-square-3');
    let i=0;
    const changeSquareColor = () => {

    if  (i ===0){square.style.background = 'red'; i=1;}
    else if(i ===1){square.style.background = 'red'; i=0;}
  }

  square.addEventListener('click', changeSquareColor);
})()
console.groupEnd();