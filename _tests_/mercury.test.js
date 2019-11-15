import {Mercury} from "./../src/merc-calc.js";
const mercInput = require("./../src/age-calc");



describe('Mercury', () => {

  test('Should take in the variables', () => {
    let mercAge = new Mercury();
    jest.mock("./../src/age-calc", () => {
      return jest.fn(() => 26,100);
    });
    expect(mercAge.age).toEqual(26);
    expect(mercAge.inputExpectancy).toEqual(100);
  });
});
