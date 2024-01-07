// Declare and assign the variables below
const shuttleName = "Determination";
let shuttleSpeedMph = 17500;
let kilometersToMars = 225000000;
let kilometersToMoon = 384400;
let milesPerKilometer = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof(shuttleName));
console.log(typeof(shuttleSpeedMph));
console.log(typeof(kilometersToMars));
console.log(typeof(kilometersToMoon));
console.log(typeof(milesPerKilometer));
// Calculate a space mission below
let milesToMars = kilometersToMars * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;
// Print the results of the space mission calculations below
console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.");
// Calculate a trip to the moon below
let milesToMoon = kilometersToMoon * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;
// Print the results of the trip to the moon below
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");