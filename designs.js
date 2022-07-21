

// Select color input
const color = document.getElementById('colorPicker');
// Select size input
const table = document.getElementById('pixelCanvas');
const sizePicker = document.getElementById('sizePicker');
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(event) {
    table.innerHTML = '';
    event.preventDefault();
    makeGrid();
})

table.addEventListener('click', function(event) {
    if (event.target.nodeName === 'TD') {
        event.target.style.background = color.value;
    }
})


function makeGrid() {
for (let i = 0; i < height.value; i++) {
    const row = table.insertRow(0);
    for (let j = 0; j < width.value; j++) {
        row.insertCell(0);
    }
}

// Your code goes here!

}
