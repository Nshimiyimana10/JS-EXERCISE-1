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
