import { generateHuman } from '../generateHuman';

const human = generateHuman();

test('is instance of Object', () => {
    expect(human).toBeInstanceOf(Object);
});

test('Contain all keys', () => {
    expect(human).toHaveProperty('id');
    expect(human).toHaveProperty('name');
    expect(human).toHaveProperty('surname');
    expect(human).toHaveProperty('email');
    expect(human).toHaveProperty('phoneNr');
    expect(human).toHaveProperty('country');
});
