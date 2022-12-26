// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const canvas = document.querySelector('#draw');

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADASS';
// full list of options for line join and line cap available on MDN Docs
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e){
  if(!isDrawing) return; // stop func if no mouse down
  console.log(e);
  ctx.beginPath();
  ctx.beginPath(lastX,lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

