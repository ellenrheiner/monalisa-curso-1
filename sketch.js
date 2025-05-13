function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#C0ABE7");
  fill("#795548DB");
circle(200,200,300);
  fill("250")
circle(150,150,60);
circle(250,150,60);
line(130,260,270,260);
  fill("#795548E0")
triangle(200,178,180,220,207,220);
  line(153,343,129,372);
  line(131,373,130,400);
  fill("white")
  line(246,344,264,375);
  line(336,265,365,300);
  line(263,376,264,400);
  line(117,114,170,100);
  line(62,260,38,300);
  line(230,114,280,110);
  line(270,260,277,250);
  line(130,260,120,250);
  quad(180,260,198,260,200,275,183,275);
  fill("black")
 // circle(150,150,15);
  fill("black")
 // circle(250,150,15);
  
  if(mouseIsPressed);{
    
    olhoX = map (mouseX,0,400,125,150);
    olhoY = map (mouseY,0,400,125,150);
    fill("black")
    circle(olhoX,olhoY,25);
    circle(olhoX+100,olhoY,25);
  console.log(mouseX,mouseY);
    
}
}
