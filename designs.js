// Select color input
function addClickEventToCells() {
    'use strict';
    var colorPicker = document.getElementById("colorPicker");
    var cells = document.getElementsByClassName('cell');
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (event) {
            var clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
}


// Select size input

function formSubmission() {
    'use strict';
    event.preventDefault();
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}

// When size is submitted by the user, call makeGrid()

function makeGrid(n, m) {
    'use strict';
    // Your code goes here!

    var table = document.getElementById("pixelCanvas");
    var grid = '';
    for (var i = 0; i < n; i++) {
        grid += '<tr class="row-' + i + '">';
        for (var j = 0; j < m; j++) {
            grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
        }
        grid += '</tr>';
    }

    table.innerHTML = grid;
    addClickEventToCells();
}

document.getElementById('sizePicker').onsubmit = function () {
    formSubmission();
};

makeGrid(10, 10);
