//Creates arrays of the available color palettes
let colorpalette1 = ['#DB073D','#FFFC00','#FF820D','#FF7A3D','#BF2669','#FF194D','#AB2FDD'];
let colorpalette2 = ['#8EC7D2','#0D6986','#07485B','#05F2DB','#0540F2','#00796b'];
//Sets a constant minimum and maximum length for the hour hand
let minh = -20
let maxh = 20
//Sets a constant minimum and maximum length for the minute hand
let minm = -60
let maxm = 60
//Sets size of the frame
let fsize = 250

//Create a canvas with a black background and a white circular frame
function setup() {
  
  createCanvas(400, 400);
   background(0);
  fill(250);
  ellipse(width/2, height/2, fsize, fsize);
}

//When the mouse is pressed, call these functions to create the clock, hour hand, and minute hand
function mousePressed(){
  createClock();
  drawHour();
  drawMinute();
}

//Function creates a clock object and draws it
function createClock(){
  
  let clock = {
    x: width/2,
    y: height/2,
    size: 200,
    color: colorpalette1[floor(random(colorpalette1.length))],
  }
  
  fill(clock.color);
  noStroke();
  ellipse(clock.x, clock.y, clock.size, clock.size);

}

//Function creates an hour hand object and draws it
function drawHour(){
  
  let hour = {
    lx: width/2,
    ly: height/2,
    lx2: width/2 +random(minh, maxh),
    ly2: height/2 +random(minh, maxh),
    lcolor: colorpalette2[floor(random(colorpalette2.length))]
  }
  
  strokeWeight(4);
  stroke(hour.lcolor);
  line(hour.lx, hour.ly, hour.lx2, hour.ly2);
  
}

//Function creates a minute hand object and draws it
function drawMinute(){
  
  let minute = {
    mx: width/2,
    my: height/2,
    mx2: width/2 +random(minm, maxm),
    my2: height/2 +random(minm, maxm),
    mcolor: colorpalette2[floor(random(colorpalette2.length))]
  }

  strokeWeight(4);
  stroke(minute.mcolor);
  line(minute.mx, minute.my, minute.mx2, minute.my2);

}