import { Pixel } from "./pixel"
export class Line {
    private a: Pixel;
    private b: Pixel;
    constructor(iA: Pixel, iB: Pixel) {
        this.a = iA;
        this.b = iB;
    }
    public setA(iA: Pixel): void {
        this.a = iA;
    }
    public setB(iB: Pixel): void {
        this.b = iB;
    }
    public getA(): Pixel {
        return this.a;
    }
    public getB(): Pixel {
        return this.b;
    }
}
