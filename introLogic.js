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


}
drawDocumentBorders();
