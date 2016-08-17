var colorHouse ='#667788';

function drawHouse(pos) {
  ctx.beginPath();
  ctx.rect(pos[0], pos[1], pos[2],pos[3]);
  ctx.fillStyle = color1;
  ctx.fill();
  ctx.closePath();
}

function drawAllHouses(){
  drawHouse([0 , 100 , borderLeft,645]);
  drawHouse([borderRight , 100 , canvas.width,645]);
}
setInterval(drawAllHouses,50);
