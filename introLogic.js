function drawDocumentBorders() {
  var pointLeftUp = [canvas.width/2 -250 ,25];
  var pointRightUp = [canvas.width/2 +250 , 25];
  var pointLeftDown = [canvas.width/2 -250 , canvas.height -25];
  var pointRightDown = [canvas.width/2 +250 , canvas.height - 25];
  ctx.beginPath();
  ctx.moveTo(pointLeftUp[0],pointLeftUp[1]);
  ctx.lineWidth = 20;
  ctx.lineTo(pointLeftDown[0] , pointLeftDown[1]);
  ctx.lineTo(pointRightDown[0 ], pointRightDown[1]);
  ctx.lineTo(pointRightUp[0 ], pointRightUp[1]+200);
  ctx.lineTo(pointRightUp[0 ] -200, pointRightUp[1]+200);
  ctx.lineTo(pointRightUp[0 ] -200, pointRightUp[1]);
  ctx.moveTo(pointRightUp[0] -210,pointRightUp[1]-4);
  ctx.lineTo(pointRightUp[0 ] +4 , pointRightUp[1]+200);
  ctx.moveTo(pointLeftUp[0] -10,pointLeftUp[1]);
  ctx.lineTo(pointRightUp[0] -200 , pointRightUp[1]);

  ctx.strokeStyle = color1;
  ctx.stroke();
  ctx.closePath();

}
function drawPhotoFrame() {
  var pointFrame = [  canvas.width/2 -195 ,75];
  ctx.beginPath();
  ctx.rect(pointFrame[0] , pointFrame[1], 125,140);
  ctx.lineWidth = 10;
  ctx.strokeStyle = 'color1';
  ctx.stroke();
  ctx.closePath();
}
function drawPlayerPortrer(pos) {
  //corp
  ctx.beginPath();
  ctx.rect(pos[0] , pos[1] , 85 , 110);
  ctx.fillStyle = color1;
  ctx.fill();
  ctx.closePath();

  //left eye
  ctx.beginPath();
  ctx.arc(pos[0] +25, pos[1] +25, 15, 0, Math.PI*2, false);
  ctx.fillStyle = color2;
  ctx.fill();
  ctx.closePath();

  //right eye
  ctx.beginPath();
  ctx.arc(pos[0] +60, pos[1] +25, 15, 0, Math.PI*2, false);
  ctx.fillStyle = color2;
  ctx.fill();
  ctx.closePath();

  // mouth
  ctx.beginPath();
  ctx.arc(pos[0] +40, pos[1] +80, 25, 3, Math.PI*2, false);
  ctx.fillStyle = color2;
  ctx.fill();
  ctx.closePath();
}


drawDocumentBorders();
drawPhotoFrame();
drawPlayerPortrer([canvas.width/2 -175 , 100]);
