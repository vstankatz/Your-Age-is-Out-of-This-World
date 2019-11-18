import {Jupiter} from "./../src/age-calc.js"

describe('Jupiter', () => {

  test('should take in the variable', () => {
    let newVar = new Jupiter(9490,36500);
    expect(newVar.earthDays).toEqual(9490);
    expect(newVar.earthExpectancy).toEqual(36500);
  });

  test('should convert earth days to jupiter', () => {
    let newDays = new Jupiter(9490,36500);
    expect(newDays.jupiterCalc()).toEqual("You are 800 days old on Jupiter with a life expectancy of 3077 days here!")
  });

  test('should subtract days lived from days expected', () => {
    let newDeath = new Jupiter(9490,36500);
    newDeath.expectAndSee(newDeath.jupiterCalc(9490,36500));
    expect(newDeath.expectAndSee()).toEqual("You have 2277 days left to live on Jupiter.")
  });

  test('should make the number positive if the expectancy is surpassed', () => {
    let newDeath = new Jupiter(39420,36500);
    newDeath.expectAndSee(newDeath.jupiterCalc(39420,36500));
    expect(newDeath.expectAndSee()).toEqual(("Well done! You have lived past your expected demise by 246 days on Jupiter!"))
  });

  test('should return a message if there is a life expectancy of 0 years', () => {
    let newDeath = new Jupiter(100,100);
    newDeath.expectAndSee(newDeath.jupiterCalc(336500,36500));
        expect(newDeath.expectAndSee()).toEqual("Uh Oh, best be careful on all planets because you're expected to die this year!")
  });
});
