export class Color {

    private red: number;
    private green: number;
    private blue: number;
    private transparency: number;

    constructor(iR: number, iG: number, iB: number, iT: number) {
        this.red = iR;
        this.green = iG;
        this.blue = iB;
        this.transparency = iT;
    }

    public getRed(): number {
        return this.red;
    }

    public getGreen(): number {
        return this.green;
    }

    public getBlue(): number {
        return this.blue;
    }

    public getTransparency(): number {
        return this.transparency;
    }

    public setRed(iR: number): void {
        this.red = iR;
    }

    public setGreen(iG: number): void {
        this.green = iG;
    }

    public setBlue(iB: number): void {
        this.blue = iB;
    }

    public setTransparency(iT: number): void {
        this.transparency = iT;
    }
}

