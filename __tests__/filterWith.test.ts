import { filterWith, data } from '../filterWith';

describe('filterWith function works properly', () => {
    test('when search object through nested objects', () => {
        const properResult1 = [data[4]];
        const properResult2 = [data[0]];
        expect(filterWith(data, 'Acevedo')).toEqual(properResult1);
        expect(filterWith(data, 'excepteur')).toEqual(properResult2);
    });

    test('when searches object with numbers', () => {
        const properResult = [data[1], data[4]];
        expect(filterWith(data, 984)).toEqual(properResult);
    });

    test('when function is case insensitive', () => {
        const properResult = [data[4]];

        expect(filterWith(data, 'acevedo')).toEqual(properResult);
        expect(filterWith(data, 'aCevedo')).toEqual(properResult);
        expect(filterWith(data, 'acEvedo')).toEqual(properResult);
        expect(filterWith(data, 'aceVedo')).toEqual(properResult);
        expect(filterWith(data, 'acevEdo')).toEqual(properResult);
        expect(filterWith(data, 'aceveDo')).toEqual(properResult);
        expect(filterWith(data, 'acevedO')).toEqual(properResult);
        expect(filterWith(data, 'ACEVEDO')).toEqual(properResult);
    });

    test('when returns empty array when searched phrase has less than 3 digits', () => {
        const properResult = [];
        expect(filterWith(data, 23)).toEqual(properResult);
    });
});

describe('filterWith function properly handles error', () => {
    test('when input array is empty', () => {
        const exampleInput = [];
        () => expect(filterWith(exampleInput, 'something')).toThrowError('There is nothing too search. Array is empty.');
    });
})