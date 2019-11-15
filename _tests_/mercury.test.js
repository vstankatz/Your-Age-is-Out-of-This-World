import {Mercury} from "./../src/age-calc.js";


describe('Mercury', () => {

  test('should take in the variable', () => {
    let newVar = new Mercury(26,100);
    expect(newVar.earthDays).toEqual(26);
    expect(newVar.earthExpectancy).toEqual(100);
  });
});
