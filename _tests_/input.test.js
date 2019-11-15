import {Input} from "./../src/age-calc.js";

describe('Input', () => {

  test('should take in the variable', () => {
    let newVar = new Input("26","100");
    expect(newVar.inputAge).toEqual("26");
    expect(newVar.inputExpectancy).toEqual("100");
  });

  test('should convert the variable to a number', () => {
    let newNum = new Input("a","100");
    expect(newNum.convertToNum()).toEqual("enter a number.");
    // expect(newNum.inputExpectancy).toEqual(100);
    // expect(newNum.convertToNum()).toEqual("You are 26 years old and should live to be 100 years old.");
  })

});
