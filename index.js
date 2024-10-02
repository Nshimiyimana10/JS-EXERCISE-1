//Exercise 1
let num1 = 8;
let num2 = 5;

//addition
let addition = num1 + num2;

//substraction
let substraction = num1 - num2;

//multiplication
let multiplication = num1 * num2;

//division
let division = num1 / num2;

//result in console

console.log(addition);
console.log(substraction);
console.log(multiplication);
console.log(Math.floor(division));
console.log(Math.ceil(division));

//Exercise 2

let greetings = "Good morning";
let name = "Jean Claude";

let greetingMessage = greetings + "," + " " + name + "!";

document.write(greetingMessage);

//Exercise 3

document.getElementById("color-btn").addEventListener("click", () => {
  alert("My favorite color is black");
});

//Exercise 4

let myNumber = 5;
let showDouble = myNumber * 2;
let showTriple = myNumber * 3;
let showHalf = myNumber / 2;

//doubled-number
document.getElementById("show-double").addEventListener("click", () => {
  console.log(showDouble);
});

//tripled-number

document.getElementById("show-triple").addEventListener("click", () => {
  console.log(showTriple);
});

//half-number

document.getElementById("show-half").addEventListener("click", () => {
  console.log(Math.ceil(showHalf));
});

//Exercise 5
let count = 0;

document.getElementById("count-clicks").addEventListener("click", () => {
  count += 1;
  console.log("clicked" + " " + count);
});

//CODE-WARS CHALLENGES

/*It's pretty straightforward. Your goal is to create a function 
that removes the first and last characters of a string. 
You're given one parameter, the original string. 
You don't have to worry about strings with less than two characters*/

//Solution

let string = "nshimiyimana";

function removeChar(){
 let firstLastChar = string.slice(1, -1)
 console.log(firstLastChar);
}

removeChar();

/*Q2You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20 */
var array =[1, -4, 7, 12];

//SOLUTION

 function positiveSum(){
  let positiveNums = array.filter((num) =>
    num >=0
  )
 
  let sum = positiveNums.reduce((accumulator, currentValue)=>
     accumulator + currentValue,0)
 console.log(sum);
}

 positiveSum();

 /*Q3 Given a random non-negative number, 
 you have to return the digits of this number
  within an array in reverse order.*/

  //SOLUTION

  function reversedNum(){

    let number = 5326;
    let number2 = number.toString().
    split("").reverse().map(Number);

    console.log(number2);
  }

  reversedNum();
  function removeDuplicate(){
    let thisArray = [1, 2, 1, 3, 2,4];
    let unDuplicate = new Set(thisArray);
    let array2 = [...unDuplicate];
    console.log(unDuplicate);

    return array2;
  }
 
  console.log(removeDuplicate());

  function checkDuplicate(){
    let myStr =["a", "b", "a","b", "a"]
    let sortedArray = myStr.sort();
    console.log(sortedArray.length)
    if(sortedArray[0] ===sortedArray[1]=== sortedArray[2]||sortedArray[3]=== sortedArray[4]){
      return true;
    }

    else{
    return false;
    }
  }

  
  console.log(checkDuplicate());
  