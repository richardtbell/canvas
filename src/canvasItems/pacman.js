const pacman = ({
  ctx, x = 200, y = 200, radius = 150, openFactor = 0.2,
}) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, openFactor * Math.PI, (2 - openFactor) * Math.PI);
  ctx.lineTo(x, y);
  ctx.fillStyle = 'yellow';
  ctx.fill();
  ctx.closePath();
  ctx.stroke();
};

export const pacmanLoop = (ctx) => {
  for (let index = 0; index < 0.3; index += 0.01) {
    setInterval(() => {
      let x = 50;
      const radius = 50 + (100 * index);
      setTimeout(() => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        x += 400 * index;
        pacman({
          ctx, radius, x, openFactor: index,
        });
      }, 1000 * index);
      setTimeout(() => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        pacman({
          ctx, radius, x: 50 + (400 * 0.3) + (400 * (0.3 - index)), openFactor: index,
        });
      }, 600 - (1000 * index));
    }, 1000);
  }
};

export default pacman;

