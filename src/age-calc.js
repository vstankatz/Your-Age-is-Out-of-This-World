//This was my Second Method for completin the project but I think this is more what you wanted since the prompt said  "create a class that can..." so it's all just one class. My initial idea was to make multiple classes that extended off of an Input class but I was unable to test it using "extends" or "supers". I then built the program using standard constructor functions which you can see in the First Method on line 114.

export class Input2 {
  constructor(inputAge,inputExpectancy) {
    this.inputAge = inputAge;
    this.inputExpectancy = inputExpectancy;
    this.earthYear = 365;  // Attempted to make this a const but kept getting errors when testing and coming up undefined//
    this.mercYear = 87.97;  // Attempted to make this a const but kept getting errors when testing and coming up undefined//
    this.venusYear = 224.7;  // Attempted to make this a const but kept getting errors when testing and coming up undefined//
    this.marsYear = 1.88;  // Attempted to make this a const but kept getting errors when testing and coming up undefined//
    this.jupiterYear = 11.86;  // Attempted to make this a const but kept getting errors when testing and coming up undefined//
    this.age = 0;
    this.ageDays = 0;
    this.expectancy = 0;
    this.expectancyDays = 0;
    this.earthTime = 0;
    this.mercAge = 0;
    this.mercExpectancy = 0;
    this.mercTime = 0;
    this.venusAge = 0;
    this.venusExpectancy = 0;
    this.venusTime = 0;
    this.marsAge = 0;
    this.marsExpectancy = 0;
    this.marsTime = 0;
    this.jupiterAge = 0;
    this.jupiterExpectancy = 0;
    this.jupiterTime = 0;

  }

  convertToNum() {
    if ((isNaN(this.inputAge)) || (isNaN(this.inputExpectancy)))  {
      return "enter a number."
    } else if ((typeof this.inputAge === 'string') || (typeof this.inputExpectancy === 'string')) {
      let age = parseInt(this.inputAge);
      let expectancy = parseInt(this.inputExpectancy);
      this.age += age;
      this.expectancy += expectancy;
      return this.age + " " + this.expectancy;
    } else {
      this.age += this.inputAge;
      this.expectancy += this.inputExpectancy;
      return this.age + " " + this.expectancy;
    }

  }

  toDays() {
    let earthDays = (this.age * this.earthYear);
    let expectDays = (this.expectancy * this.earthYear);
    this.ageDays += earthDays;
    this.expectancyDays += expectDays;
    return `You are ${earthDays} days old on Earth and you are expected to live to ${expectDays} days old here.`;
  }

  mercCalc() {

    let mercDays = parseInt(this.ageDays / this.mercYear);
    let mercExpect = parseInt(this.expectancyDays / this.mercYear);
    this.mercAge += mercDays;
    this.mercExpectancy += mercExpect;
    return `You are ${mercDays} days old on Mercury and you are expected to live to ${mercExpect} days old there.`;
  }

  venusCalc() {
    let venusDays = parseInt(this.ageDays / this.venusYear);
    let venusExpect = parseInt(this.expectancyDays / this.venusYear);
    this.venusAge += venusDays;
    this.venusExpectancy += venusExpect;
    return `You are ${venusDays} days old on Venus and you are expected to live to ${venusExpect} days old there.`;
  }

  marsCalc() {
    let marsDays = parseInt(this.ageDays / this.marsYear);
    let marsExpect = parseInt(this.expectancyDays / this.marsYear);
    this.marsAge += marsDays;
    this.marsExpectancy += marsExpect;
    return `You are ${marsDays} days old on Mars and you are expected to live to ${marsExpect} days old there.`;
  }

  jupiterCalc() {
    let jupiterDays = parseInt(this.ageDays / this.jupiterYear);
    let jupiterExpect = parseInt(this.expectancyDays / this.jupiterYear);
    this.jupiterAge += jupiterDays;
    this.jupiterExpectancy += jupiterExpect;
    return `You are ${jupiterDays} days old on Jupiter and you are expected to live to ${jupiterExpect} days old there.`;
  }


