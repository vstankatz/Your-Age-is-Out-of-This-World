import {Input} from "./../src/age-calc.js";

describe('Input', () => {

  test('should take in the variable', () => {
    let newVar = new Input(26,100);
    expect(newVar.inputAge).toEqual(26);
    expect(newVar.inputExpectancy).toEqual(100);
  });

  test('should reject inputs that are not a number', () => {
    let newNum = new Input("a","100");
    expect(newNum.convertToNum()).toEqual("enter a number.");
  });

  test('should covert string number into number', () => {
    let newNum = new Input("26","100");
    expect(newNum.convertToNum()).toEqual("26 100");
  });

  test('should add original input to variables', () => {
    let newNum = new Input(26,100);
    expect(newNum.convertToNum()).toEqual("26 100")
  });

  test('should multiply the age by 365', () => {
    let newAge = new Input(26, 0);
    expect(newAge.toDays()).toEqual(9490)
  });
});
