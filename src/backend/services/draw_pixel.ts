import { Color } from "../components/color";
import { Pixel } from "../components/pixel";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

export function drawPixel(x: number, y: number, color: Color): void {
    ctx.fillStyle = `rgba(${color.getRed()}, ${color.getGreen()}, ${color.getBlue()}, ${color.getTransparency()})`;
    ctx.fillRect(x, y, 1, 1);
}