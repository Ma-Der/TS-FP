import { mapFnR, filterFnR, everyFnR, someFnR } from '../masterReduce';

describe('mapFnR tests', () => {
    it('Bad arguments into function: not an array and no callback', () => {
       () => expect(mapFnR('dash', 'dash')).toThrowError();
    });
    it('Good arguments', () => {
        expect(mapFnR([1,2,3], el => el + 'num')).toEqual(['1num', '2num', '3num']);
    });
});

describe('filterFnR tests', () => {
    it('Bad arguments into function, not array and no callback', () => {
        () => expect(filterFnR({1: 'asd',2: 'sda',3: 4}, 23*3)).toThrowError();
    });
    it('Good arguments', () => {
        expect(filterFnR([2,3,4,5], el => el > 4)).toEqual([5]);
    });
});

describe('everyFnR tests', () => {
    it('Bad arguments into function, should throw an error', () => {
        () => expect(everyFnR(213, [1,2,'f'])).toThrowError();
    });
    it('Good arguments', () => {
        expect(everyFnR([1,2.3,4], el => el < 1)).toBeFalsy();
    });
});

describe('someFnR tests', () => {
    it('Bad arguments into function, should throw an error', () => {
        () => expect(someFnR('asd', {er:"er"})).toThrowError();
    });
    it('Good arguments', () => {
        expect(someFnR([3,4,5,6,7,8,34], el => el < 4)).toBeTruthy();
    });
});