export function Input(inputAge,inputExpectancy) {
    this.inputAge = inputAge;
    this.inputExpectancy = inputExpectancy;
    this.earthYear = 365;
    this.age = 0;
    this.expectancy = 0;
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
    let earthDays = (this.inputAge * this.earthYear);
    return earthDays;
  }


export function Mercury(age,expectancy) {
    const mercYear = 87.97;
    this.newAge = 0;
    this.newExpectancy = 0;
    this.earthDays = age;
    this.earthExpectancy = expectancy;

  }

  Mercury.prototype.mercAge = function() {

  }
