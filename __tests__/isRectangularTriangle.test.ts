import { isRectangularTriangle } from '../isRectangularTriangle';

test('Good arguments', () => {
    expect(isRectangularTriangle(3,4,5)).toBeTruthy();
    expect(isRectangularTriangle(2,3,4)).toBeFalsy();
});

test('Bad arguments, one will be string', () => {
    () => expect(isRectangularTriangle(1,'d',3)).toThrowError();
});

test('Variables less than 0, should throw error', () => {
    () => expect(isRectangularTriangle(-1,2,-3)).toThrowError();
});

