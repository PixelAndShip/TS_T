import { Color } from "../components/color"
import { Pixel } from "../components/pixel"
import { Line } from "../components/line"
import { drawPixel } from "./draw_pixel";

export function drawLine(iL: Line): void {
    let a: Pixel = iL.getA();
    let b: Pixel = iL.getB();

    let deltaColor: Color = getDeltaColor(a.getColor(), b.getColor());

    let deltaX: number = b.getX() - a.getX();
    let deltaY: number = b.getY() - a.getY();



    let slope: number;
    let increment: number;

    let drawableColor: Color = a.getColor();

    if (Math.abs(deltaX) >= Math.abs(deltaY)) {
        slope = Math.abs(deltaY / deltaX);
        let xDirection: number = 1;
        let yDirection: number = 1;
        if (deltaX < 0) {
            xDirection = -1;
        }
        if (deltaY < 0) {
            yDirection = -1;
        }

        for (let i = 0; i <= Math.abs(deltaX); i++) {
            increment = a.getY() + i * yDirection * slope;

            drawPixel(
                a.getX() + i * xDirection,
                Math.round(increment),
                getDrawableColor(
                    drawableColor,
                    deltaColor,
                    i,
                    Math.abs(deltaX)
                )
            );
        }

    } else {
        slope = Math.abs(deltaX / deltaY);

        let xDirection: number = 1;
        let yDirection: number = 1;
        if (deltaX < 0) {
            xDirection = -1;
        }
        if (deltaY < 0) {
            yDirection = -1;
        }

        for (let i = 0; i <= Math.abs(deltaY); i++) {

            increment = a.getX() + i * xDirection * slope;

            drawPixel(
                Math.round(increment),
                a.getY() + i * yDirection,
                getDrawableColor(
                    drawableColor,
                    deltaColor,
                    i,
                    Math.abs(deltaY)
                )
            );
        }
    }
}


export function getDeltaColor(c1: Color, c2: Color): Color {
    let deltaColor: Color = new Color(0, 0, 0, 0);

    deltaColor.setRed(c2.getRed() - c1.getRed());
    deltaColor.setGreen(c2.getGreen() - c1.getGreen());
    deltaColor.setBlue(c2.getBlue() - c1.getBlue());
    deltaColor.setTransparency(c2.getTransparency() - c1.getTransparency());

    return deltaColor;
}


export function getDrawableColor(
    currentColor: Color,
    deltaColor: Color,
    iteration: number,
    totalIterations: number
): Color {

    let drawableColor: Color = new Color(0, 0, 0, 0);

    if (totalIterations === 0) {
        return currentColor;
    }

    drawableColor.setRed(
        currentColor.getRed() +
        (deltaColor.getRed() * iteration) / totalIterations
    );

    drawableColor.setGreen(
        currentColor.getGreen() +
        (deltaColor.getGreen() * iteration) / totalIterations
    );

    drawableColor.setBlue(
        currentColor.getBlue() +
        (deltaColor.getBlue() * iteration) / totalIterations
    );

    drawableColor.setTransparency(
        currentColor.getTransparency() +
        (deltaColor.getTransparency() * iteration) / totalIterations
    );

    return drawableColor;
}