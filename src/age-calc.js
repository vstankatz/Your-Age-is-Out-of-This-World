export class Input {
  constructor(inputAge,inputExpectancy) {
    this.inputAge = inputAge;
    this.inputExpectancy = inputExpectancy;
    this.age = 0;
    this.expectancy = 0;
  }
  convertToNum() {
    if ((isNaN(this.inputAge)) || (isNaN(this.inputExpectancy)))  {
      return "enter a number."
    }
    // let age = parseInt(this.inputAge);
    // let expectancy = parseInt(this.inputExpectancy);
    // expect(newNum.convertToNum()).toEqual("You are 26 years old and should live to be 100 years old.");
  }
}
