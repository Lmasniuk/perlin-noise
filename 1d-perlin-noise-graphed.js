let xoff1 = 0;
let xoff2 = 10000;

let inc = 0.01;
let start = 1;

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

function draw() {
    //Set background color
    background(204, 153, 255);

    //The starting point in the perlin noise number set changes each frame(60fps)
    let xoff = start;

    //Put the paintbrush down to draw a line
    stroke(0);

    //disables filling shapes with color. Ensuring that the shape is not filled with any color(white in this case, i think...), which leaves only the stroke visible.
    noFill();

    //Creates the line effect, otherwise we are just painting in a thick stroke... sorta(words are hard)
    beginShape();
    for (let x = 0; x < innerWidth; x++) {
        // let n = map(noise(xoff),0,1,-50,50);
        // let s = map(sin(xoff),-1,1,0,height);

        let n = map(noise(xoff), 0, 1, 0, height);
        let s = map(sin(xoff), -1, 1, -50, 50);
        let y = s + n;
        // let y = noise(xoff) * height;
        vertex(x, y);
        xoff += inc;
    }
    endShape();
    start += inc;
    // noLoop();
}