  expectAndSee() {
    this.earthTime = (this.expectancyDays - this.ageDays);
    this.mercTime = (this.mercExpectancy - this.mercAge);
    this.venusTime = (this.venusExpectancy - this.venusAge);
    this.marsTime = (this.marsExpectancy - this.marsAge);
    this.jupiterTime = (this.jupiterExpectancy - this.jupiterAge);
    if ((this.expectancyDays - this.ageDays) > 0){
      return `You have this many days to live on each planet-- Earth: ${this.earthTime}, Mercury: ${this.mercTime}, Venus: ${this.venusTime}, Mars: ${this.marsTime}, Jupiter: ${this.jupiterTime}.`
    } else if ((this.expectancyDays - this.ageDays) < 0){
        this.earthTime = Math.abs(this.earthTime);
        this.mercTime = Math.abs(this.mercTime);
        this.venusTime = Math.abs(this.venusTime);
        this.marsTime = Math.abs(this.marsTime);
        this.jupiterTime = Math.abs(this.jupiterTime);
        return `Well done! You've lived past your expected demise! Here's how many days you've been cheating the grim reaper on each planet-- Earth: ${this.earthTime}, Mercury: ${this.mercTime}, Venus: ${this.venusTime}, Mars: ${this.marsTime}, Jupiter: ${this.jupiterTime}.`
    } else {
      return `Uh Oh, best be careful on all planets because you're expected to die this year!`
    }
  }


}



// Below was my first successful method for completing the project after I couldn't get Class functions to work with an "extends" and "super" in Jest testing.


export function Input(inputAge,inputExpectancy) {
    this.inputAge = inputAge;
    this.inputExpectancy = inputExpectancy;
    this.age = 0;
    this.ageDays = 0;
    this.expectancy = 0;
    this.expectancyDays = 0;
  }

  Input.prototype.convertToNum = function() {
    if ((isNaN(this.inputAge)) || (isNaN(this.inputExpectancy)))  {
      return "enter a number."
    } else if ((typeof this.inputAge === 'string') || (typeof this.inputExpectancy === 'string')) {
      let age = parseInt(this.inputAge);
      let expectancy = parseInt(this.inputExpectancy);
      this.age += age;
      this.expectancy += expectancy;
      return this.age + " " + this.expectancy;
    } else {
      this.age += this.inputAge;
      this.expectancy += this.inputExpectancy;
      return this.age + " " + this.expectancy;
    }

  }

  Input.prototype.toDays = function() {
    const earthYear = 365;
    let earthDays = (this.age * earthYear);
    let expectDays = (this.expectancy * earthYear);
    this.earthDays += earthDays;
    this.expectancyDays += expectDays;
    return "You are " + earthDays + " days old on Earth with a life expectancy of " + expectDays + " days here!";
  }


