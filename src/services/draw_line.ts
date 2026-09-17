import { Color } from "../components/color"
import { Pixel } from "../components/pixel"
import { Line } from "../components/line"
import { drawPixel } from "./draw_pixel";

export function drawLine(iL: Line): void {
    let a: Pixel = iL.getA();
    let b: Pixel = iL.getA();
    let deltaColor: Color = getDeltaColor(a.getColor(), b.getColor());
    let deltaX: number = b.getX() - a.getX();
    if (deltaX < 0) {
        deltaX = 0;
    }
    let deltaY: number = b.getY() - a.getY();
    if (deltaY < 0) {
        deltaY = 0;
    }
    let increment: number = deltaX / deltaY;
    let start: number = a.getX();

    let drawableColor: Color = a.getColor();
    if (deltaX >= deltaY) {
        for (let i = start; i < deltaX; i++) {
            drawPixel(i, Math.round(increment), getDrawableColor(drawableColor, deltaColor, i, deltaX));
            increment++;
        }
    } else {
        for (let i = start; i < deltaY; i++) {
            drawPixel(Math.round(increment), i, getDrawableColor(drawableColor, deltaColor, i, deltaY));
            increment++;
        }
    }

}


function getDeltaColor(c1: Color, c2: Color): Color {
    let deltaColor: Color = new Color(0, 0, 0, 0);
    deltaColor.setRed(c2.getRed() - c1.getRed());
    deltaColor.setGreen(c2.getGreen() - c1.getGreen());
    deltaColor.setBlue(c2.getBlue() - c1.getBlue());
    deltaColor.setTransparency(c2.getTransparency() - c1.getTransparency());
    return deltaColor;
}

function getDrawableColor(currentColor: Color, deltaColor: Color, iteration: number, totalIterations: number): Color {
    let drawableColor: Color = new Color(0, 0, 0, 0);
    drawableColor.setRed(currentColor.getRed() + (deltaColor.getRed() * iteration) / totalIterations);
    drawableColor.setGreen(currentColor.getGreen() + (deltaColor.getGreen() * iteration) / totalIterations);
    drawableColor.setBlue(currentColor.getBlue() + (deltaColor.getBlue() * iteration) / totalIterations);
    drawableColor.setTransparency(currentColor.getTransparency() + (deltaColor.getTransparency() * iteration) / totalIterations);
    return drawableColor;

}