import { Pixel } from "./pixel"
export class Triangle {
    private a: Pixel;
    private b: Pixel;
    private c: Pixel;
    constructor(iA: Pixel, iB: Pixel, iC: Pixel) {
        this.a = iA;
        this.b = iB;
        this.c = iC;
    }

}
