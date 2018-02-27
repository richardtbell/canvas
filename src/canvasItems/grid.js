const grid = ({
  ctx, minor = 10, major = minor * 5, lineColor = '#00FF00', textColor = '#009900',
}) => {
  const isMajor = x => x % major === 0;
  ctx.save();
  ctx.strokeStyle = lineColor;
  ctx.fillStyle = textColor;
  const { width, height } = ctx.canvas;
  for (let x = 0; x < width; x += minor) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.lineWidth = isMajor(x) ? 0.5 : 0.25;
    ctx.stroke();
    if (isMajor(x)) { ctx.fillText(x, x, 10); }
  }
  for (let y = 0; y < width; y += 10) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.lineWidth = isMajor(y) ? 0.5 : 0.25;
    ctx.stroke();
    if (isMajor(y)) { ctx.fillText(y, 0, y + 10); }
  }
  ctx.restore();
};

export default grid;
