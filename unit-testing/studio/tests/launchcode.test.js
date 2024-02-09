
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("value of organization inside of launchcode returns 'nonprofit'", function(){
    let output = launchcode.organization;
    expect(output).toBe('nonprofit');
  })
  test("value of executiveDirector inside of launchcode returns 'Jeff'", function(){
    let output = launchcode.executiveDirector;
    expect(output).toBe('Jeff');
  })
  test("value of percentageCoolEmployees inside of launchcode returns 100", function(){
    let output = launchcode.percentageCoolEmployees;
    expect(output).toBe(100);
  })
  test("value of programsOffered inside of launchcode returns 'Web Development', 'Data Analysis', 'Liftoff'", function(){
    let output = launchcode.programsOffered;
    expect(output[0]).toBe("Web Development");
    expect(output[1]).toBe("Data Analysis");
    expect(output[2]).toBe("Liftoff");
    expect(output.length).toEqual(3);
  })
  test("If the number entered in launchOutput() is divisible by 2 returns 'Launch!", function(){
    let output = launchcode.launchOutput(2);
    expect(output).toBe(2);
  })
});