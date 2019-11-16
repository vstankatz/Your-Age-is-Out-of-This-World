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
    expect(newNum.convertToNum()).toEqual("26 100");
  });

  test('should multiply the years by 365', () => {
    let newAge = new Input(26, 100);
    expect(newAge.toDays((newAge.age = newAge.inputAge),(newAge.expectancy = newAge.inputExpectancy))).toEqual("9490 36500");
  });

  test('should convert earth days to mercury', () => {
    let newDays = new Input(26,100);
    newDays.toDays((newDays.age = newDays.inputAge),(newDays.expectancy = newDays.inputExpectancy));
    console.log(newDays.ageDays);
    expect(newDays.mercCalc()).toEqual("107 414")
  });



});



// test('should subtract days lived form days expected', () => {
//   let newMerc = new Input(9490,36500);
//   let daysLeft = newMerc.mercCalc();
//   expect(daysLeft.expectAndSee()).toEqual("")
// });
