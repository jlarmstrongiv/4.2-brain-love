(function () {
  'use strict';
  function interpreter (input) {
    let validInput = validate(input);
    let output = [0];
    let pointer = 0;
    for (let i = 0; i < validInput.length; i++) {
      let currentChar = validInput.charAt(i);
      console.log(currentChar);
      console.log(output[pointer]);
      switch (currentChar) {
        case '+':
          output[pointer]++;
          break;
        case '-':
          output[pointer]--;
          break;
        case '.':
          console.log(pointer);
          break;
        case '>':
          if (pointer === output.length) {
            console.log('push');
            output.push(0);
            pointer++;
          } else {
            pointer++;
          }
          break;
        case '<':
          if (pointer === 0) {
            console.log('no negatives');
          } else {
            pointer--;
          }
          break;
        default:
          console.log('error');
      }
    }
    return output;
  }

  // function () {
  //   if (output.length < pointer) {
  //
  //   }
  // }
  function log (value) {
    console.log(pointer);
  }
  // let arrayLength = arrayCounter(validinput);

  function validate (input) {
    //Validate String
    return input;
  }
  console.log('hi');
  console.log(interpreter('++--'));
  console.log(interpreter('++>--'));
})();
