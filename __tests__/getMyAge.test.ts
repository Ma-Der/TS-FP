import { getMyAge } from '../getMyAge';

describe("getMyAge works properly", () => {
    test("when age is the same independently of input (string, number or Date)", () => {
        const properResult = 37;

        expect(getMyAge(1984)).toBe(properResult);
        expect(getMyAge("1984")).toBe(properResult);
        expect(getMyAge(new Date(1984, 1, 1))).toBe(properResult);
    });
});
   
describe("getMyAge properly handles error", () => {   
    test("when in input is NaN", () => {
        () => expect(getMyAge(NaN)).toThrowError("Invalid input");
        () => expect(getMyAge(new Date(NaN))).toThrowError("Invalid input");
    });
   
    test("when in input is empty string", () => {
        () => expect(getMyAge("")).toThrowError("Empty string.");
    });
   
    test("when input is less then 1900", () => {
        const exampleStringInput = "1800";
        const exampleNumberInput = 1800;
        const exampleDateInput = new Date(1800, 1, 1);

        () => expect(getMyAge(exampleStringInput)).toThrowError("You are probably dead.");
        () => expect(getMyAge(exampleNumberInput)).toThrowError("You are probably dead.");
        () => expect(getMyAge(exampleDateInput)).toThrowError("You are probably dead.");
    });
   
    test("when input is later than the actual date", () => {
        const exampleInput = 2022;
        () => expect(getMyAge(exampleInput)).toThrowError("You are not born yet.");
    });
   
    test("when output is NaN", () => {
        const exampleInput = "dach";
        () => expect(getMyAge(exampleInput)).toThrowError("Wrong argument");
    });
});