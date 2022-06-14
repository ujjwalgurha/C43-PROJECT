var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(30);
  fill("RED");
  text("Score: " + score, 450, 30);

     textSize(27)
    text("TO UNLOCK THE TREASURE CHEST ANSWER THE FOLLOWING QUETIONS",12,450)
    fill("BLACK")
     
  if(score === 4) {
    clear()
    background(bg2)
    fill("BLACK")
    textSize(40);
    text("TREASURE UNLOCKED",400, 500);
  }

  drawSprites()
}