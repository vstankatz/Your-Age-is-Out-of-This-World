import {Mars} from './../src/age-calc.js';

describe('Mars', () => {

  test('should take in the variable', () => {
    let newVar = new Mars(9490,36500);
    expect(newVar.earthDays).toEqual(9490);
    expect(newVar.earthExpectancy).toEqual(36500);
  });

  test('should convert earth days to mars', () => {
    let newDays = new Mars(9490,36500);
    expect(newDays.marsCalc()).toEqual("You are 5047 days old on Mars with a life expectancy of 19414 days here!")
  });
});
