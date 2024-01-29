function decreasingSum(integer) {
   if (integer === 1){
      return integer;
   } else {
      decreasingSum();
   }
}

console.log(decreasingSum(5));
