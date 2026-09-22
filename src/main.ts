import GIF from "gif.js";
import {
    Color,
    Pixel,
    Line,
    Triangle,
    drawPixel,
    drawLine,
    drawTriangle,
    clearCanvas
} from "./backend";
const canvas = document.getElementById("canvas") as HTMLCanvasElement;


const red: Color = new Color(255, 0, 0, 255);
const blue: Color = new Color(0, 0, 255, 255);
const green: Color = new Color(0, 255, 0, 255);
const black: Color = new Color(0, 0, 0, 255);
let p1: Pixel = new Pixel(204, 154, red);
let p2: Pixel = new Pixel(136, 272, blue);
let p3: Pixel = new Pixel(272, 272, green);

// let pb1: Pixel = new Pixel(0, 0, black);
// let pb2: Pixel = new Pixel(800, 0, black);
// let pb3: Pixel = new Pixel(800, 800, black);
// let pb4: Pixel = new Pixel(0, 800, black);

// drawTriangle(pb1, pb2, pb3);
// drawTriangle(pb1, pb3, pb4);
// drawTriangle(p1, p2, p3);

let iteration: number = 0;
let prim1: number = 0;
enum primColor {
    red,
    green,
    blue
}

let prim2 = prim1 + 1;
let prim3 = prim2 + 1;

const gif = new GIF({
    workers: 2,
    quality: 10,
    width: canvas.width,
    height: canvas.height,
    workerScript: "/gif.worker.js",
    repeat: 0
});

let frame = 0;

setInterval(() => {
    clearCanvas();

    updateColor(primColor[prim1], iteration, p1);
    updateColor(primColor[prim2], iteration, p2);
    updateColor(primColor[prim3], iteration, p3);

    drawTriangle(p1, p2, p3);

    gif.addFrame(canvas, {
        copy: true,
        delay: 100
    });

    frame++;
    iteration++;

    if (iteration >= 256) {
        iteration = 0;

        prim1++;
        prim2++;
        prim3++;

        if (prim1 > 2) prim1 = 0;
        if (prim2 > 2) prim2 = 0;
        if (prim3 > 2) prim3 = 0;
    }



    // if (frame >= 766) {
    //     clearInterval(interval);

    //     console.log("All frames recorded. Starting GIF encoding...");

    //     gif.on("finished", (blob: Blob) => {
    //         console.log("GIF finished:", blob.size, "bytes");

    //         const url = URL.createObjectURL(blob);
    //         const a = document.createElement("a");

    //         a.href = url;
    //         a.download = "ts_t.gif";
    //         document.body.appendChild(a);
    //         a.click();
    //         document.body.removeChild(a);

    //         URL.revokeObjectURL(url);

    //         console.log("Download triggered");
    //     });

    //     gif.render();
}, 100);

function updateColor(color: string, iteration: number, pixel: Pixel) {
    switch (color) {
        case "red":
            pixel.getColor().setRed(255 - iteration);
            pixel.getColor().setGreen(iteration);
            pixel.getColor().setBlue(0);
            break;

        case "green":
            pixel.getColor().setRed(0);
            pixel.getColor().setGreen(255 - iteration);
            pixel.getColor().setBlue(iteration);
            break;

        case "blue":
            pixel.getColor().setRed(iteration);
            pixel.getColor().setGreen(0);
            pixel.getColor().setBlue(255 - iteration);
            break;
    }
}
