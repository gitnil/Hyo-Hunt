var bg; 
var counter1;
var counter2; 
var counter3, counter4; 
function preload(){
  bg = loadImage("images/duckhunt-uncleaned2.jpg");
  coin = loadImage("images/coin.png");

  // hammer = loadImage("images/hammer.png");
  // evil = loadSound("sound/evil.wav");


}
function setup() {
  bg.resize(640,480);
  coin.resize(20,20);
  createCanvas(640, 480);
  counter1 = 0;
  counter2 = 2500;
  counter3 = 1; 
  counter4 = 3; 
  myFont = loadFont('assets/AvenirNextLTPro-Demi.otf');



}

function draw(){
  imageMode(CORNER);
  background(bg);

  push();
    translate(0,0);
    rotate(radians(45));
    image(coin, 290,-280 );
  pop();
  textFont('Monospace');
  fill(255,255,255);
  stroke(1);
  strokeWeight(3);
  textSize(18);
  text('X',416,28);
  textSize(20);
  strokeWeight(4);
  text(counter1,440,28);
  text(counter2,408,50);
  fill(255,0,0);
  text(counter3+"UP",182,32);
  fill(255,255,255);
  text("x"+counter4,222,32);





}
