import { aggregateIntoChunks } from '../aggregateIntoChunks';

// Każdy argument, który nie jest array'em nie przechodzi - wyrzuca błąd - zachowanie prawidłowe
// Jeśli array zawiera mniej niż 4 elementy, wyrzuci błąd - złapane dzięki testom i poprawione


test('AggregateIntoChunks defined', () => {
    expect(aggregateIntoChunks).toBeDefined();
})

test('Wrong arguments: empty array', () => {
    const wrongArg = () => {
        aggregateIntoChunks([]);
    }
    expect(wrongArg).toThrowError();
})

test('Wrong arguments: array with less than 4 elements', () => {
    const aggMock = jest.fn(() => aggregateIntoChunks([1,2,3]));
    expect(aggMock).toThrowError('Array needs to have at least 4 elements.');
})

test('Good arguments: array of strings', () => {

    expect(aggregateIntoChunks(["asafdfaddasdsaf", "sd", "sdds", "sa"])).toEqual(Array(["asafdfaddasdsaf", "sd", "sdds", "sa"]));
})

test('Good arguments: array of numbers', () => {

    expect(aggregateIntoChunks([9, 5, 2, 3])).toEqual(Array([9, 5, 2, 3]));
})

