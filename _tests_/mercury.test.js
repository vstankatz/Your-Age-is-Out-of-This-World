import {Mercury} from "./../src/age-calc.js";


describe('Mercury', () => {

  test('should take in the variable', () => {
    let newVar = new Mercury(9490,36500);
    expect(newVar.earthDays).toEqual(9490);
    expect(newVar.earthExpectancy).toEqual(36500);
  });

  test('should convert earth days to mercury', () => {
    let newDays = new Mercury(9490,36500);
    expect(newDays.mercCalc()).toEqual("You are 107 days old on Mercury with a life expectancy of 414 days here!")
  });

  test('should subtract days lived from days expected', () => {
    let newMerc = new Mercury(9490,36500);
    console.log(newMerc.mercTime);
    newMerc.expectAndSee(newMerc.mercCalc(9490,36500));
    expect(newMerc.expectAndSee()).toEqual("You have 307 days left to live on Mercury.")
  });

  test('should make the number positive if the expectancy is surpassed', () => {
    let newDeath = new Mercury(39420,36500);
    newDeath.expectAndSee(newDeath.mercCalc(39420,36500));
    expect(newDeath.expectAndSee()).toEqual(("Well done! You have lived past your expected demise by 34 days on Mercury!"))
  });
});
