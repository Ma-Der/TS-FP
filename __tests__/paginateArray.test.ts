import { paginateArray } from '../paginateArray';

describe("paginateArray works properly", () => {
 test("when elements are paginated not in random order", () => {
    const exampleInput = 'Lorem Ipsum has been the industrys standard dummy text ever since the There are many variations of passages of Lorem Ipsum available All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary It uses a dictionary of over 200 Latin words'.split(' ');
    const settings1 = { entriesOnPage: 4, paginateArrayIdx: 1 };
    const properResult1 = ["Lorem", "Ipsum", "has", "been"];
    const settings2 = { entriesOnPage: 4, paginateArrayIdx: 2 };
    const properResult2 = ["the", "industrys", "standard", "dummy"];
    const settings3 = { entriesOnPage: 4, paginateArrayIdx: 3 };
    const properResult3 = ["text", "ever", "since", "the"];

    expect(paginateArray(exampleInput, settings1)).toEqual(properResult1);
    expect(paginateArray(exampleInput, settings2)).toEqual(properResult2);
    expect(paginateArray(exampleInput, settings3)).toEqual(properResult3);
 });

 test("when on page is number of elements that was submitted in settings", () => {
    const exampleInput = 'Lorem Ipsum has been the industrys standard dummy text ever since the There are many variations of passages of Lorem Ipsum available All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary It uses a dictionary of over 200 Latin words'.split(' ');
    const settings = { entriesOnPage: 4, paginateArrayIdx: 1 };

    expect(paginateArray(exampleInput, settings).length).toEqual(settings.entriesOnPage);
 });
});

describe("paginateArray handles errors properly", () => {
 test("when input array is empty", () => {
    const exampleInput = [];
    const settings = { entriesOnPage: 4, paginateArrayIdx: 5 };
    () => expect(paginateArray(exampleInput, settings)).toThrowError("Array is empty, nothing to paginate.");
 });

 test("when one of the settings arguments is NaN", () => {
    const exampleInput = 'Lorem Ipsum has been the industrys standard dummy text ever since the There are many variations of passages of Lorem Ipsum available All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary It uses a dictionary of over 200 Latin words'.split(' ');
    const settings1 = { entriesOnPage: NaN, paginateArrayIdx: 5 };
    const settings2 = { entriesOnPage: 4, paginateArrayIdx: NaN };
    const settings3 = { entriesOnPage: NaN, paginateArrayIdx: NaN };

    () => expect(paginateArray(exampleInput, settings1)).toThrowError("Both settings must be numbers.");
    () => expect(paginateArray(exampleInput, settings2)).toThrowError("Both settings must be numbers.");
    () => expect(paginateArray(exampleInput, settings3)).toThrowError("Both settings must be numbers.");
 });

 test("when settings values are not greater than zero", () => {
    const exampleInput = 'Lorem Ipsum has been the industrys standard dummy text ever since the There are many variations of passages of Lorem Ipsum available All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary It uses a dictionary of over 200 Latin words'.split(' ');
    const settings1 = { entriesOnPage: -1, paginateArrayIdx: 5 };
    const settings2 = { entriesOnPage: 1, paginateArrayIdx: -5 };
    const settings3 = { entriesOnPage: -1, paginateArrayIdx: -5 };

    () => expect(paginateArray(exampleInput, settings1)).toThrowError('Both settings variables must be > 0');
    () => expect(paginateArray(exampleInput, settings2)).toThrowError('Both settings variables must be > 0');
    () => expect(paginateArray(exampleInput, settings3)).toThrowError('Both settings variables must be > 0');
 });

 test("when number of pages in settings is greater than actual pages", () => {
    const exampleInput = 'Lorem Ipsum has been the industrys standard dummy text ever since the There are many variations of passages of Lorem Ipsum available All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary It uses a dictionary of over 200 Latin words'.split(' ');
    const settings = { entriesOnPage: 4, paginateArrayIdx: 7 };

    () => expect(paginateArray(exampleInput, settings)).toThrowError('You only can paginate into maximum of ' + Math.ceil(exampleInput.length / settings.entriesOnPage) + ' pages.');
 });
});