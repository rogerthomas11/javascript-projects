let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};

superChimpOne["astronautID"] = 1;
salamander["astronautID"] = 2;
superChimpTwo["astronautID"] = 3;
beagle["astronautID"] = 4;
tardigrade["astronautID"] = 5;

superChimpOne["move"] = function() {return Math.floor(Math.random() * 11)};
salamander["move"] = function() {return Math.floor(Math.random() * 11)};
superChimpTwo["move"] = function() {return Math.floor(Math.random() * 11)};
beagle["move"] = function() {return Math.floor(Math.random() * 11)};
tardigrade["move"] = function() {return Math.floor(Math.random() * 11)};

// console.log(superChimpOne);
// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, superChimpTwo, beagle, tardigrade];
// Print out the relevant information about each animal.
function crewReports(obj) {
   return `${obj["name"]} is a ${obj["species"]}. They are ${obj["age"]} years old and ${obj["mass"]} kilograms. Their ID is ${obj["astronautID"]}.`
}
// console.log(crewReports(salamander));
// Start an animal race!
function fitnessTest(arr) {
  let raceFinish = [], numSteps, turns;
  for (let i = 0; i < arr.length; i++) {
   numSteps = 0;
   turns = 0;
   while (numSteps < 20) {
      numSteps += arr[i].move();
      turns++;
   }
   raceFinish.push(`${arr[i].name} took ${turns} turns to take 20 steps.`);
  }
   return raceFinish;
}

console.log(fitnessTest(crew));