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

  test('should subtract days lived from days expected', () => {
    let newVenus = new Venus(9490,36500);
    console.log(newVenus.mercTime);
    newVenus.expectAndSee(newVenus.venusCalc(9490,36500));
    expect(newVenus.expectAndSee()).toEqual("You have 120 days left to live on Venus.")
  });

  test('should make the number positive if the expectancy is surpassed', () => {
    let newDeath = new Venus(39420,36500);
    newDeath.expectAndSee(newDeath.venusCalc(39420,36500));
    expect(newDeath.expectAndSee()).toEqual(("Well done! You have lived past your expected demise by 13 days on Venus!"))
  });

  test('should return a message if there is a life expectancy of 0 years', () => {
    let newDeath = new Venus(100,100);
    newDeath.expectAndSee(newDeath.venusCalc(336500,36500));
        expect(newDeath.expectAndSee()).toEqual("Uh Oh, best be careful on all planets because you're expected to die this year!")
  });
});
