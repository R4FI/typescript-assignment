"use strict";
// take two parameter string and number
// by default the number is 3 which is mentioned
function twoParameters(str, num = 3) {
    for (let i = 0; i < num; i++) {
        console.log(str);
    }
}
//  testcase
twoParameters("Hello World");
//   the output should print hellow world 3 times
// change the number into 10
//   twoParameters("Hello World",10);
