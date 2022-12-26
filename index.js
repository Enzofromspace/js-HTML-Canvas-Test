// Write Javascript code!
const canvas = document.querySelector('#draw');

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = 'yellow';
// full list of options for line join and line cap available on MDN Docs
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
  if(!isDrawing) return; // stop func if no mouse down
  ctx.strokeStyle = `hsl(${hue}, 100%. 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX,lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  //update position of x,y
  [lastX,lastY] = [e.offsetX, e.offsetY];
  //update color HSL
  hue++;
  //set range to match max/min hue
  if(hue >= 360){
    hue = 0;
  }
  //increment line width
  if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if(direction){
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
  console.log(hue);
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX,lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

