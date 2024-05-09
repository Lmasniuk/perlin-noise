let inc = 0.1;

function setup() {
    createCanvas(600, 600);
    pixelDensity(1);
}

function draw() {
    // let inc = 0.1;

    let yoff = 0;
    loadPixels();

    for (let y = 0; y < height; y++) {
        let xoff = 0;
        for (let x = 0; x < width; x++) {
            let index = (x + y * width) * 4;
            // let r = noise(xoff, yoff) * 255;

            //This line will make the perlin noise values re-generate each time,
            // creating a more animated effect
            let r = noise(xoff, yoff, frameCount * 0.02) * 255;

            pixels[index] = 1;
            pixels[index + 1] = r;
            pixels[index + 2] = 1;
            pixels[index + 3] = 255;
            xoff += inc;
        }
        yoff += inc;
    }
    updatePixels();

    //Update the increment to make things super trippy! Has a zooming out effects
    // inc += 0.0001;
    // noLoop();
}
