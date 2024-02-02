// Code your orbitCircumference function here:
function orbitCircumference(radius) {
  return Math.round(2 * Math.PI * radius);
}

// Code your missionDuration function here:
function missionDuration(numOrbits, orbRad = 2000, speed = 28000) {
  let time = (numOrbits * orbitCircumference(orbRad)) / speed;
  return Math.round(time * 100)/100;
}
// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr) {
  let i = Math.floor(Math.random() * arr.length);
  return arr[i];
}

// Code your oxygenExpended function here:
function oxygenExpended(astronaut, orbRad, speed) {
  let duration = missionDuration(3, orbRad, speed);
  let oxUsed = Math.round(astronaut.o2Used(duration) * 1000/1000);
  return `${astronaut.name} will perform the spacewalk, which will last ${missionDuration} hours and require ${astronaut.o2Used} kg of oxygen.`;
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 