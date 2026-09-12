import { Person } from "./person"
export class Student extends Person {

    private specialty: string;
    private grades?: number[];

    constructor(iName: string, iSpec: string, iAge?: number, iGrades?: number[]) {
        super(iName, iAge);
        this.specialty = iSpec;
        this.grades = [];
        iGrades?.forEach((value) => this.grades?.push(value));
    }
    public setSpeciality(iSpec: string): void {
        this.specialty = iSpec;
    }
    public appendGrades(iGrades: number[]): void {
        iGrades.forEach((value) => this.grades?.push(value));
    }
    public getSpeciality(): string {
        return this.specialty;
    }
    public getGrades(): number[] | undefined {
        return this.grades;
    }
}