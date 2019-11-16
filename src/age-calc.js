export function Input(inputAge,inputExpectancy) {
    this.inputAge = inputAge;
    this.inputExpectancy = inputExpectancy;
    this.earthYear = 365;
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
    let earthDays = (this.age * this.earthYear);
    let expectDays = (this.expectancy * this.earthYear);
    this.earthDays += earthDays;
    this.expectancyDays += expectDays;
    return earthDays + " " + expectDays;
  }


export function Mercury(age,expectancy) {
    this.mercYear = 87.97;
    this.mercAge = 0;
    this.mercExpectancy = 0;
    this.earthDays = age;
    this.earthExpectancy = expectancy;

  }

  Mercury.prototype.mercCalc = function() {
    let mercDays = parseInt(this.earthDays / this.mercYear);
    let mercExpect = parseInt(this.earthExpectancy / this.mercYear);
    this.mercAge += mercDays;
    this.mercExpectancy += mercExpect;
    return mercDays + " " + mercExpect;
  }

  export function Venus(age,expectancy) {
    this.venusYear = 224.7;
    this.venusAge = 0;
    this.venusExpectancy = 0;
    this.earthDays = age;
    this.earthExpectancy = expectancy;
  }
