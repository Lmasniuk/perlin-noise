// This sketch visualizes a white circle moving around a canvas using Perlin noise.
// Perlin noise creates a smooth randomness, where values change gradually over time.
// We use Perlin noise to generate x and y coordinates for the white dot.

// Perlin noise requires a starting point, so we initialize two variables, xoff1 and xoff2, with different values.
let xoff1 = 0;
let xoff2 = 10000;

// We determine how quickly we move through the Perlin noise space by defining increments.
// Smaller increments result in smoother movement.
let inc = 0.01;
let start = 1;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(52, 235, 192);

    // Use Perlin noise to determine the x and y coordinates of the white dot.
    // We map the noise values to the width and height of the canvas to position the dot.
    const x = map(noise(xoff1), 0, 1, 0, width);
    // const x = random(width);
    // const y = map(noise(xoff2), 0, 1, 0, height);

    ellipse(x, height / 2, 24, 24);

    // Increment the Perlin noise values to move through the noise space.
    // Increasing the increments will make the movement faster.
    xoff1 += 0.01;
    xoff2 += 0.02;
}
