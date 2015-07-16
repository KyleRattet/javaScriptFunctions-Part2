// alert("test");

//Problem 1.

var personalInformation = [
  {name: "Chuck", age: 52},
  {name: "Brian", age: 46},
  {name: "Sally", age: 35},
];

function oldestPerson(array) {
  var ageMax = [];
  var indexValue;
  for (var i = 0; i < array.length ; i++) {
    if(array[i].age > ageMax) {
      ageMax = array[i].age;
      indexValue = i;
      // console.log(indexValue);
    }
  }
  return personalInformation[indexValue].name;

}

console.log(oldestPerson(personalInformation));

//problem 2

function longestWord (str) {
  var individualWordString = str.split(" ");
  var indexValue;
  //console.log(individualWordString);
  var longestString = 0;
  for (var i = 0; i < individualWordString.length; i++) {
    //console.log(individualWordString[i].length);
    if(individualWordString[i].length > longestString) {
      //console.log("test");
      longestString = individualWordString[i].length;
      indexValue = i;

    }
  }
 return individualWordString[indexValue];
}

console.log(longestWord("this is a tegfgfgfgfh"));
