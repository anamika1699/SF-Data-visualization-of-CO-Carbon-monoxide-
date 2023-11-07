//Data visualization of CO(Carbon monoxide) in the air in San Francisco, California from 1 Jan 2023 - 30 Oct 2023


let data;
var i = 10;
var l =1;
var v = 0
let bg;    //SF image
var line1 = 250;

function preload() {
  data = loadTable('SF CO.csv', 'csv', 'header');
   bg = loadImage('silverfineart_gerald_berghammer_golden_gate_15_usa_master.jpeg'); //Image of the Bangalore map
}


function setup() {
  createCanvas(800, 600);
  background(250);
  frameRate(1);
  
}

function draw(){
   background(bg,150); //Applying SF bg at the background


  
  stroke(0,0,0,50)
  i = i+25;
  line1 = line1 + 10;
  
  date = data.getColumn('utc')
  
  
  let values = data.getColumn('value');
  if(values[v] <= 1500 && values[v] > 1400 ){
    l = random(550,570);
    fill(231, 76, 60,95);  
  }
  else if(values[v] <= 1400 && values[v] > 1300 ){
    l = random(450,500);
    fill(211, 84, 0,95) 
  }
  else if(values[v] <= 1300 && values[v] > 1200 ){
    l = random(350,400);
    fill(230, 126, 34,95)  
  }
  else if(values[v] <= 1200 && values[v] > 1100 ){
    l = random(250,300);
    fill(243, 156, 18,95) 
  }
  else if(values[v] <= 1100 && values[v] >= 1000 ){
    fill(241, 196, 15,95) 
    l = random(150,200);
  }
  else{
    l = random(100,120);
    fill(46, 204, 113,95)
  }
  
  stroke(7)
  ellipse(width/2,height/2,l)  //Printing the circles on top of each other with changing size and color
  
  //date
  fill(209, 242, 235)
  noStroke();
  rect(8,12,180,30)
  textSize(16);
  fill(0,0,0)
  text(date[v], 15, 32);
  
  //CO amount
  fill(254, 249, 231)
  noStroke();
  rect(390,280,100,30)
  textSize(12);
  fill(0,0,0)
  text(values[v]+" µg/m³", width/2, height/2);
  
  //CO name tag
  fill(234, 236, 238)
  noStroke();
  rect(8,50,155,30)
  textSize(12);
  fill(0,0,0)
  text("Carbon monoxide (µg/m³) micrograms per cubic meter.", 15, 68);
  
  //Basic Information
  textSize(25);
  fill(235, 64, 52);
  stroke(2);
  text("SF, USA EPA pollution Data", width-790,height-500 );
  textSize(14);
  noStroke();
  text("Carbon Monoxide CO (µg/m³)", width-790,height-470 );
  textSize(14);
  fill(76, 140, 20);
  noStroke(6);
  text("Readings of each month- Jan 2023 - Oct 2023 ", width-790,height-450 );
  
  
  v = v+1;
  if(v==29){
    v=0
    line1 = 100;
    noLoop();
  }
}
