// Initialize variables to control the Perlin noise generation.
let xoff1 = 0; // Starting point for the first Perlin noise dimension
let xoff2 = 10000; // Starting point for the second Perlin noise dimension

let inc = 0.01; // Increment value to move through the Perlin noise space
let start = 1; // Starting point in the Perlin noise number set

function setup() {
    createCanvas(400, 400);
}

function draw() {
    //Set background color
    background(204, 153, 255);

    //The starting point in the perlin noise number set changes each frame(60fps)
    let xoff = start;

    // Set stroke color for the lines.
    stroke(0);

    //disables filling shapes with color. Ensuring that the shape is not filled with any color(white in this case, i think...), which leaves only the stroke visible.
    noFill();

    // Begin drawing a shape to create the line effect.
    beginShape();

    // Loop through the width of the canvas to create the Perlin noise line.
    for (let x = 0; x < innerWidth; x++) {
        // Generate Perlin noise values for the y-coordinate and sinusoidal variation.
        let n = map(noise(xoff), 0, 1, 0, height);
        let s = map(sin(xoff), -1, 1, -50, 50);
        let y = s + n;

        // Draw a vertex at the current position.
        vertex(x, y);

        // Increment the Perlin noise value.
        xoff += inc;
    }
    endShape();

    // Move to the next frame in the Perlin noise number set.
    start += inc;

    //If we call the noLoop() function, then we won't redraw the scene at 60fps.
    // noLoop();
}
