// // // alert("test");
// //
// // //Problem 1.
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


var personalInformation = [
  {name: "Chuck", age: 52},
  {name: "Brian", age: 46},
  {name: "Sally", age: 35},
];

function oldestPerson(array) {
  //need variable to house oldestPerson
  var currentOldAge = 0;
  var index;
  for (var i = 0; i < array.length; i++) {
    if(array[i].age > currentOldAge) {
      //reassing current old age
      currentOldAge = array[i].age;
      ///need to find name of index value with oldest age
      index = i;
    }
  }
  return personalInformation[index].name;
}

function longestWord(string) {
  ///need to take the given string and split it up to words
  stringCopy = string.split(" ");
  //now we have each word in own index of array
  //make variable for longest word length
  var longest = 0;
  var index;
  for (var i = 0; i < stringCopy.length; i++) {
    if (stringCopy[i].length > longest) {
      longest = stringCopy[i].length;
      index = i;
    }
  }
  return stringCopy[index];
}

//Define a function called factorial that takes a random number as an argument
//and then returns the factorial of that given number.

function factorial(randomNum) {
  var start = randomNum -1;
  var total = randomNum;
  for (var i = randomNum; i > 1; i--) {
      total *= start;
      console.log("total " + total);
      console.log("start " + start);
      start--;
      console.log("start -- " + start);
  }
  return total;
},
}


//
// ///loop
// var n= prompt("What number do you want to facatorial?")
//
// function fact(n) {
//   if (n < 2) {
//     return 1;
//   }
//   else {
//     return n * fact(n - 1);
//   }
// }
//
// fact(n);


//
// ///max practice/review -- return the max value from an array
//
// function findMax(array) {
//  //declare new variable to store max, set equal to zero
//  //so first iteration will store
//   var maxNum = array[0];
//   //for loop to iterate through the array to compare value
//   //starting loop at index 0
//   for (var i = 0; i < array.length; i++) {
//     if(array[i] > maxNum){
//       maxNum = array[i];
//     }
//   }
//   return maxNum;
// }
//
// console.log(findMax([33,2,49,9,19]));
//
//
// ///reyna method, starting maxval = first array index for compare
// function max (array) {
//   //using maxval = first index in array,
//   var maxVal = array[0];
//   //starting for loop at 1 because index 0 is already used
//   for (var i = 1; i < array.length; i++) {
//     if (array[i] > maxVal) {
//       maxVal = array[i];
//     }
//   }
//   return maxVal;
// }
//
// console.log(max([5,3,13,55]))
