import { Color } from "./color"
export class Pixel {
    private x: number;
    private y: number;
    private color: Color;

    constructor(iX: number, iY: number, iColor: Color) {
        this.x = iX;
        this.y = iY;
        this.color = iColor;
    }
    public getX(): number {
        return this.x;
    }
    public getY(): number {
        return this.y;
    }
    public getColor(): Color {
        return this.color;
    }
    public setX(iX: number): void {
        this.x = iX;
    }
    public setY(iY: number): void {
        this.y = iY;
    }
    public setColor(iColor: Color): void {
        this.color = iColor;
    }
}

