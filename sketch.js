const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground;

var particles=[];
var plinko=[];
var divisions=[];
var divisionHeight=300;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground= new Ground();
  

  for(var k=0;k<=width; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
      }

      for(var j=40;j<=width; j=j+50){
        plinko.push(new Plinko(j,75));
          }

      for(var j=15;j<=width-10; j=j+50){
        plinko.push(new Plinko(j,175));
              }

       for(var j=0;j<=width-15; j=j+50){
          plinko.push(new Plinko(j,275));
                  }

       for(var j=30;j<=width-20; j=j+50){
      plinko.push(new Plinko(j,375));
                      }
     
}

function draw() {
  Engine.update(engine);
  background("black");

  for(var k=0;k<divisions.length; k++){

    divisions [k].display();
  }

  for(var j=0;j<plinko.length; j++){

    plinko [j].display();
  }

  for(var i=0;i<particles.length; i++){

    particles [i].display();
  }


  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10));
  }
  ground.display();  



}

