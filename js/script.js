let grid = document.getElementById('grid');

for (let i=0; i<16; i++) {
    for (let i=0; i<16; i++) {
        let square = document.createElement('div');
        square.setAttribute('class', 'square');
        grid.appendChild(square);
    }
}

let squares = document.querySelectorAll('.square');
squares.forEach((square => {
    square.addEventListener('mouseover', () => {
        square.setAttribute('style', 'background-color: red');
    })
}))