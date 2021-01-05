import { generateArrayWithRandomNumbers, generateArrayOfArrays } from '../generateArray';

describe('generateArrayWithNumbers: ', () => {
    test('Good arguments into function', () => {
        expect(generateArrayWithRandomNumbers(4, 1,1)).toEqual([1,1,1,1]);
        console.log(generateArrayWithRandomNumbers(4, 1,1))
    });
    
    test('Parameter representing length of array should be greater than 0', () => {
        () => expect(generateArrayWithRandomNumbers(0, 1, 1)).toThrowError();
    });

    test('Bad arguments: string', () => {
        () => expect(generateArrayWithRandomNumbers(2, 'd', 4)).toThrowError('All arguments must be numbers.');
    });
});

describe('Generate Array of Arrays', () => {
    test('Good arguments', () => {
        expect(generateArrayOfArrays(2, 2, 1, 1)).toEqual([[1,1], [1,1]]);
    });
    test('Bad arguments: string', () => {
        () => expect(generateArrayOfArrays('e', 3, 2, 3)).toThrowError();
    });
    test('1st parameter less than 0 should throw error', () => {
        () => expect(generateArrayOfArrays(-1, 2,3,4)).toThrowError();
    });
});


