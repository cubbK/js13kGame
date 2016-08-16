var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var color1 = " #efeff2 ";
var color2 = " #000d11";

var posTvs = [];
var width = 900;
for (var i = 0;i <5;i++){
  posTvs[i] =[ Math.round(Math.random() * width) , Math.round(Math.random() *(-2500) -50)];

}
function drawPlayer(pos) {
  //main square
  ctx.beginPath();
  ctx.rect(pos[0], pos[1], 50,75);
  ctx.fillStyle = color1;
  ctx.fill();
  ctx.closePath();

  //left eye
  ctx.beginPath();
  ctx.arc(pos[0] +12, pos[1] +15, 10, 0, Math.PI*2, false);
  ctx.fillStyle = color2;
  ctx.fill();
  ctx.closePath();

  //right eye
  ctx.beginPath();
  ctx.arc(pos[0] +37, pos[1] +15, 10, 0, Math.PI*2, false);
  ctx.fillStyle = color2;
  ctx.fill();
  ctx.closePath();

  // mouth
  ctx.beginPath();
  ctx.arc(pos[0] +23, pos[1] +53, 20, 3, Math.PI*2, false);
  ctx.fillStyle = color2;
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
    pos[0] +=6;
  }else if(leftPressed && pos[0] > 0){
    pos[0] -=6;
  }



  for (var i = 0 ; i <5 ; i++){
    ctx.clearRect(posTvs[i][0] , posTvs[i][1] , 100 , 100)
    posTvs[i][1] +=3;
    drawTv(posTvs[i], i);
  }
  drawPlayer(pos);

}
setInterval(draw,10);


function drawTv(posTv , index) {
  var colors = ['#ff3939' , '#00ce00' ,'#00deff' ,'#007b4a'];
  ctx.clearRect(posTv[0],posTv[1],90,90)
  for (var i = 0 ; i < 9;i++){
    for (var j = 0 ; j <9; j++){
      var isTrue = false;
      if (i == 0 || i == 1 || j ==0 || j ==1 || i == 7 || i == 8 || j==7 || j==8){
        var rand = Math.random();

        if(rand > 0.9) {
          isTrue = true;

        }
      }else{
        isTrue = true;
      }
      if(isTrue){
        ctx.beginPath();
        ctx.rect(posTv[0]+i *10, posTv[1] +j *10, 10,10);
        ctx.fillStyle = colors[Math.floor(Math.random()*colors.length)];;
        ctx.fill();
        ctx.closePath();
      }

    }
  }



}
