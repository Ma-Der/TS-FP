import { mapFn, filterFn, everyFn, reduceFn, reduceRightFn, someFn} from '../arrayMethods';

//mapFn

describe("mapFn function should work properly", () => {
  test("when returns new array", () => {
    const exampleInput = [1, 2, 3, 4, 5, 6, 7];
    const properResult = mapFn(exampleInput, (a) => a + 's');
    expect(exampleInput).not.toEqual(properResult);
  });

  test('when returns array with the same number of elements', () => {
    const exampleInput = [1, 2, 3, 4, 5, 6, 7];
    const properResult = mapFn(exampleInput, (a) => a + 's');
    expect(exampleInput.length).toEqual(properResult.length)
  });

  test('when array is empty, should return empty array', () => {
      const exampleInput = [];
      const properResult = [];
      expect(mapFn(exampleInput, (a) => a)).toEqual(properResult);
  });
       
  test("when function callback is provided on every array element", () => {
    const exampleInput = [1, 2, 3];
    const mockCallback = jest.fn((a) => a + "s");
    mapFn(exampleInput, (a) => mockCallback(a));
    expect(mockCallback.mock.calls.length).toBe(3);

    expect(mockCallback.mock.calls[0][0]).toBe(1);
    expect(mockCallback.mock.calls[1][0]).toBe(2);
    expect(mockCallback.mock.calls[2][0]).toBe(3);

    expect(mockCallback.mock.results[0].value).toBe('1s');
    expect(mockCallback.mock.results[1].value).toBe('2s');
    expect(mockCallback.mock.results[2].value).toBe('3s'); 
  });
});

//filterFn

describe('filterFn function works properly', () => {
    test('when returns array of values that comply with callback', () => {
        const exampleInput = [23, 'word', [23]];
        const properResult = ['word'];
        expect(filterFn(exampleInput, element => typeof element === 'string')).toEqual(properResult);
    });

    test('when callback function returns true or false for given element', () => {
        const exampleInput = [1,2,3,4,5];

        const filterFnMockCallback = jest.fn();
        filterFnMockCallback.mockReturnValueOnce(true).mockReturnValueOnce(true).mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce(false);

        const properResult = [1,2,3];
        expect(filterFn(exampleInput, element => filterFnMockCallback(element))).toEqual(properResult);
    });

    test('when array is empty, should return empty array', () => {
        const exampleInput = [];
        const properResult = [];
        expect(filterFn(exampleInput, element => element)).toEqual(properResult);
    });
});

//everyFn

describe('everyFn function works properly', () => {
  test('when will found false it will stop', () => {
    const exampleInput = [1,2,3,4,5];
    
    const everyMock = jest.fn(el => el < 3);
    everyFn(exampleInput, element => everyMock(element));

    expect(everyMock.mock.calls.length).toBe(3);

    expect(everyMock.mock.results[0].value).toBe(true);
    expect(everyMock.mock.results[1].value).toBe(true);
    expect(everyMock.mock.results[2].value).toBe(false);
  });
  
  test('when would not found false it will return true', () => {
    const exampleInput = [1,2,3,4,5];

    expect(everyFn(exampleInput, element => element <= 5)).toBeTruthy();
  });
});

//reduceFn

describe('reduceFn function works properly', () => {
  test('when it reduce array to a single output value', () => {
    const exampleInput = [1,2,3,4,5];
    const properResult = 15;

    expect(reduceFn(exampleInput, (acc, curr) => acc + curr)).toBe(properResult);
  });

  test('when initial value is set than previous value will equal initial value and current value will equal 1st value of an array', () => {
    const exampleInput = [1,2,3,4,5];

    const initialValue = 0
    const reducePrevValue = initialValue;
    const reduceCurrValue = 1;

    const reduceMock = jest.fn((acc, curr) => acc+curr);

    reduceFn(exampleInput, (acc, curr) => reduceMock(acc, curr), initialValue);
    expect(reduceMock.mock.calls[0][0]).toBe(reducePrevValue);
    expect(reduceMock.mock.calls[0][1]).toBe(reduceCurrValue);

  });

  test('when initial value is not set than previous vale will equal 1st value of an array and current value will equal 2nd value of an array', () => {
    const exampleInput = [1,2,3,4,5];

    const reducePrevValue = 1;
    const reduceCurrValue = 2;

    const reduceMock = jest.fn((acc, curr) => acc+curr);

    reduceFn(exampleInput, (acc, curr) => reduceMock(acc, curr));
    expect(reduceMock.mock.calls[0][0]).toBe(reducePrevValue);
    expect(reduceMock.mock.calls[0][1]).toBe(reduceCurrValue);
  });
});

describe('redcueFn handles properly errors', () => {
  test('when array is empty it should throw type error', () => {
    const exampleInput = [];

    () => expect(reduceFn(exampleInput, (acc, curr) => acc)).toThrowError('Array is empty.');
  });
});

//reduceRightFn

describe('reduceRightFn function works properly', () => {
  test('when initial value is set than previous value will equal initial value and current value will equal last value of an array', () => {
    const exampleInput = [1,2,3,4,5];

    const initialValue = 0;
    const reducePrevValue = initialValue;
    const reduceCurrValue = 5;

    const reduceRightMock = jest.fn((acc, curr) => acc+curr);

    reduceRightFn(exampleInput, (acc, curr) => reduceRightMock(acc, curr), initialValue);
    expect(reduceRightMock.mock.calls[0][0]).toBe(reducePrevValue);
    expect(reduceRightMock.mock.calls[0][1]).toBe(reduceCurrValue);
  });

  test('when initial value is not set than previous vale will equal last value of an array and current value will equal before last value of an array', () => {
    const exampleInput = [1,2,3,4,5];

    const reducePrevValue = 5;
    const reduceCurrValue = 4;

    const reduceRightMock = jest.fn((acc, curr) => acc+curr);

    reduceRightFn(exampleInput, (acc, curr) => reduceRightMock(acc, curr));
    expect(reduceRightMock.mock.calls[0][0]).toBe(reducePrevValue);
    expect(reduceRightMock.mock.calls[0][1]).toBe(reduceCurrValue);
  });
});

//someFn

describe('someFn function works properly', () => {
  test('when will found true it will stop', () => {
    const exampleInput = [1,2,3,4,5];

    const someMock = jest.fn(el => el > 3);
    someFn(exampleInput, element => someMock(element));

    expect(someMock.mock.calls.length).toBe(4);

    expect(someMock.mock.results[0].value).toBe(false);
    expect(someMock.mock.results[1].value).toBe(false);
    expect(someMock.mock.results[2].value).toBe(false);
    expect(someMock.mock.results[3].value).toBe(true);
  });

  test('when would not found true it will return false', () => {
    const exampleInput = [1,2,3,4,5];

    expect(someFn(exampleInput, element => element > 5)).toBeFalsy();
  });
});
