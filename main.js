// // alert("test");
//
// //Problem 1.
//
// var personalInformation = [
//   {name: "Chuck", age: 52},
//   {name: "Brian", age: 46},
//   {name: "Sally", age: 35},
// ];
//
// function oldestPerson(array) {
//   var ageMax = [];
//   var indexValue;
//   for (var i = 0; i < array.length ; i++) {
//     if(array[i].age > ageMax) {
//       ageMax = array[i].age;
//       indexValue = i;
//       // console.log(indexValue);
//     }
//   }
//   return personalInformation[indexValue].name;
//
// }
//
// console.log(oldestPerson(personalInformation));
//
// //problem 2
//
// function longestWord (str) {
//   var individualWordString = str.split(" ");
//   var indexValue;
//   //console.log(individualWordString);
//   var longestString = 0;
//   for (var i = 0; i < individualWordString.length; i++) {
//     //console.log(individualWordString[i].length);
//     if(individualWordString[i].length > longestString) {
//       //console.log("test");
//       longestString = individualWordString[i].length;
//       indexValue = i;
//
//     }
//   }
//  return individualWordString[indexValue];
// }
//
// console.log(longestWord("this is a tegfgfgfgfh"));
//



///max practice/review -- return the max value from an array

function findMax(array) {
 //declare new variable to store max, set equal to zero
 //so first iteration will store
  var maxNum = array[0];
  //for loop to iterate through the array to compare value
  //starting loop at index 0
  for (var i = 0; i < array.length; i++) {
    if(array[i] > maxNum){
      maxNum = array[i];
    }
  }
  return maxNum;
}

console.log(findMax([33,2,49,9,19]));


///reyna method, starting maxval = first array index for compare
function max (array) {
  //using maxval = first index in array,
  var maxVal = array[0];
  //starting for loop at 1 because index 0 is already used
  for (var i = 1; i < array.length; i++) {
    if (array[i] > maxVal) {
      maxVal = array[i];
    }
  }
  return maxVal;
}

console.log(max([5,3,13,55]))
