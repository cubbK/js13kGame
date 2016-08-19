var canvas = document.getElementById("gameCanvas");
canvas.width = window.innerWidth;

var ctx = canvas.getContext("2d");

var borderLeft = canvas.width /2 - 450;
var borderRight = canvas.width /2 +450;
var color1 = " #efeff2 ";
var color2 = " #000d11";

var score = 0;

pos = [canvas.width/2 -50,canvas.height-75]
var posTvs = [];
var width = 900;
for (var i = 0;i <7;i++){
  posTvs[i] = returnPosArray();
}

function startLogic() {
  drawInerval = setInterval(draw,10);
}

function drawPlayer(pos ) {
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

class GlitchCubb {

  static cubb(posx,posy){
    var colors = ['#5E5E5E' , '#D4D4D4' ,'#F7F7F7' ,'#4A4A4A'];
    ctx.beginPath();
    ctx.rect(posx, posy, 10,10);
    ctx.fillStyle = colors[Math.floor(Math.random()*colors.length)];;
    ctx.fill();
    ctx.closePath();
  }
}
var aMuritOData = false;
function draw() {
  ctx.clearRect(pos[0],pos[1],51,76)


  if (rightPressed && pos[0]< borderRight - 50 ){
    pos[0] +=6;
  }else if(leftPressed && pos[0] > borderLeft){
    pos[0] -=6;
  }



  for (var i = 0 ; i <7 ; i++){
    ctx.clearRect(posTvs[i][0] , posTvs[i][1] , 100 , 100);

    if(posTvs[i][0]< borderLeft  || posTvs[i][0] >borderRight-100){

      posTvs[i][2] = -posTvs[i][2];

    }
    if (posTvs[i][1] > canvas.height){
      score++;
      posTvs[i] = returnPosArray();
    }

    posTvs[i][0] +=posTvs[i][2];
    posTvs[i][1] +=posTvs[i][3];
    drawTv(posTvs[i], i);

    var isDead = checkIfDead(posTvs[i]);

    if(isDead && aMuritOData == false){
      console.log('DEAD');
      aMuritOData = true;
      clearInterval(drawInerval);
      clearInterval(logicInterval);
      setInterval(bigBum, 10);
      restartPanel();
    }
  }
  drawPlayer(pos);


}



function drawTv(posTv , index) {

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

        GlitchCubb.cubb(posTv[0]+i *10, posTv[1] +j *10);
      }

    }
  }
}

function returnPosArray (){
  var posX =  Math.round(Math.random() * (borderRight-100 - borderLeft) + borderLeft);

  var posY  = Math.round(Math.random() *(-2500) -50);
  var dirX;
  var dirY  = Math.round(Math.random() *7+3);
  if (Math.random() >0.5){
    dirX = Math.round(Math.random() *5);
  }else {
    dirX = Math.round(Math.random() * -5);
  }
  return [ posX, posY,dirX,dirY ];
}

function checkIfDead(posTv) {
    if (posTv[0] +80 > pos[0] && posTv[0] +80  < pos[0]+50 && posTv[1]+80 > pos[1] && posTv[1]+80 < pos[1] +75){

      return true;
    }
    return false;
}

function bigBum (){
  ctx.clearRect(0 , 0 ,canvas.width, canvas.height);
  for (var i = 0 ; i < Math.floor(canvas.width/10);i++){
    for (var j = 0 ; j <Math.floor(canvas.height/10); j++){
      GlitchCubb.cubb(+i *10, j *10);
    }
  }
}

function restartPanel (){
  var pointXCenter = canvas.width /2;
  var point = [pointXCenter - canvas.width/4 , 300];


  function drawRestartPanel(){
    ctx.font = '100px Impact, Charcoal, sans-serif';
    ctx.fillStyle = color2;
    ctx.fillText('SCORE: ' + score , 100 ,100);
    ctx.fillText('PRESS R TO RESTART ' , 100 ,200);
  }
  setInterval(drawRestartPanel,5);
  document.addEventListener("keydown", rHandler, false);
  function rHandler(e) {
    if (e.keyCode == 82) {
      location.reload();
    }
  }
}
