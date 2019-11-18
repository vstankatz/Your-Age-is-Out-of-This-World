import {Input2} from "./../src/age-calc.js";

describe('Input2', () => {

  test('should take in the variable', () => {
    let newVar = new Input2(26,100);
    expect(newVar.inputAge).toEqual(26);
    expect(newVar.inputExpectancy).toEqual(100);
  });

  test('should reject inputs that are not a number', () => {
    let newNum = new Input2("a","100");
    expect(newNum.convertToNum()).toEqual("enter a number.");
  });

  test('should covert string number into number', () => {
    let newNum = new Input2("26","100");
    expect(newNum.convertToNum()).toEqual("26 100");
  });

  test('should add original input to variables', () => {
    let newNum = new Input2(26,100);
    expect(newNum.convertToNum()).toEqual("26 100");
  });

  test('should multiply the years by 365', () => {
    let newAge = new Input2(26, 100);
    expect(newAge.toDays((newAge.age = newAge.inputAge),(newAge.expectancy = newAge.inputExpectancy))).toEqual("You are 9490 days old on Earth and you are expected to live to 36500 days old here.");
  });

  //THIS IS THE BEGINNING OF THE SECOND METHOD WHICH USES CLASSES INSTEAD OF STANDARD FUNCTIONS.

  test('should convert earth days to mercury', () => {
    let newDays = new Input2(26,100);
    newDays.toDays((newDays.age = newDays.inputAge),(newDays.expectancy = newDays.inputExpectancy));
    expect(newDays.mercCalc()).toEqual("You are 107 days old on Mercury and you are expected to live to 414 days old there.")
  });

  test('should convert earth days to venus', () => {
    let newDays = new Input2(26,100);
    newDays.toDays((newDays.age = newDays.inputAge),(newDays.expectancy = newDays.inputExpectancy));
    expect(newDays.venusCalc()).toEqual("You are 42 days old on Venus and you are expected to live to 162 days old there.")
  });

  test('should convert earth days to mars', () => {
    let newDays = new Input2(26,100);
    newDays.toDays((newDays.age = newDays.inputAge),(newDays.expectancy = newDays.inputExpectancy));
    expect(newDays.marsCalc()).toEqual("You are 5047 days old on Mars and you are expected to live to 19414 days old there.")
  });

  test('should convert earth days to jupiter', () => {
    let newDays = new Input2(26,100);
    newDays.toDays((newDays.age = newDays.inputAge),(newDays.expectancy = newDays.inputExpectancy));
    expect(newDays.jupiterCalc()).toEqual("You are 800 days old on Jupiter and you are expected to live to 3077 days old there.")
  });

  test('should subtract mercury days lived from mercury days expected', () => {
    let newDeath = new Input2(26,100);

    newDeath.toDays((newDeath.age = newDeath.inputAge),(newDeath.expectancy = newDeath.inputExpectancy));
    newDeath.expectAndSee(newDeath.mercCalc(9490,36500));
    newDeath.expectAndSee(newDeath.venusCalc(9490,36500));
    newDeath.expectAndSee(newDeath.marsCalc(9490,36500));
    newDeath.expectAndSee(newDeath.jupiterCalc(9490,36500));
    expect(newDeath.expectAndSee()).toEqual("You have this many days to live on each planet-- Earth: 27010, Mercury: 307, Venus: 120, Mars: 14367, Jupiter: 2277.");
  });

  test('should make the number positive if the expectancy is surpassed', () => {
    let newDeath = new Input2(108,100);
    newDeath.toDays((newDeath.age = newDeath.inputAge),(newDeath.expectancy = newDeath.inputExpectancy));
    newDeath.expectAndSee(newDeath.mercCalc(39420,36500));
    newDeath.expectAndSee(newDeath.venusCalc(39420,36500));
    newDeath.expectAndSee(newDeath.marsCalc(39420,36500));
    newDeath.expectAndSee(newDeath.jupiterCalc(39420,36500));
    expect(newDeath.expectAndSee()).toEqual("Well done! You've lived past your expected demise! Here's how many days you've been cheating the grim reaper on each planet-- Earth: 2920, Mercury: 34, Venus: 13, Mars: 1554, Jupiter: 246.")
  });

  test('should return a message if there is a life expectancy of 0 years', () => {
    let newDeath = new Input2(100,100);
        newDeath.toDays((newDeath.age = newDeath.inputAge),(newDeath.expectancy = newDeath.inputExpectancy));
        expect(newDeath.expectAndSee()).toEqual("Uh Oh, best be careful on all planets because you're expected to die this year!")
  });

});
