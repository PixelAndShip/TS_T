import { Student } from "./components/student"

const David = new Student("David", "CS", 22, [7, 6, 8]);
console.log(David.getName() + " " + David.getGrades());
David.appendGrades([10, 9]);
console.log(David.getName() + " " + David.getGrades());
