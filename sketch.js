var mud=0;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(100,100,200); //an RGB color for the canvas' background
}

//The draw function happens over and over again
function draw() {
  
  //circle
  stroke(255, 33, 107) // an RGB color for the circle's border
  fill(82, 23, 43,152); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(250,250,250,250); // center of canvas, 20px dia;

  //circle
  stroke(255, 33, 107) // an RGB color for the circle's border
  fill(255, 33, 107,152); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(300,250,40,100); // center of canvas, 20px dia;

  line(250,200,470,60);
  line(400,300,470,60);
  line(400,300,460,250);
  line(300,150,250,190);
  line(240,300,220,330);
  line(200,300,220,330);


}

