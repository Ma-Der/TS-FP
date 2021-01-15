import { generateHuman } from '../generateHuman';

describe("generateHuman function works properly", () => {
    test("when name is generated randomly", () => {
        const namesArray = () => {
            let names: string[] = [];
            for (let i = 0; i < 100; i++) {
            let { name } = generateHuman();
            names[i] = name;
            }
            return names;
        };
        const names = namesArray();
    
        const properResult = "Ada";
        expect(names.every((name) => name === properResult)).toBeFalsy();
    });
   
    test("when surname is generated randomly", () => {
        const surnamesArray = () => {
            let surnames: string[] = [];
            for (let i = 0; i < 100; i++) {
            let { surname } = generateHuman();
            surnames[i] = surname;
            }
            return surnames;
        };
        const surnames = surnamesArray();
    
        const properResult = "Nowak";
        expect(surnames.every((surname) => surname === properResult)).toBeFalsy();
    });
   
    test("when email includes generated name and surname", () => {
        const generateHumanResult = generateHuman();
        const { name, surname, email } = generateHumanResult;
    
        const properResult = `${name.toLowerCase()}.${surname.toLowerCase()}`;
    
        expect(email.includes(properResult)).toBeTruthy();
    });
   
    test('when randomly picked country is from array ["PL", "UK", "USA"]', () => {
        const generateHumanResult = generateHuman();
        const { country } = generateHumanResult;
        const countries = ["PL", "UK", "USA"];
    
        expect(countries.some((nation) => nation === country)).toBeTruthy();
    });
   
    test("when age is inbetween 18-85", () => {
        const generateHumanResult = generateHuman();
        const { age } = generateHumanResult;
    
        const isAgeInRange = (age) => (age >= 18 && age <= 85 ? true : false);
    
        expect(isAgeInRange(age)).toBeTruthy();
    });
   
    test("when phone number has 9 digits", () => {
        const generateHumanResult = generateHuman();
        const { phoneNr } = generateHumanResult;
        const properResult = 9;
    
        expect(phoneNr.length).toBe(properResult);
    });
   });