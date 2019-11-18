# _Your Age is Out of This World_

#### _Making a galactical age calculator for Epicodus 11/15/2019_

#### By _**Veronica Stanley-Katz**_

## Description

_This program was designed to allow someone to see their age according to other planets solar cycle._

|Specs|Input|Output|
|-|-|-|
|The program should take in a persons Earth age and make it a number. |"26"|26|
|The program should take in a persons life expectancy. |"100"|100|
|The Program should convert their age into the number of days lived in Earth solar years.|26|(26*365) = 9490|
|The Program should convert their life expectancy into days in Earth solar years.|100|(100*365) = 36500|
|The program should calculate their age into Mercury solar years.| 9490|(9490/87.97) = 107.88|
|The program should calculate their life expectancy into Mercury solar years.| 36500|(36500/87.97) = 414.91|
|The program should calculate their age into Venus solar years.| 9490|(9490/224.7) = 42.23|
|The program should calculate their life expectancy into Venus solar years.| 36500|(36500/224.7) = 162.44|
|The program should calculate their age into Mars solar years.| 9490|(9490/1.88) = 5047.87|
|The program should calculate their life expectancy into Mars solar years.| 36500|(36500/1.88) = 19414.89|
|The program should calculate their age into Jupiter solar years.| 9490|(9490/11.86) = 800.17|
|The program should calculate their life expectancy into Jupiter solar years.| 36500|(36500/11.86) = 3077.57|
|The program should calculate their days left to live on Earth.|(36500-9490)|27010|
|The program should calculate their days left to live on Mercury.|(414.91-107.88)|307.03|
|The program should calculate their days left to live on Venus.|(162.44-42.23)|120.21|
|The program should calculate their days left to live on Mars.|(19414.89-5047.87)|14367.02|
|The program should calculate their days left to live on Jupiter.|(3077.57-800.17)|2277.4|
|If the life expectancy is negative the program should convert the result into positive and display the number of years lived passed their expected demise.|Age:108, Expectancy: 100, (100-108)=-8|"8 years longer than expected"|
|If the age and expectancy are the same number the program should let the user know they don't have much time left.|Age:100, Expectancy:100|"Uh Oh, best be careful on all planets because you're expected to die this year!"|

## Setup-Installation Requirements

* _https://github.com/vstankatz/Your-Age-is-Out-of-This-World_
* _Clone the GitHub repository._
* _Make sure Node.js is installed on your device._
* _Run NPM install to load the necessary packages._
* _Run NPM run build to make sure program are properly installed._
* _Run NPM test to verify all function work properly._
* _Review JavaScript of the two function options created._


## Known Bugs
* _No user interface currently in place, which leaves 6 errors when "npm run build" is run due to the "no-unsed-vars" rule._

## Technologies Suggested
* _HTML_
* _CSS_
* _JavaScript_
* _Markup_
* _Node.js LTS 12.13.0_
* _Jquery-3.4.1_
* _Bootstrap 4.3.1_
* _Webpack 4.39.3_
  * _Webpack-cli 3.3.8_
  * _Webpack dev server 3.8.0_
  * _Uglify Plugin 2.2.0_
  * _Clean Webpack Plugin 3.0.0_
  * _HTML Webpack Plugin 3.2.0_
  * _Babel Core plugin 7.6.4_
    * _Babel Transform Modules 7.6.0_
    * _Popper 1.15.0_
  * _EsLint 6.3.0_
    * _EsLint Loader 3.0.0_
  * _Jest 24.9.0_
  * _Style Loader 1.0.0_
  * _CSS Loader 3.2.0_


## License

Copyright (c) 2019 **_Veronica Stanley-Katz_**

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
