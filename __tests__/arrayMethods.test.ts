import { mapFn, filterFn, everyFn, reduceFn, reduceRightFn, someFn} from '../arrayMethods';


    // goodArguments:
        const arrayOfStrings = ["one", "two", "three", "four"]
        const arrayOfNumbers = [1,2, 3, 4]
        const arrayOfObjects = [{name: "Bob"}, {name: "Kelly"}, {name: "Chance"}, {name: "George"}]
        const arrayOfBooleans = [true, true, false, true, false, false]
        const emptyArray = [];
   // badArguments: 
        const string = "sometimes I like something else"
        const numbers = 34
        const object = {name: "Cindy", surname: "Dunno"}
        const boolean = true

        // Wszystkie metody potrzebują array'i jako argumentów oraz callbacku
        // Żaden inny argument nie przechodzi testów, TypeScript pilnuje typów i wyrzuca błędy - zachowanie porządane

describe('mapFn tests', () => {
    test('Good arguments: array of strings', () => {
        expect(mapFn(arrayOfStrings, (str) => str.toUpperCase())).toEqual(['ONE', 'TWO', 'THREE', 'FOUR'])
    })
    test('Good arguments: array of numbers', () => {
        expect(mapFn(arrayOfNumbers, (num) => Math.pow(num, 2))).toEqual([1, 4, 9, 16])
    })
    test('Good arguments: empty array', () => {
        expect(mapFn(emptyArray, (item) => item)).toStrictEqual([])
    })
    // test poniżej pokazuje błędy wyrzucane przez TypeScripta - porządane, nie można wrzucić innej wartości niż array do argumentu - OK
    test('Bad arguments: string, with TS throws type error, without it gives bad results' , () => {
        expect(mapFn(string, (str) => str.toUpperCase())).toEqual(["S", "O", "M", "E", "T", "I", "M", "E", "S", " ", "I", " ", "L", "I", "K", "E", " ", "S", "O", "M", "E", "T", "H", "I", "N", "G", " ", "E", "L", "S", "E"])
        //expect(() => mapFn(string, (str) => str.toUpperCase())).toThrowError();
    }) 
}) 

describe('filterFn tests', () => {
    test('Good arguments: array of objects', () => {
        expect(filterFn(arrayOfObjects, element => element.name === "Chance")).toEqual(Array({name: "Chance"}));
    })
    test('function behavior', () => {
        const mock = jest.fn();

        mock.mockReturnValueOnce(true).mockReturnValueOnce(true).mockReturnValue(false);

        const result = filterFn(arrayOfStrings, str => mock(str));
        console.log(result);
    })
})

describe('everyFn tests', () => {
    test('Good arguments: array of numbers', () => {
        expect(everyFn(arrayOfNumbers, num => num > 0)).toBeTruthy();
    })

    test('everyFn behavior', () => {
        const everyMock = jest.fn();
        everyMock.mockReturnValueOnce(true).mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValue(true);

        const result = everyFn(arrayOfNumbers, num => everyMock(num));
        console.log(result)
    })
})

describe('reduceFn tests', () => {
    // przy złych argumentach oraz przy pominięciu TypeScirpta funkcja nie działa - nie powinna działać
    test('Bad arguments', () => {
        expect(reduceFn(numbers, (acc, number) => acc = number + 3)).toBeUndefined()
    })

    test('reduceFn behavior', () => {
        const reduceMock = jest.fn();

        reduceMock.mockReturnValueOnce(1).mockReturnValueOnce(3).mockReturnValueOnce(6).mockReturnValueOnce(10);

        const result = reduceFn(arrayOfNumbers, (acc, num) => acc = reduceMock(num), 0);
        console.log(result)
        expect(reduceMock.mock.calls.length).toBe(4);
        expect(reduceMock.mock.results[0].value).toBe(1);
        expect(reduceMock.mock.results[1].value).toBe(3);
        expect(reduceMock.mock.results[2].value).toBe(6);
        expect(reduceMock.mock.results[3].value).toBe(10);
    })
})

describe('someFn tests', () => {
    test('Good arguments: array of numbers', () => {
        expect(someFn(arrayOfNumbers, num => num < 5)).toBeTruthy();
    })

    test('someFn behavior', () => {
        const someMock = jest.fn();
        someMock.mockReturnValueOnce(false).mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValue(true);

        const result = someFn(arrayOfNumbers, num => someMock(num));
        console.log(result)
    })
})

describe('reduceRightFn tests', () => {
    test('Good arguments', () => {
        expect(reduceRightFn(arrayOfNumbers, (acc, number) => acc += number + 3, 0)).toEqual(22)
    })

    test('reduceRightFn behavior', () => {
        const reduceRightMock = jest.fn((acc, curr) => acc += curr);

        reduceRightMock.mockReturnValueOnce(4).mockReturnValueOnce(7).mockReturnValueOnce(9).mockReturnValueOnce(10);

        const result = reduceRightFn(arrayOfNumbers, (acc, num) => reduceRightMock(acc, num), 0);
        console.log(result)
        expect(reduceRightMock.mock.calls.length).toBe(4);
        expect(reduceRightMock.mock.results[0].value).toBe(4);
        expect(reduceRightMock.mock.results[1].value).toBe(7);
        expect(reduceRightMock.mock.results[2].value).toBe(9);
        expect(reduceRightMock.mock.results[3].value).toBe(10);
    })
})