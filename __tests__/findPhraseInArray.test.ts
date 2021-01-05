import { findPhraseInArray } from '../findPhraseInArray';

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

describe('findPhraseInArray tests', () => {
    it('should take as argument only array of strings and as a phrase only string', () => {
        expect(findPhraseInArray(arrayOfStrings, 'four')).toEqual(Array(['four', 3]));
        expect(() => findPhraseInArray(arrayOfStrings, true)).toThrowError(); // TypeScript pilnuje typów - OK
    })

    it('should throw error when filter phrase length is less than 3', () => {
        expect(() => findPhraseInArray(arrayOfStrings, 'fo')).toThrowError("Phrase must be more than 2 letters.");
    })
})