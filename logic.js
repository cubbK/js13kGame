var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function drawPlayer(pos) {
  //main square
  ctx.beginPath();
  ctx.rect(pos[0], pos[1], 50,75);
  ctx.fillStyle = " #efeff2 ";
  ctx.fill();
  ctx.closePath();

  //left eye
  ctx.beginPath();
  ctx.arc(pos[0] +12, pos[1] +15, 10, 0, Math.PI*2, false);
  ctx.fillStyle = "#000d11";
  ctx.fill();
  ctx.closePath();

  //right eye
  ctx.beginPath();
  ctx.arc(pos[0] +37, pos[1] +15, 10, 0, Math.PI*2, false);
  ctx.fillStyle = "#000d11";
  ctx.fill();
  ctx.closePath();

  // mouth
  ctx.beginPath();
  ctx.arc(pos[0] +23, pos[1] +53, 20, 3, Math.PI*2, false);
  ctx.fillStyle = "#000d11";
  ctx.fill();
  ctx.closePath();


}

pos = [canvas.width/2 -50,canvas.height-75]


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var rightPressed = false;
var leftPressed = false;
function keyDownHandler(e) {
    if(e.keyCode == 39 || e.keyCode == 68) {
        rightPressed = true;
    }
    else if(e.keyCode == 37 || e.keyCode == 65) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39 || e.keyCode == 68) {
        rightPressed = false;
    }
    else if(e.keyCode == 37 || e.keyCode == 65) {
        leftPressed = false;
    }
}

function draw() {
  ctx.clearRect(pos[0],pos[1],50,75)


  if (rightPressed && pos[0]< canvas.width - 50 ){
    pos[0] +=3;
  }else if(leftPressed && pos[0] > 0){
    pos[0] -=3;
  }
  drawPlayer(pos);
}
setInterval(draw,5);
