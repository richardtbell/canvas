const man = ({ ctx }) => {
  ctx.strokeStyle = '#FFFFFF';
  ctx.fillStyle = '#FF00FF';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(200, 140, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.moveTo(200, 160);
  ctx.lineTo(200, 220);
  ctx.moveTo(180, 300);
  ctx.lineTo(185, 260);
  ctx.lineTo(200, 220);
  ctx.lineTo(215, 260);
  ctx.lineTo(220, 300);
  ctx.moveTo(240, 130);
  ctx.lineTo(225, 170);
  ctx.lineTo(220, 170);
  ctx.lineTo(175, 180);
  ctx.lineTo(170, 220);
  ctx.stroke();
};

export default man;

