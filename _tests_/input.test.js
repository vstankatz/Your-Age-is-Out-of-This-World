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

  //THIS IS THE BEGINNING OF THE SECOND METHOD WHICH USES CLASSES INSTEAD OF STANDARD FUNCTIONS.

  test('should convert earth days to mercury', () => {
    let newDays = new Input(26,100);
    newDays.toDays((newDays.age = newDays.inputAge),(newDays.expectancy = newDays.inputExpectancy));
    expect(newDays.mercCalc()).toEqual("107 414")
  });

  test('should convert earth days to venus', () => {
    let newDays = new Input(26,100);
    newDays.toDays((newDays.age = newDays.inputAge),(newDays.expectancy = newDays.inputExpectancy));
    expect(newDays.venusCalc()).toEqual("42 162")
  });

  test('should convert earth days to mars', () => {
    let newDays = new Input(26,100);
    newDays.toDays((newDays.age = newDays.inputAge),(newDays.expectancy = newDays.inputExpectancy));
    console.log(newDays.ageDays);
    expect(newDays.marsCalc()).toEqual("5047 19414")
  });

  test('should convert earth days to jupiter', () => {
    let newDays = new Input(26,100);
    newDays.toDays((newDays.age = newDays.inputAge),(newDays.expectancy = newDays.inputExpectancy));
    console.log(newDays.ageDays);
    expect(newDays.jupiterCalc()).toEqual("800 3077")
  });

  test('should subtract mercury days lived from mercury days expected', () => {
    let newDeath = new Input(26,100);
    console.log(newDeath.mercAge);
    newDeath.toDays((newDeath.age = newDeath.inputAge),(newDeath.expectancy = newDeath.inputExpectancy));
    newDeath.mercCalc(newDeath.toDays((newDeath.age = newDeath.inputAge),(newDeath.expectancy = newDeath.inputExpectancy)));
    newDeath.venusCalc(newDeath.toDays((newDeath.age = newDeath.inputAge),(newDeath.expectancy = newDeath.inputExpectancy)));
    newDeath.marsCalc(newDeath.toDays((newDeath.age = newDeath.inputAge),(newDeath.expectancy = newDeath.inputExpectancy)));
    newDeath.jupiterCalc(newDeath.toDays((newDeath.age = newDeath.inputAge),(newDeath.expectancy = newDeath.inputExpectancy)));
    console.log(newDeath.mercAge);
    console.log(newDeath.mercExpectancy);
    console.log(newDeath.mercTime);
    expect(newDeath.expectAndSee(newDeath.mercTime)).toEqual("You have this many days to live on each planet Earth: 135050, Mercury: 614, Venus: 361, Mars: 57468, Jupiter: 11387.");
  });

  test('should make the number positive if they expectancy is surpassed', () => {
    let newDeath = new Input(108,100);
    newDeath.toDays((newDeath.age = newDeath.inputAge),(newDeath.expectancy = newDeath.inputExpectancy));
    console.log(newDeath.ageDays);
    expect(newDeath.expectAndSee()).toEqual(2920)
  });


    // expect(newAge.toDays((newAge.age = newAge.inputAge),(newAge.expectancy = newAge.inputExpectancy))).toEqual("9490 36500");
});
