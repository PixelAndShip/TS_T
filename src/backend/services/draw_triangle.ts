import { Color, Line } from "../components";
import { Pixel } from "../components/pixel"
import { drawLine, getDrawableColor, getDeltaColor } from "./draw_line"


export function drawTriangle(a: Pixel, b: Pixel, c: Pixel): void {
    let deltaX_BC: number = c.getX() - b.getX();
    let deltaY_BC: number = c.getY() - b.getY();

    let slope: number;
    let target: Pixel;
    let line: Line;

    if (Math.abs(deltaX_BC) >= Math.abs(deltaY_BC)) {

        slope = Math.abs(deltaY_BC / deltaX_BC);


        let xDirection: number = 1;
        let yDirection: number = 1;
        if (deltaX_BC < 0) {
            xDirection = -1;
        }
        if (deltaY_BC < 0) {
            yDirection = -1;
        }

        for (let i = 0; i <= Math.abs(deltaX_BC); i++) {

            target = getTargetPixel(
                b.getX(),
                b.getY(),
                i,
                Math.abs(deltaX_BC),
                slope,
                true,
                b.getColor(),
                getDeltaColor(b.getColor(), c.getColor()),
                xDirection,
                yDirection
            );

            line = new Line(a, target);
            drawLine(line);
        }

    } else {

        slope = Math.abs(deltaX_BC / deltaY_BC);
        let xDirection: number = 1;
        let yDirection: number = 1;
        if (deltaX_BC < 0) {
            xDirection = -1;
        }
        if (deltaY_BC < 0) {
            yDirection = -1;
        }


        for (let i = 0; i <= Math.abs(deltaY_BC); i++) {

            target = getTargetPixel(
                b.getX(),
                b.getY(),
                i,
                Math.abs(deltaY_BC),
                slope,
                false,
                b.getColor(),
                getDeltaColor(b.getColor(), c.getColor()),
                xDirection,
                yDirection
            );

            line = new Line(a, target);
            drawLine(line);
        }
    }
}


function getTargetPixel(
    startX: number,
    startY: number,
    iteration: number,
    totalIterations: number,
    slope: number,
    xd: boolean,
    c1: Color,
    deltaColor: Color,
    xDirection: number,
    yDirection: number
): Pixel {

    let c: Color = getDrawableColor(
        c1,
        deltaColor,
        iteration,
        totalIterations
    );

    let pix: Pixel = new Pixel(startX, startY, c);

    if (xd) {
        pix.setX(pix.getX() + iteration * xDirection);
        pix.setY(pix.getY() + iteration * yDirection * slope);
    } else {
        pix.setX(pix.getX() + iteration * xDirection * slope);
        pix.setY(pix.getY() + iteration * yDirection);
    }

    return pix;
}


