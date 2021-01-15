import { aggregateIntoChunks } from '../aggregateIntoChunks';

describe('aggregateIntoChunks function works properly', () => {
    const exampleInput = "Rekonstrukcja rządu Donalda Tuska przyniosła zmianę na stanowisku ministra nauki szkolnictwa wyższego. Prof. Lena Kolarska Bobińska nie zapowiedziała radykalnej zmiany kursu swej poprzedniczki. A Barbara Kudrycka konsekwentnie i radykalnie reformowała szkolnictwo wyższe. Wiele z tych zmian ma charakter pozytywny, wiele jednak jest zwyczajnie szkodliwych. Są też wciąż obszary zaniedbań. Oto siedem grzechów głównych reformy szkolnictwa wyższego i propozycje środków zaradczych.".split(' ');
    test('when splits array into chunks', () => {
        const exampleInput2 = ['asda', "asafdfaddasdsaf", "sd", "sdds", "sa", "sd", "asd", 3];
        const properResult = [['asda', "asafdfaddasdsaf", "sd", "sdds"], ["sa", "sd", "asd", 3]];
        expect(aggregateIntoChunks(exampleInput2)).toEqual(properResult)
        expect(aggregateIntoChunks(exampleInput2)).toHaveLength(2);
    });

    test('when chunks are random length', () => {
        const singleResult = aggregateIntoChunks(exampleInput);
        function arrayOfResults() {
            let results = new Array(100);    
            for(let i=0; i<100; i++) {
                results[i] = aggregateIntoChunks(exampleInput);
            }
            return results;
        }
        const randomResults = arrayOfResults();
        expect(randomResults.some(element => element !== singleResult)).toBeTruthy();
    });

    test('when each chunk length is between 4 and 7', () => {
        function chunkLengthCheck(el) {
            if(el.length >= 4 && el.length <=7) return true;
            return false;
        }
        const result = aggregateIntoChunks(exampleInput);
        expect(result.every(el => chunkLengthCheck(el))).toBeTruthy();
    });

    test('when chunks are divided without reminder', () => {
        const exInputLength = exampleInput.length;
        const functionResult = aggregateIntoChunks(exampleInput);
        const resultLengthSum = functionResult.reduce((acc, curr) => acc = acc + curr.length, 0);

        expect(exInputLength === resultLengthSum).toBeTruthy();
    });

    test('when it divides into chunks not in random order', () => {
        const functionResult = aggregateIntoChunks(exampleInput);
        const firstChunk = functionResult[0];

        function firstElementsCheck() {
            let bool: boolean[] = [];
            for(let i = 0; i < 4; i++) { 
                if(firstChunk[i] === exampleInput[i]) {
                    bool[i] = true;
                } else bool[i] = false;
            }
            return bool;
        }

        const booleanCheck = firstElementsCheck();
        expect(booleanCheck.every(el => el)).toBeTruthy();
    });
});

describe('aggregateIntoChunks function properly handles errors', () => {
    test('when throw error on array with wrong length', () => {
        const exampleInput = [2,4,6];
        () => expect(aggregateIntoChunks(exampleInput)).toThrowError('Array needs to have at least 4 elements.');
    });
});