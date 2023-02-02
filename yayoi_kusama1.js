var cGreen;
var cBlue;
var cPink;

var colorScheme;

var smallCrB;
var smallCrT;
var mediumCrB;
var mediumCrT;
var largeCrB;
var largeCrT;

function setup() {
  createCanvas(810, 540);
  
  cGreen = color("#97BE50");
  oGreen = color("green");
  cBlue = color("#3266EA");
  oBlue = color("blue");
  cPink = color("#EC4974");
  oPink = color("pink");
  
  colorScheme = [color("#F2CD5C"),color("#F2921D"),color("#A61F69"),color("#400E32"),color("#7B2869"),color("#460C68"),color("#D989B5")];
  
  smallCrB = 0.005;
  smallCrT = 0.01;

  mediumCrB = 0.017;
  mediumCrT = 0.021;

  largeCrB = 0.06;
  largeCrT = 0.07;
  
  frameRate(2);
  //noLoop();
  noStroke();
}

function draw() {
  background(0);
  
  for (let i = 0; i < 200; i++) {
    fill(random(colorScheme));
    circle(random(width),random(height),random(smallCrB * width, smallCrT * width));
  }
  
  for (let i = 0; i < 400; i++) {
    fill(random(colorScheme));
  circle(random(width),random(0.2*height,0.8*height),random(smallCrB * width, smallCrT * width));
  }
  
  for (let i = 0; i < 100; i++) {
    fill(random(colorScheme));
    circle(random(width),random(height),random(mediumCrB * width, mediumCrT * width));
  }
  
  for (let i = 0;i < 25; i++) {
    var cV = 20
    var c = random(colorScheme);
    
    var newColor = color(red(c)+random(-cV,cV),green(c)+random(-cV,cV),blue(c)+random(-cV,cV));
    fill(newColor)
    
    circle(random(width),random(height),random(largeCrB * width, largeCrT * width));
  }
}