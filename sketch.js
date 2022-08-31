//crie as variaveis dos seus personagens aqui
var box;
var bombompng

function preload(){
  //carregue as imagens dos personagens aqui
bombompng=loadAnimation("c1.png","c2.png","c3.png","c4.png","c5.png")
} 



function setup() {
  createCanvas(800,400);
  //crie os sprites aqui
  ch = createSprite(76,399,10999,90);
  ch.shapeColor = "green";
  
  bombom = createSprite(70,310,13,43);
 bombom.addAnimation("coelho",bombompng)
}

function draw() {
  background("blue");
  ch.velocityX=-4 
  if (ch.x < 0){
      ch.x = ch.width/2;
    }
  drawSprites(); 
bombom.collide(ch)


}

