export class Input {
  constructor(inputAge,inputExpectancy) {
    this.inputAge = inputAge;
    this.inputExpectancy = inputExpectancy;
    this.earthYear = 365;
    this.mercYear = 87.97;
    this.venusYear = 224.7;
    this.marsYear = 1.88;
    this.jupiterYear = 11.86;
    this.age = 0;
    this.ageDays = 0;
    this.expectancy = 0;
    this.expectancyDays = 0;
    this.mercAge = 0;
    this.mercExpectancy = 0;
    this.venusAge = 0;
    this.venusExpectancy = 0;
    this.marsAge = 0;
    this.marsExpectancy = 0;
    this.jupiterAge = 0;
    this.jupiterExpectancy = 0;

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
    return earthDays + " " + expectDays;
  }

  mercCalc() {

    let mercDays = parseInt(this.ageDays / this.mercYear);
    let mercExpect = parseInt(this.expectancyDays / this.mercYear);
    this.mercAge += mercDays;
    this.mercExpectancy += mercExpect;
    return mercDays + " " + mercExpect;
  }

  venusCalc() {
    let venusDays = parseInt(this.ageDays / this.venusYear);
    let venusExpect = parseInt(this.expectancyDays / this.venusYear);
    this.venusAge += venusDays;
    this.venusExpectancy += venusExpect;
    return venusDays + " " + venusExpect;
  }

  marsCalc() {
    let marsDays = parseInt(this.ageDays / this.marsYear);
    let marsExpect = parseInt(this.expectancyDays / this.marsYear);
    this.marsAge += marsDays;
    this.marsExpectancy += marsExpect;
    return marsDays + " " + marsExpect;
  }

  jupiterCalc() {
    let jupiterDays = parseInt(this.ageDays / this.jupiterYear);
    let jupiterExpect = parseInt(this.expectancyDays / this.jupiterYear);
    this.jupiterAge += jupiterDays;
    this.jupiterExpectancy += jupiterExpect;
    return jupiterDays + " " + jupiterExpect;
  }
}






// export function Input(inputAge,inputExpectancy) {
//     this.inputAge = inputAge;
//     this.inputExpectancy = inputExpectancy;
//     this.earthYear = 365;
//     this.age = 0;
//     this.ageDays = 0;
//     this.expectancy = 0;
//     this.expectancyDays = 0;
//   }
//
//   Input.prototype.convertToNum = function() {
//     if ((isNaN(this.inputAge)) || (isNaN(this.inputExpectancy)))  {
//       return "enter a number."
//     } else if ((typeof this.inputAge === 'string') || (typeof this.inputExpectancy === 'string')) {
//       let age = parseInt(this.inputAge);
//       let expectancy = parseInt(this.inputExpectancy);
//       this.age += age;
//       this.expectancy += expectancy;
//       return this.age + " " + this.expectancy;
//     } else {
//       this.age += this.inputAge;
//       this.expectancy += this.inputExpectancy;
//       return this.age + " " + this.expectancy;
//     }
//
//   }
//
//   Input.prototype.toDays = function() {
//     let earthDays = (this.age * this.earthYear);
//     let expectDays = (this.expectancy * this.earthYear);
//     this.earthDays += earthDays;
//     this.expectancyDays += expectDays;
//     return earthDays + " " + expectDays;
//   }
//
//
// export function Mercury(age,expectancy) {
//     this.mercYear = 87.97;
//     this.mercAge = 0;
//     this.mercExpectancy = 0;
//     this.earthDays = age;
//     this.earthExpectancy = expectancy;
//
//   }
//
//   Mercury.prototype.mercCalc = function() {
//     let mercDays = parseInt(this.earthDays / this.mercYear);
//     let mercExpect = parseInt(this.earthExpectancy / this.mercYear);
//     this.mercAge += mercDays;
//     this.mercExpectancy += mercExpect;
//     return mercDays + " " + mercExpect;
//   }
//
//
//   export function Venus(age,expectancy) {
//     this.venusYear = 224.7;
//     this.venusAge = 0;
//     this.venusExpectancy = 0;
//     this.earthDays = age;
//     this.earthExpectancy = expectancy;
//   }
//
//   Venus.prototype.venusCalc = function() {
//     let venusDays = parseInt(this.earthDays / this.venusYear);
//     let venusExpect = parseInt(this.earthExpectancy / this.venusYear);
//     this.venusAge += venusDays;
//     this.venusExpectancy += venusExpect;
//     return venusDays + " " + venusExpect;
//   }
//
//   export function Mars(age,expectancy) {
//     this.marsYear = 1.88;
//     this.marsAge = 0;
//     this.marsExpectancy = 0;
//     this.earthDays = age;
//     this.earthExpectancy = expectancy;
//   }
//
//   Mars.prototype.marsCalc = function() {
//     let marsDays = parseInt(this.earthDays / this.marsYear);
//     let marsExpect = parseInt(this.earthExpectancy / this.marsYear);
//     this.marsAge += marsDays;
//     this.marsExpectancy += marsExpect;
//     return marsDays + " " + marsExpect;
//   }
//
//   export function Jupiter(age,expectancy) {
//     this.jupiterYear = 11.86;
//     this.jupiterAge = 0;
//     this.jupiterExpectancy = 0;
//     this.earthDays = age;
//     this.earthExpectancy = expectancy;
//   }
//
//   Jupiter.prototype.jupiterCalc = function() {
//     let jupiterDays = parseInt(this.earthDays / this.jupiterYear);
//     let jupiterExpect = parseInt(this.earthExpectancy / this.jupiterYear);
//     this.jupiterAge += jupiterDays;
//     this.jupiterExpectancy += jupiterExpect;
//     return jupiterDays + " " + jupiterExpect;
//   }
