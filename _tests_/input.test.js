import {Input} from "./../src/age-calc.js";

describe('Input', () => {

  test('should take in the variable', () => {
    let newVar = new Input("26","100");
    expect(newVar.inputAge).toEqual("26");
    expect(newVar.inputExpectancy).toEqual("100");
  });
});
