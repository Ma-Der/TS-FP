import { mapFnR, filterFnR, everyFnR, someFnR } from '../masterReduce';

//mapFnR

describe("mapFnR function should work properly", () => {
    test("when returns new array", () => {
      const exampleInput = [1, 2, 3, 4, 5, 6, 7];
      const properResult = mapFnR(exampleInput, (a) => a + 's');
      expect(exampleInput).not.toEqual(properResult);
    });
  
    test('when returns array with the same number of elements', () => {
      const exampleInput = [1, 2, 3, 4, 5, 6, 7];
      const properResult = mapFnR(exampleInput, (a) => a + 's');
      expect(exampleInput.length).toEqual(properResult.length)
    });
  
    test('when array is empty, should return empty array', () => {
        const exampleInput = [];
        const properResult = [];
        expect(mapFnR(exampleInput, (a) => a)).toEqual(properResult);
    });
         
    test("when function callback is provided on every array element", () => {
      const exampleInput = [1, 2, 3];
      const mockCallback = jest.fn((a) => a + "s");
      mapFnR(exampleInput, (a) => mockCallback(a));
      expect(mockCallback.mock.calls.length).toBe(3);
  
      expect(mockCallback.mock.calls[0][0]).toBe(1);
      expect(mockCallback.mock.calls[1][0]).toBe(2);
      expect(mockCallback.mock.calls[2][0]).toBe(3);
  
      expect(mockCallback.mock.results[0].value).toBe('1s');
      expect(mockCallback.mock.results[1].value).toBe('2s');
      expect(mockCallback.mock.results[2].value).toBe('3s'); 
    });
});

//filterFnR

describe('filterFnR function works properly', () => {
    test('when returns array of values that comply with callback', () => {
        const exampleInput = [23, 'word', [23]];
        const properResult = ['word'];
        expect(filterFnR(exampleInput, element => typeof element === 'string')).toEqual(properResult);
    });

    test('when callback function returns true or false for given element', () => {
        const exampleInput = [1,2,3,4,5];

        const filterFnMockCallback = jest.fn();
        filterFnMockCallback.mockReturnValueOnce(true).mockReturnValueOnce(true).mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce(false);

        const properResult = [1,2,3];
        expect(filterFnR(exampleInput, element => filterFnMockCallback(element))).toEqual(properResult);
    });

    test('when array is empty, should return empty array', () => {
        const exampleInput = [];
        const properResult = [];
        expect(filterFnR(exampleInput, element => element)).toEqual(properResult);
    });
});

//everyFnR

describe('everyFnR function works properly', () => {
    test('when will found false it will stop', () => {
      const exampleInput = [1,2,3,4,5];
      
      const everyMock = jest.fn(el => el < 3);
      everyFnR(exampleInput, element => everyMock(element));
  
      expect(everyMock.mock.calls.length).toBe(3);
  
      expect(everyMock.mock.results[0].value).toBe(true);
      expect(everyMock.mock.results[1].value).toBe(true);
      expect(everyMock.mock.results[2].value).toBe(false);
    });
    
    test('when would not found false it will return true', () => {
      const exampleInput = [1,2,3,4,5];
  
      expect(everyFnR(exampleInput, element => element <= 5)).toBeTruthy();
    });
});

//someFnR

describe('someFnR function works properly', () => {
    test('when will found true it will stop', () => {
      const exampleInput = [1,2,3,4,5];
  
      const someMock = jest.fn(el => el > 3);
      someFnR(exampleInput, element => someMock(element));
  
      expect(someMock.mock.calls.length).toBe(4);
  
      expect(someMock.mock.results[0].value).toBe(false);
      expect(someMock.mock.results[1].value).toBe(false);
      expect(someMock.mock.results[2].value).toBe(false);
      expect(someMock.mock.results[3].value).toBe(true);
    });
  
    test('when would not found true it will return false', () => {
      const exampleInput = [1,2,3,4,5];
  
      expect(someFnR(exampleInput, element => element > 5)).toBeFalsy();
    });
  });