function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  rectMode(CENTER);
}

let h, newY;

function draw() {
  //clean canvas
  background('#111');
  translate(-20, height / 2);
  
  
  for(let i = 0; i < width;) {
    strokeWeight(2);
    //set. color depending on i value
    h = floor(map(i * 5, 0, width, 0, 359));
    stroke(color('hsl(' + h + ', 100%, 50%)'));
    
    //newY = sin(i + asin(millis()/1000) / 0.5) * 100;
    newY = sin(i + millis()/200) * 100;
    
    //draw connectors
    beginShape();
      vertex(0, 0);
      translate(15, newY);
      vertex(15, -newY);
    endShape(CLOSE)
    
    //draw dots
    strokeWeight(30);
    point(0, 0);
    i += 3;
  }

}