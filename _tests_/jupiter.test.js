import {Jupiter} from "./../src/age-calc.js"

describe('Jupiter', () => {

  test('should take in the variable', () => {
    let newVar = new Jupiter(9490,36500);
    expect(newVar.earthDays).toEqual(9490);
    expect(newVar.earthExpectancy).toEqual(36500);
  });

  test('should convert earth days to jupiter', () => {
    let newDays = new Jupiter(9490,36500);
    expect(newDays.jupiterCalc()).toEqual("800 3077")
  });
});
