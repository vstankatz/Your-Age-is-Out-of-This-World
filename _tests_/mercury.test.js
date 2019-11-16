import {Mercury} from "./../src/age-calc.js";


describe('Mercury', () => {

  test('should take in the variable', () => {
    let newVar = new Mercury(9490,36500);
    expect(newVar.earthDays).toEqual(9490);
    expect(newVar.earthExpectancy).toEqual(36500);
  });

  test('should convert earth days to mercury', () => {
    let newDays = new Mercury(9490,36500);
    expect(newDays.mercCalc()).toEqual("107 414")
  })
});
