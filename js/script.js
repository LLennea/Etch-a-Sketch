let grid = document.getElementById('grid');
const gridSize = 600;
let color = 'black';
grid.style.width = `${gridSize}px`;
grid.style.height = `${gridSize}px`;

for (let i=0; i<16; i++) {
    for (let i=0; i<16; i++) {
        createSquare(16);
    }
}
let squares = document.querySelectorAll('.square');
squares.forEach((square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = color;
    })
}))

function changeVal(newSize) {
    document.getElementById('value').innerText = `Size of grid: ${newSize}x${newSize}`;
}

function updateGrid(newSize) {
    grid.innerHTML = ''
    for (let i=0; i<newSize; i++) {
        for (let i=0; i<newSize; i++) {
            createSquare(newSize);
        }
    }
    squares = document.querySelectorAll('.square');
    squares.forEach((square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = color;
        })
    }))
}

function createSquare(size) {
    let square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.style.width = `${gridSize / size}px`;
    square.style.height = `${gridSize / size}px`;
    grid.appendChild(square)
}

function changeColor(newColor) {
    color = newColor;
}