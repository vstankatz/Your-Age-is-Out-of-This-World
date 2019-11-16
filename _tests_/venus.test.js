import {Venus} from "./../src/age-calc.js";

describe('Venus', () => {

  test('should take in the variable', () => {
    let newVar = new Venus(9490,36500);
    expect(newVar.earthDays).toEqual(9490);
    expect(newVar.earthExpectancy).toEqual(36500);
  });
});
