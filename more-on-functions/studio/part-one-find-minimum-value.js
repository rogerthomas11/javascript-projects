//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

function smallestValue(arr) {
    let minNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i];
        }
    }
    return minNum;
}
//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

function sortArr(arr) {
    let sortedArr = [];
    let i = 0;
    while (i < arr.length) {
        let min = smallestValue(arr);
        sortedArr.push(smallestValue(arr));
        arr.splice(arr.indexOf(min), 1);
    }
    return sortedArr;
}

console.log(smallestValue(nums2));
console.log(sortArr(nums1));
console.log(sortArr(nums2));
console.log(sortArr(nums3));
