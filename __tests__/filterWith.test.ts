import { filterWith } from '../filterWith';

// goodArguments:
    const arrayOfStrings = ["one", "two", "three", "four"]
    const arrayOfNumbers = [1,2, 3, 4, 234, 23]
    const arrayOfObjects = [{name: "Bob"}, {name: "Kelly"}, {name: "Chance"}, {name: "George"}]
    const arrayOfBooleans = [true, true, false, true, false, false]
    const emptyArray = [];
// badArguments: 
    const string = "sometimes I like something else"
    const numbers = 34
    const object = {name: "Cindy", surname: "Dunno"}
    const boolean = true

describe('filterWith tests', () => {
    it('Good arguments', () => {
        expect(filterWith(arrayOfStrings, 'one')).toEqual(['one']);
        expect(filterWith(arrayOfObjects, 'Kelly')).toEqual([{name: 'Kelly'}]);
    })
    it('Searched word is to short, less than 3', () => {
        expect(filterWith(arrayOfStrings, 'on')).toEqual([]);
    })
    it('Single digit number should not be searched', () => {
        expect(filterWith(arrayOfNumbers, 2)).toEqual([]);
        console.log("It's []");
    })
})