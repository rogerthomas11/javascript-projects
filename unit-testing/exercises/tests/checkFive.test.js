const checkFive = require('../checkFive.js');

describe("checkFive", function(){

   test("takes a num and returns num < 5 when num is less than 5", function() {
      let output = checkFive(2);
      expect(output).toEqual("2 is less than 5.")
   });
   test("takes num and returns num > 5 when num is hreater than 5", function() {
    let output = checkFive(6);
    expect(output).toEqual("6 is greater than 5.")
   });
   test("takes num and returns num === 5 when num is equal to 5", function() {
    let output = checkFive(5);
    expect(output).toEqual("5 is equal to 5.")
   });
});