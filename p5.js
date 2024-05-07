let xoff1 = 0;
let xoff2 = 10000;


let inc = 0.01;
let start = 0;

function setup() {
    createCanvas(400, 400);
  }
  
  // function draw() {
  //   background(52, 235, 192);

  //   const x = map(noise(xoff1), 0 , 1, 0, width)
  //   const y = map(noise(xoff2), 0 , 1, 0, height)

  //   ellipse(x,y,24,24)

  //   xoff1 += 0.01
  //   xoff2 += 0.02
  // }

  function draw(){
    background(204, 153, 255);
    let xoff = start;
    

    stroke(0)
    noFill();
    beginShape();
    for(let x=0; x<innerWidth; x++){
      stroke(0);
      // let n = map(noise(xoff),0,1,-50,50);
      // let s = map(sin(xoff),-1,1,0,height);

      let n = map(noise(xoff),0,1,0,height);
      let s = map(sin(xoff),-1,1,-50,50);
      let y = s + n;
      // let y = noise(xoff) * height;
      vertex(x,y);
      xoff+= inc;
    }
    endShape();
    start += inc;
    // noLoop();
  }