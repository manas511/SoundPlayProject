var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music1;

function preload(){
    // load sound here
    soundFormats('mp3', 'ogg');
  music1 = loadSound('music');

}


function setup(){
    canvas = createCanvas(800,600);

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = 255;

    block1 = createSprite(400,590,800,30);
    block1.shapeColor = "blue";

    block2 = createSprite(785,300,30,800);
    block2.shapeColor = "orange";


    block3 =createSprite(400,10,800,30)
    block3.shapeColor = "red";
    
    block4 =createSprite(10,300,30,800)
    block4.shapeColor = "green";


}

function draw() {
    background(rgb(169,169,169));
    edges=  createEdgeSprites();
   
    ball.bounceOff(edges);
  
   


  if (keyDown("w")){
    ball.velocityY =13;
    ball.velocityX = 13;
  }
 

    if (ball.isTouching(block1)){
        ball.shapeColor = "blue";
        ball.bounceOff(block1);
        music1.play() ;
        
    }


    if (ball.isTouching(block2)){
        ball.shapeColor = "orange";
        ball.bounceOff(block2);
        music1.pause();
        //music2.play();
     
    }

    if (ball.isTouching(block3)){
        ball.shapeColor = "red";
        ball.bounceOff(block3);
        music1.pause();
        
    }

    if (ball.isTouching(block4)){
        ball.shapeColor = "green";
        ball.bounceOff(block4);
        music1.pause();
       
    }

   text("Press W to make the ball move ", 400,300);
    drawSprites();
}

  
