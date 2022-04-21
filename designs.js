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
// Your code goes here!