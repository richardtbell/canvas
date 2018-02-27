import grid from './grid';
import man from './man';

const makeDrawing = (ctx) => {
  grid({ ctx, lineColor: 'white', textColor: 'white' });
  man({ ctx });
  ctx.beginPath();
  ctx.strokeStyle = '#FFFFFF';
  ctx.fillStyle = '#00FF00';
  ctx.lineWidth = 2;
  ctx.moveTo(50, 50);
  ctx.bezierCurveTo(0, 0, 80, 250, 150, 250);
  ctx.bezierCurveTo(250, 250, 250, 250, 250, 170);
  ctx.bezierCurveTo(250, 50, 400, 350, 320, 280);
  ctx.closePath();
  ctx.stroke();
};

export default makeDrawing;
