import {Venus} from "./../src/age-calc.js";

describe('Venus', () => {

  test('should take in the variable', () => {
    let newVar = new Venus(9490,36500);
    expect(newVar.earthDays).toEqual(9490);
    expect(newVar.earthExpectancy).toEqual(36500);
  });

  test('should convert earth days to venus', () => {
    let newDays = new Venus(9490,36500);
    expect(newDays.venusCalc()).toEqual("You are 42 days old on Venus with a life expectancy of 162 days here!")
  });
});
