// Populate pad-container

const padContainer = document.querySelector('.pad-container');

for (let row = 1; row <= 16; row++) {

    const rowDiv = document.createElement('div')
    rowDiv.classList.add('row');

    for (let column = 1; column <= 16; column++) {

        const gridBox = document.createElement('div')
        // corners
        row == 1 && column == 1 
        ? gridBox.style.borderTopLeftRadius = '0.9em' : 
        row == 1 && column == 16 
        ? gridBox.style.borderTopRightRadius = '0.9em' : 
        row == 16 && column == 1 
        ? gridBox.style.borderBottomLeftRadius = '0.9em' :
        row == 16 && column == 16
        ? gridBox.style.borderBottomRightRadius = '0.9em' :
        null;
        
        if (row==1) gridBox.style.borderTop = '0';
        if (row==16) gridBox.style.borderBottom = '0';
        if (column==1) gridBox.style.borderLeft = '0';
        if (column==16) gridBox.style.borderRight = '0';

        gridBox.classList.add('grid-box');
        rowDiv.appendChild(gridBox);
    }
    padContainer.appendChild(rowDiv);
}