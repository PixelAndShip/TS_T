export class Person {
    protected name: string;
    protected age?: number;

    constructor(iName: string, iAge?: number) {
        this.name = iName;
        this.age = iAge;
    }
    public getName(): string {
        return this.name;
    }
    public setname(iName: string): void {
        this.name = iName;
    }
    public getAge(): number | undefined {
        return this.age;

    }
    public setAge(iAge: number): void {
        this.age = iAge;
    }
}