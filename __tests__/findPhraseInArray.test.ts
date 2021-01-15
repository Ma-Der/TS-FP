import { findPhraseInArray } from '../findPhraseInArray';

describe('findPhraseInArray function works properly', () => {
    test('when returns data in special format [[string, number]]', () => {
        const exampleInput = ['Dawno', 'temu', 'w', 'Afryce'];
        const properResult = [['temu', 1]];
        expect(findPhraseInArray(exampleInput, 'tem')).toEqual(properResult);
    });

    test('when it is case insensitive', () => {
        const inputData = 'Koniec astronomicznych wakacji stał się faktem ale to nie koniec atrakcji w naszym pięknym kurorcie'.split(
            ' '
        );
        const properResult = [['Koniec', 0], ['koniec', 9]];
        expect(findPhraseInArray(inputData, 'koniec')).toEqual(properResult);
        expect(findPhraseInArray(inputData, 'Koniec')).toEqual(properResult);
        expect(findPhraseInArray(inputData, 'kOniec')).toEqual(properResult);
        expect(findPhraseInArray(inputData, 'koNiec')).toEqual(properResult);
        expect(findPhraseInArray(inputData, 'konIec')).toEqual(properResult);
        expect(findPhraseInArray(inputData, 'koniEc')).toEqual(properResult);
        expect(findPhraseInArray(inputData, 'konieC')).toEqual(properResult);
        expect(findPhraseInArray(inputData, 'KoNiEc')).toEqual(properResult);
        
    });

    test('when returns notification when searched phrase does not exist', () => {
        const inputData = 'Koniec astronomicznych wakacji stał się faktem ale to nie koniec atrakcji w naszym pięknym kurorcie'.split(
            ' '
          );
        const expectedNotification = 'Nothing found.';

        expect(findPhraseInArray(inputData, 'piotr')).toEqual(expectedNotification);
    });
});

describe('findPhraseInArray function properly handles error', () => {
    test('when searched phrase has less than 3 digits', () => {
        const inputData = 'Koniec astronomicznych wakacji stał się faktem ale to nie koniec atrakcji w naszym pięknym kurorcie'.split(
            ' '
          );
        () => expect(findPhraseInArray(inputData, 'ko')).toThrowError("Phrase must be more than 2 letters.");
    });
});