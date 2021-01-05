import { getMyAge } from '../getMyAge';

test('Good arguments, string, number, Date', () => {
    console.log('string=1983: ' + getMyAge('1983'));
    expect(getMyAge('1983')).toBe(37);
    console.log("number=1983: " + getMyAge(1983));
    expect(getMyAge(1983)).toBe(37);
    console.log("Date=1983-2-12: " + getMyAge(new Date('1983-2-12')));
    expect(getMyAge(new Date('1983-2-12'))).toBe(37);
});

test('No argument passed to function.', () => {
    () => expect(getMyAge('something')).toThrowError('Wrong argument');
});

test('Value is less then 1900', () => {
    () => expect(getMyAge(1899)).toThrowError();
});

test('Date is higher then the actual date', () => {
    () => expect(getMyAge(2021)).toThrowError();
});

