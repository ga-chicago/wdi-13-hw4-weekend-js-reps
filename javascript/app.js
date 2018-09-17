console.log("up and running");
// I.
// Part A.

// 1. We assign value to a variable by declaring and defining a const variable -- const variable = "value", declaring and defining a let variable -- let variable = "value". With let variables, we can redefine and thus reassign the value by saying variable = "new value" 
// 2. We can change the value of a variable through mutation. With let, we can reassign value by saying variable = "new variable"
// 3. const existing = 123
// 		const new = (existing*4). you can also use interpolation. For example:
// 		const existing = "hello"
// 		const new = (`Why, ${existing} there`)
// 4. Declaring a variable doesn't necessarily give value to the variable, you're just saying it exists, i.e. let variable;.
// 		Assigning value is the process of giving the variable a value using = "some value" or someNumber, etc. If we were to say let variable; we can later assign value by saying variable = 1.
// 		Defining a variable is declaring the variable AND assigning value to it.	
// 5. Pseudocoding is writing out, in plain English, what your code should be doing/what you want to be doing. It is extremely helpful for clarifying exactly what you want to do, what needs to be in your code, what your output should look like, etc.  It makes for more efficient, more effective, more accurate, cleaner programming
// 6. You should spend about 75% of your time planning your program and about 25% actually coding your program.

// Part B
// 1.

let firstVariable = "Hello, world";
firstVariable = 75;
let secondVariable = firstVariable;
secondVariable = "My new string!!";

// the value of firstVariable is still 75!
// check to see if true
console.log(firstVariable);
// still 75!

// 2.

const myName = "Andy";
const sayHello = () => {
	console.log(`Hello, my name is ${myName}!`);
}
// test by invoking sayHello
sayHello();

// Part C.

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';
// make it so that all of the following log true in the console
  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  console.log(true !== false);
  console.log(false === false === false === false === false === false > true);
  console.log(false == false)
  console.log(e === 'Kevin');
  console.log(a + b === c);
  console.log(a * a === d);
  console.log(48 == '48');

  // Do all evaluate to true?
  // YES

// Part D.

const animal = "cow";
// test with animal = "chicken"
if(animal === "cow") {
	console.log("MOOOOOOO");
} else {
	console.log("Hey, you're not a cow!!");
};

const driverAge = 17;
// test with age under 16
if(driverAge >= 16) {
	console.log("Here are the keys. Drive safe!");
} else {
	console.log("Sorry, you're too young to drive. Some day, my friend.");
};

// II. Loops
// Part A.
for(let i = 0; i <= 10; i++) {
	console.log(i);
}

for(let i = 10; i <= 400; i++) {
	console.log(i);
}

for(let i = 12; i < 4000; i += 3) {
	console.log(i);
}

// Part B.
// even numbers from 1-100 only. use if i % 2 === 0.
for(let i = 1; i <= 100; i++) {
	if(i % 2 === 0) {
		// console.log(i);
		console.log(`${i}: <-- this is an even number`);
	};
}

// Part C.
// multiples of five for 0-100. print "I found a i. High five!"
for(let i = 0; i <= 100; i++) {
	if(i % 5 === 0) {
		console.log(`I found a ${i}. High five!`);
	}
	// add code for multiples of three with message "I found a i. Three is a crowd"
	else if(i % 3 === 0) {
		console.log(`I found a ${i}. Three is a crowd.`);
	}
}
// Part D.
let bank_account = 0;
for(let i = 1; i <= 10; i++) {
	bank_account += i;
}
// check work ==> 55
console.log(bank_account);

// sum of all numbers 1-100 multiplied by 2 into bank_account
bank_account = 0;
for(let i = 1; i <= 100; i++) {
	bank_account = (bank_account + i*2);
}

// check work ==> 10,100
console.log(bank_account);

// Part E.
// I've already done this problem

// III. Arrays and Control Flow
// Part A.
// 1. Elements
// 2. No
// 3. Contact numbers in your cell phone.

// Part B.
const quotes = ["You can't handle the truth", "You haq me at hello", "Life is like a box of choclates"];

// test
console.log(quotes);

// Part C.
const randomThings = [1, 10, "Hello", true];
// 1. You can access using -->
randomThings[0];
// 2.
randomThings[2] = "World";
// 3.
console.log(randomThings[2]);

// Part D.
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// 1.
ourClass[2];
// 2.
ourClass[ourClass.length - 1] = "Octocat";
// check
console.log(ourClass);
// 3.
ourClass.push("Cloud City");
// check
console.log(ourClass);

// Part E.

const myArray = [5, 10, 500, 20];
// 1.
myArray.push("Egon");
myArray.push("Good dog");

// 2.
myArray.shift();
console.log(myArray);

// 3.
myArray.splice(0, 0, "Bob Marley");
console.log(myArray);

// 4.
myArray.pop();

// 5.
myArray.reverse();
// This did mutate the array, which means to change some property or this array without redefining the variable itself. For example, changing the length of the array, the order of the elements, or changing the elements themselves would all be mutations
// The reverse method returns the reversed array as a result.

// Part F.
// 1.
const integer = 89;
if(integer < 100) {
	console.log("little number");
} else {
	console.log("big number");	
}

const num = 9;
if(num < 5) {
	console.log("little number");
} else if (num > 10) {
	console.log("big number");
} else {
	console.log("monkey");
}


const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

console.log(`Kristyn is rocking that ${kristynsCloset[2]} today`);

kristynsCloset.splice(6, 0, "raybans");

// console.log(kristynsCloset);

kristynsCloset[5] = "stained knit hat";

// console.log(kristynsCloset);
thomsCloset[0][0];
thomsCloset[1][1];
thomsCloset[2][0];

console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][0]}.`);

thomsCloset[1][2] = "footie pajamas";

// IV.
// Part A.
// Already done this problem, Slimer!

// Part B.
const printCool = (name) => {
	console.log(`${name} is cool`);
}

printCool("Andy");

// C.
const calculateCube = (side) => {
	return Math.pow(side, 3);
}

// D.
const isVowel = (character) => {
	if(character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
		return true;
	} else {
		return false;
	}
}

console.log(isVowel("e"))

// E.
const lengthArray = []
const getMultipleLengths = (string1, string2) => {
	lengthArray.push(string1.split("").length);
	lengthArray.push(string2.split("").length);
	return lengthArray;
};

// G.

const printLongestWord = (stringArray) => {
	stringArray.sort();
	return stringArray[0];
}

console.log(printLongestWord(["lllll", "jjjjjjj", "hello hello hello"]));

// I.

const transmogrify = (num1, num2, num3) => {
	return Math.pow((num1 * num2), num3);
}

console.log(transmogrify(5, 3, 2));














