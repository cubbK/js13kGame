var colorHouse ='#667788';

function drawHouse(pos) {
  ctx.beginPath();
  ctx.rect(pos[0], pos[1], pos[2],pos[3]);
  ctx.lineWidth="20";
  ctx.strokeStyle = color1;
  ctx.stroke();
  ctx.closePath();
}

function drawAllHouses(){
  ctx.clearRect(-10 , -10 , borderLeft-10,755);
  ctx.clearRect(borderRight+10 , -10 , canvas.width+10,755);

  //left part
  for(var i = borderLeft -50; i >-100; i-=40){
    for (var j = 0; j < canvas.height -50; j+=40){
      var rand = Math.random();
      if (rand>0.4){
          drawPlayer([i,j])
      }

    }
  }
  //right part
  for(var i = borderRight ; i< canvas.width ; i+=40){
    for (var j = 0 ; j < canvas.height -50; j+=40){
      var rand = Math.random();
      if (rand>0.4){
          drawPlayer([i,j])
      }

    }
  }
}
function startLogicDecor() {
    setInterval(drawAllHouses,150);
}
