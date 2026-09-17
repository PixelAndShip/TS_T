import { Pixel } from "../components/pixel"
import { drawLine } from "./draw_line"


export function drawTriangle(a: Pixel, b: Pixel, c: Pixel): void {
    let deltaX_BC: number = c.getX() - b.getX();

}