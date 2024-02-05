function randomFromArray(arr){
  let randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex];
}

//TODO: Export the randomFromArray function.
module.exports = randomFromArray;