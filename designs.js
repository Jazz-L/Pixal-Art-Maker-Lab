// Select color input
var gridColor = document.getElementById('colorPicker');
// Select size input
var gridHeight = document.getElementsById('inputHeight');
var gridWidth = document.getElementsById('inputWidth');
const grid = document.getElementsById('pixelCanvas');
const submitButton = document.getElementById("submitBtn");



// When size is submitted by the user, call makeGrid()
submitButton.addEventListener('click', function (x) {
    makeGrid();
});

function makeGrid(x) {
	for (var i = 0; i < gridHeight.value; i++) {
		const row = grid.insertRow(0);
		for (var j = 0; j < gridWidth.value; j++) {
			row.insertCell(0);
		}
	}
}
// Your code goes here!