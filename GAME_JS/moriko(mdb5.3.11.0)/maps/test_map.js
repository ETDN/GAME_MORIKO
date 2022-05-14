const canvas = document.getElementById('test-canvas');
const ctx = canvas.getContext('2d');

// Setting the color of the rectangle
ctx.fillStyle = 'blue';

// First parameter is the staring x postion on the canvas
// value of 0 for x would start the rectangle all the way to the left
// Second parameter is the starting y position on the canvas
// value of 0 for y would start the rectangle all the way to the top
// The third and fourth parameters are the width and height of the rectangle

ctx.fillRect(50, 50, 100, 100);
