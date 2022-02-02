//llamamos desde html
const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');


const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;


ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);
function matrix () {
    
    ctx.fillStyle = '#0001';
    ctx.fillRect(0, 0, w, h);
  
    
    ctx.fillStyle = '#0f0';
    ctx.font = '15pt monospace';
  
    
    ypos.forEach((y, ind) => {
      // generar a random character
      const text = String.fromCharCode(Math.random() * 128);
  
      // x coordinate of the column, y coordinate is already given
      const x = ind * 20;
      // render the character at (x, y)
      ctx.fillText(text, x, y);
  
      // randomly reset the end of the column if it's at least 100px high
      if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
      
      else ypos[ind] = y + 20;
    });
  }
  
  
  setInterval(matrix, 50);