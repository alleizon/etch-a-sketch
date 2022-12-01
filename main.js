// Populate pad-container

document.addEventListener("DOMContentLoaded", resetGrid);

const padContainer = document.querySelector('.pad-container');

function resetGrid(event) {

    const rows = document.querySelectorAll('.row')

    if (event.type == 'input') {
        const userInput = event.target.valueAsNumber;
        if (userInput < 1 || userInput > 64) return;
    }

    if (rows.length) {
        for (i = rows.length-1; i>=0; i--) {
            padContainer.removeChild(rows[i]);
        }
    }

    const grid = event.type == 'input' ? event.target.valueAsNumber : gridInput.valueAsNumber;

    for (let row = 1; row <= grid; row++) {

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row');

        for (let column = 1; column <= grid; column++) {

            const gridBox = document.createElement('div')
            // corners
            row == 1 && column == 1 
            ? gridBox.style.borderTopLeftRadius = '0.9em' : 
            row == 1 && column == grid 
            ? gridBox.style.borderTopRightRadius = '0.9em' : 
            row == grid && column == 1 
            ? gridBox.style.borderBottomLeftRadius = '0.9em' :
            row == grid && column == grid
            ? gridBox.style.borderBottomRightRadius = '0.9em' :
            null;
            
            if (row==1) gridBox.style.borderTop = '0';
            if (row==16) gridBox.style.borderBottom = '0';
            if (column==1) gridBox.style.borderLeft = '0';
            if (column==16) gridBox.style.borderRight = '0';

            gridBox.classList.add('grid-box');
            rowDiv.appendChild(gridBox);
            gridBox.addEventListener('mouseover', changeGridBoxColor);
            gridBox.addEventListener('mousedown', changeGridBoxColor);
        }
        padContainer.appendChild(rowDiv);
    }
}

// Initialize color on page load

const colorPicker = document.querySelector('#color-picker');
let userColor = '#40e0d0';
colorPicker.addEventListener('input', (e) => {
    userColor = e.target.value;
});

// change grid box color based on mouseup/down
let mouseDown = false;
padContainer.addEventListener('mousedown', () => mouseDown = !mouseDown);
padContainer.addEventListener('mouseup', () => mouseDown = !mouseDown);

function changeGridBoxColor(e) {
    if ((e.type == 'mouseover' && !mouseDown)) return;
    if (selectedBtn) {
        const R = Math.floor(Math.random()*256);
        const G = Math.floor(Math.random()*256);
        const B = Math.floor(Math.random()*256);
        const A = Math.floor(Math.random()*1000)/1000;
        e.target.style.backgroundColor = `rgba(${R}, ${G}, ${B}, ${A})`;
    } else e.target.style.backgroundColor = userColor ? `${userColor}` : '#40e0d0';
}

// Reset button 

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener('click', resetGrid);

// Grid size user selection 

const gridInput = document.querySelector('#grid-size');
gridInput.addEventListener('input', resetGrid);

// RGB button 

const rgbBtn = document.querySelector("#rgb");
let selectedBtn = false;
rgbBtn.addEventListener('click', () => {
    rgbBtn.classList.toggle('selected');
    selectedBtn = selectedBtn ? false : true;
});