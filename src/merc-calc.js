import {Input} from "./../src/age-calc.js";

export class Mercury extends Input {
  constructor(age, expectancy) {
    super(age, expectancy)
    const mercYear = 87.97;
    this.newAge = 0;
    this.newExpectancy = 0;

  }
}