export function Mercury(age,expectancy) {
    this.mercAge = 0;
    this.mercExpectancy = 0;
    this.earthDays = age;
    this.earthExpectancy = expectancy;
    this.mercTime = 0;

  }

  Mercury.prototype.mercCalc = function() {
    const mercYear = 87.97;
    let mercDays = parseInt(this.earthDays / mercYear);
    let mercExpect = parseInt(this.earthExpectancy / mercYear);
    this.mercAge += mercDays;
    this.mercExpectancy += mercExpect;
    return "You are " + mercDays + " days old on Mercury with a life expectancy of " + mercExpect + " days here!";

  }

  Mercury.prototype.expectAndSee = function() {
    this.mercTime = (this.mercExpectancy - this.mercAge);
    if((this.mercExpectancy - this.mercAge) > 0) {
      return "You have " + this.mercTime + " days left to live on Mercury.";
    } else if ((this.mercExpectancy - this.mercAge) < 0) {
      this.mercTime = Math.abs(this.mercTime);
      return "Well done! You have lived past your expected demise by " + this.mercTime + " days on Mercury!"
    } else {
      return `Uh Oh, best be careful on all planets because you're expected to die this year!`
    }
  }


  export function Venus(age,expectancy) {
    this.venusAge = 0;
    this.venusExpectancy = 0;
    this.earthDays = age;
    this.earthExpectancy = expectancy;
  }

  Venus.prototype.venusCalc = function() {
    const venusYear = 224.7;
    let venusDays = parseInt(this.earthDays / venusYear);
    let venusExpect = parseInt(this.earthExpectancy / venusYear);
    this.venusAge += venusDays;
    this.venusExpectancy += venusExpect;
    return "You are " + venusDays + " days old on Venus with a life expectancy of " + venusExpect + " days here!";
  }

  Venus.prototype.expectAndSee = function() {
    this.venusTime = (this.venusExpectancy - this.venusAge);
    if((this.venusExpectancy - this.venusAge) > 0) {
      return "You have " + this.venusTime + " days left to live on Venus.";
    } else if ((this.venusExpectancy - this.venusAge) < 0) {
      this.venusTime = Math.abs(this.venusTime);
      return "Well done! You have lived past your expected demise by " + this.venusTime + " days on Venus!"
    } else {
      return `Uh Oh, best be careful on all planets because you're expected to die this year!`
    }
  }

  export function Mars(age,expectancy) {
    this.marsAge = 0;
    this.marsExpectancy = 0;
    this.earthDays = age;
    this.earthExpectancy = expectancy;
  }

  Mars.prototype.marsCalc = function() {
    const marsYear = 1.88;
    let marsDays = parseInt(this.earthDays / marsYear);
    let marsExpect = parseInt(this.earthExpectancy / marsYear);
    this.marsAge += marsDays;
    this.marsExpectancy += marsExpect;
    return "You are " + marsDays + " days old on Mars with a life expectancy of " + marsExpect + " days here!";
  }

  Mars.prototype.expectAndSee = function() {
    this.marsTime = (this.marsExpectancy - this.marsAge);
    if((this.marsExpectancy - this.marsAge) > 0) {
      return "You have " + this.marsTime + " days left to live on Mars.";
    } else if ((this.marsExpectancy - this.marsAge) < 0) {
      this.marsTime = Math.abs(this.marsTime);
      return "Well done! You have lived past your expected demise by " + this.marsTime + " days on Mars!"
    } else {
      return `Uh Oh, best be careful on all planets because you're expected to die this year!`
    }
  }

  export function Jupiter(age,expectancy) {
    this.jupiterAge = 0;
    this.jupiterExpectancy = 0;
    this.earthDays = age;
    this.earthExpectancy = expectancy;
  }

  Jupiter.prototype.jupiterCalc = function() {
    const jupiterYear = 11.86;
    let jupiterDays = parseInt(this.earthDays / jupiterYear);
    let jupiterExpect = parseInt(this.earthExpectancy / jupiterYear);
    this.jupiterAge += jupiterDays;
    this.jupiterExpectancy += jupiterExpect;
    return "You are " + jupiterDays + " days old on Jupiter with a life expectancy of " + jupiterExpect + " days here!";
  }

  Jupiter.prototype.expectAndSee = function() {
    this.jupiterTime = (this.jupiterExpectancy - this.jupiterAge);
    if((this.jupiterExpectancy - this.jupiterAge) > 0) {
      return "You have " + this.jupiterTime + " days left to live on Jupiter.";
    } else if ((this.jupiterExpectancy - this.jupiterAge) < 0) {
      this.jupiterTime = Math.abs(this.jupiterTime);
      return "Well done! You have lived past your expected demise by " + this.jupiterTime + " days on Jupiter!"
    } else {
      return `Uh Oh, best be careful on all planets because you're expected to die this year!`
    }
  }
