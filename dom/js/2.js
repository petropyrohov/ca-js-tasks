( ()=> {
    const square = document.querySelector( '.js-square-2')
    //const btn = document.querySelector('js-btn-2')

    const changeSquareColor = ()=>{
        square.style.background = 'green';
    }

    square.addEventListener( 'click', changeSquareColor)
})()