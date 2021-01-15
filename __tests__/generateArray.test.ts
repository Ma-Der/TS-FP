import { generateArrayWithRandomNumbers, generateArrayOfArrays } from '../generateArray';

describe("generateArrayWithNumbers properly works", () => {
    test("when numbers are randomly placed in array", () => {   
        const exampleInput = generateArrayWithRandomNumbers(5, 1, 5);
        const notRandomResult = [1, 2, 3, 4, 5];
        expect(exampleInput).not.toEqual(notRandomResult);
    });
   
    test("when in array are amount of numbers that was given", () => {
        const howManyNumbers = 5;
        const minValue = 1;
        const maxValue = 10;
        const exampleInput = generateArrayWithRandomNumbers(howManyNumbers, minValue, maxValue);
    
        expect(exampleInput.length).toBe(howManyNumbers);
    });
   
    test("when min value is higher than max value, than min value becomes max value and max value become min value", () => {
        const howManyNumbers = 10;
        const minValue = 20;
        const maxValue = 5;
    
        const generateResult = generateArrayWithRandomNumbers(howManyNumbers, minValue, maxValue);
    
        expect(generateResult.every((number) => number >= maxValue && number <= minValue)).toBeTruthy();
    });
   });
   
describe("generateArrayWithNumbers properly handles error", () => {
    test("when min and max value are not integers", () => {
        const howManyNumbers = 4;
        const minValueInteger = 2;
        const maxValueInteger = 10;
        const minValueNotInteger = 1.3;
        const maxValueNotInteger = 3.6;
        () => expect(generateArrayWithRandomNumbers(howManyNumbers, minValueNotInteger, maxValueInteger)).toThrowError("Min value must be an integer.");
    
        () => expect(generateArrayWithRandomNumbers(howManyNumbers, minValueInteger, maxValueNotInteger)).toThrowError("Max value must be an integer.");
    });
   
    test("when howManyNumbers argument is less than zero", () => {
        const howManyNumbers = -2;
        const minValue = 2;
        const maxValue = 5;
        () => expect(generateArrayWithRandomNumbers(howManyNumbers, minValue, maxValue)).toThrowError("1st parameter must be more than zero.");
    });
   
    test("when one of the variables is NaN", () => {
        const howManyNumbers = 3;
        const minValue = NaN;
        const maxValue = 5;
    
        () =>expect(generateArrayWithRandomNumbers(howManyNumbers, minValue, maxValue)).toThrowError("All arguments must be numbers.");
    });
   });
   
describe("Generate Array of Arrays properly works", () => {
    test("when there is as many arrays that were given in howManyArrays variable", () => {
        const howManyArrays = 3;
        const howManyNumbers = 3;
        const minValue = 5;
        const maxValue = 100;
        const exampleInput = generateArrayOfArrays(howManyArrays, howManyNumbers, minValue, maxValue);
    
        expect(exampleInput.length).toBe(howManyArrays);
    });
   
   });
   
describe("Generate Array of Arrays properly handles error", () => {
    test("when howManyArrays variable is less than zero", () => {
        const howManyArrays = -2;
        const howManyNumbers = 4;
        const minValue = 3;
        const maxValue = 7;
    
        () => expect(generateArrayOfArrays(howManyArrays, howManyNumbers, minValue, maxValue));
    });
   });