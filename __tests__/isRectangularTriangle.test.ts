import { isRectangularTriangle } from '../isRectangularTriangle';

describe("isRectangularTriangle function works properly", () => {
    test("when returns true if from given lengths can build rectangular triangle", () => {
        const firstTriangleSideLength = 3;
        const secondTriangleSideLength = 4;
        const thirdTriangleSideLength = 5;
        const exampleInput = isRectangularTriangle(firstTriangleSideLength, secondTriangleSideLength, thirdTriangleSideLength);
    
        expect(exampleInput).toBeTruthy();
    });
   
    test("when returns false if from given lengths you cannot build rectangular triangle", () => {
        const firstTriangleSideLength = 4;
        const secondTriangleSideLength = 5;
        const thirdTriangleSideLength = 7;
        const exampleInput = isRectangularTriangle(firstTriangleSideLength, secondTriangleSideLength, thirdTriangleSideLength);
    
        expect(exampleInput).toBeFalsy();
    });
});
   
describe("isRectangularTriangle handles errors properly", () => {
    test("when one of the arguments is NaN", () => {
        const firstLength = 3;
        const secondLength = 5;
        const thirdLength = 7;
        const NaNLength = NaN;
    
        () => expect(isRectangularTriangle(firstLength, secondLength, NaNLength)).toThrowError("One of the variables is not a number.");
        () => expect(isRectangularTriangle(firstLength, NaNLength, thirdLength)).toThrowError("One of the variables is not a number.");
        () => expect(isRectangularTriangle(NaNLength, secondLength, thirdLength)).toThrowError("One of the variables is not a number.");
        () => expect(isRectangularTriangle(NaNLength, NaNLength, NaNLength)).toThrowError("One of the variables is not a number.");
    });
   
    test("when sum of shorter sides is less or equal to the longest side", () => {
        const firstLength = 3;
        const secondLength = 4;
        const thirdLength = 20;
    
        () => expect(isRectangularTriangle(firstLength, secondLength, thirdLength)).toThrowError("You can't build triangle with these sides.");
    });
   
    test("when one of the argument is not greater than zero", () => {
        const firstLength = 3;
        const secondLength = 4;
        const thirdLength = 20;
    
        const lessThanZeroLength = -5;
    
        () => expect(isRectangularTriangle(firstLength, secondLength, lessThanZeroLength)).toThrowError("All variables must be greater than zero.");
        () => expect(isRectangularTriangle(firstLength, lessThanZeroLength, thirdLength)).toThrowError("All variables must be greater than zero.");
        () => expect(isRectangularTriangle(lessThanZeroLength, secondLength, thirdLength)).toThrowError("All variables must be greater than zero.");
        () => expect(isRectangularTriangle(lessThanZeroLength, lessThanZeroLength, lessThanZeroLength)).toThrowError("All variables must be greater than zero.");
    });
});