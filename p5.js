let xoff = 0

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(52, 235, 192);

    const x = map(noise(xoff), 0 , 1, 0, width)

    ellipse(x,200,24,24)

    xoff += 0.02
  }