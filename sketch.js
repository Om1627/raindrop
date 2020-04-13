const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var world,engine;
 raindrops=[];



function setup() {
  engine=Engine.create();
  world=engine.world;
  createCanvas(1200,800);
 
 
}
  

function sho2 (){
  if (frameCount%15===0){
    raindrops.push(new Raindrop2(random(500,1200),50,100,500))
  }
}
function sho3 (){
  if (frameCount%15===0){
    raindrops.push(new Raindrop3(random(20,800),50,100,500))
  }
}

function draw() {
  Engine.update(engine)
  background(0); 

  sho2();
  sho3();
  for (var i=0;i<raindrops.length;i++){
    raindrops[i].display();
  }
 
}