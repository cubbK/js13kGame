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
  drawHouse([-10 , -10 , borderLeft-10,755]);
  drawHouse([borderRight+10 , -10 , canvas.width+10,755]);
  //left part
  for(var i = borderLeft -100; i >-100; i-=125){
    for (var j = 25; j < canvas.height -50; j+=125){
      var rand = Math.random();
      if (rand>0.3){
          drawPlayer([i,j])
      }

    }
  }
  //right part
  for(var i = borderRight +50; i< canvas.width ; i+=125){
    for (var j = 25 ; j < canvas.height -50; j+=125){
      var rand = Math.random();
      if (rand>0.3){
          drawPlayer([i,j])
      }

    }
  }
}
setInterval(drawAllHouses,300);
