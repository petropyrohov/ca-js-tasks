(() => {
    const square = document.querySelector('.js-square-4');
  
    let index = 0;
    const colors = [ 'grey', 'yellow', 'green', 'red'];
    
  
    const changeSquareColor = () => {
      square.style.background = colors[index];
      index = index >= colors.length -1 ? 0 : index +1;
    }
  
    square.addEventListener('click', changeSquareColor);
  })()