
//A. Q + A
// How do we assign a value to a variable?
// We use const, let, and if at all not possible, var, to declare the name of the variable and add an equal sign to initialize the variable.
// const newVariable = "";

// How do we change the value of a variable?
//Name the variable and assign a new value. 
//const newVariable = "string";

//What is pseudocoding and why should you do it?
//Writing out what you are going to do before you code. Because the majority of your work is narrating what needs to happen and how you're going to do it, and like 20% is just writing it, maybe even less. It's more important to understand exactly what you're doing so that you can reference that when you get lost in actually writing the code

//What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? 
// 80/20 rule, thinking/coding. Maybe even 90/10. 



//B. Strings
let firstVariable;
firstVariable = "Hello World";
firstVariable = 2; 
secondVariable = firstVariable;
secondVariable = "Any String";
// 2. 

const yourName = "Ashley";
console.log("Hello, my name is " + yourName);

//C. Booleans
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' == 'Name');
  console.log(true >= false);
  console.log(false == false == false == false == false == false > true);
  console.log(false === false);
  console.log(e === 'Kevin');
  console.log(a + b == c);
  console.log(a * a === d);
  console.log(48 == '48');

  //D. The Farm

  const animal = "tree";

  if (animal == "cow") {
  	console.log("Moooo");
  } else {
  	console.log("You're not a cow!");
  }

  //E

  const personsAge = 0;

  if (personsAge < 16)   {
  	console.log("Sorry, you're too young.");
  } else {
  	console.log("Here are your keys!");
  }


//II Loops

//A

for (let i = 0; i <= 10; i++ ) {
	console.log(i);
}

for (let i = 10; i <= 400; i++) {
	console.log(i);
}
for (let i = 12; i <= 4000; i++) {
	if (i % 3 === 0) {
	console.log(i);
	}
}

//B Get Even

for (let i = 0; i <= 100; i++) {
	if (i % 2 === 0) {
		console.log(i + "<-- is an even number");
	} else {
	console.log(i);
	} 
}

//C Give me Five
//I'm super happy I actually got this, and it was pretty easy! All the other stuff makes this seem lame in comparison.

for (let i = 0; i <= 100; i++) {
	if (i % 5 === 0) {
		console.log(" I found a " + i + ", high five!");
	} else if (i % 3 === 0) {
	console.log(" I found a " + i + ". Three is a crowd.");
	} else {
		console.log(i);
	}
}


//D Savings Account

let bank_account = 0;

for (let i = 0; i <= 10; i++) {
	bank_account += i; 
}
console.log("I have " + bank_account + " in my account. That's so sad Alexa play Alexa playing despacito");

//this was something I had forgotten at first. Once I wrote out bank account = bank account + i it came to me.

let bank_account_2 = 0;
//Do you know how many times I've been screwed up by using i over and over again in a homework assignment???
for  (let j = 0; j <= 100; j++) {
	bank_account_2 +=  j * 2;
}
console.log("Well I suppose that's a lot better. I have " + bank_account_2 + " in my account. Alexa play Prince");

// E Multiples of 3 and 5
// I've done it. 

//III. Arrays and control flow
//A.
//1. Elements
//2. Yes
//3. items on a website, prices on a website, lists of things that have properties to them

//B Easy Does it 

const quotes = ['We waste time looking for the perfect lover, instead of creating the perfect love.', 'There is no such thing as a weird human being, Its just that some people require more understanding than others.', 'Dont trust anybody whod rather be grammatically correct than have a good time.'];

//C accessing elements

const randomThings = [1, 10, "hello", true];
//1
console.log(randomThings[0]);
//2
randomThings[2] = "World";
//3 
console.log(randomThings[2]);

//D Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

//1
ourClass[2]; 
//2
ourClass[4] = "Octocat";
//4
ourClass.push("Cloud City");
console.log(ourClass[5]);

//E.Mix it up

//1
const myArray = [5, 10, 500, 20];
myArray.push("Egon", "20");
console.log(myArray[4]);
//2 
myArray.shift();
//3 
myArray.unshift("Bob Marley");
console.log(myArray[0]);
//4 
myArray.splice(4, 5);
console.log(myArray);
//5 Yes this does mututate the array. It takes the elements, reverses them, creating a new array. It does not apply the values to the original array.
myArray.reverse()
console.log(myArray);

//F Biggie Smalls

const number = 105;
if (number < 100) {
	console.log("Little number");
} else {
	console.log("Big number");
}

//G Monkey in the middle
const monkeyNumber = 6;

if (monkeyNumber < 5) {
	console.log("Little number");
} else if (monkeyNumber > 10) {
	console.log("Big Number");
} else {
	console.log("Monkey");
}

//H What's in your closet?
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

//1
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
//2 
kristynsCloset.splice(6, 0, "raybans");
//start at index 6, remove nothing 0, add "raybans"
console.log(kristynsCloset);
//3 
kristynsCloset[6] = "stained knit hat";
console.log(kristynsCloset);
//4, 5, 6, 7
console.log(`Thom is looking fierce in a ${thomsCloset[0][2]}, ${thomsCloset[1][0]} and ${thomsCloset[2][2]}!`);
//8 
thomsCloset[1][2] = "Footie Pajamas";


//IV Functions

//A printGreeting
//done it... 

//B printCool
const printCool = (name) => {
	console.log(`${name} is cool`);
}
printCool('Ashley');

//C calculateCube
//at first I put console log outside the loop, but then I fixed that. 
const calculateCube = (number) => {
	console.log(Math.pow(number, 3));
};
calculateCube(6);


//D isVowel

const isVowel = (character) => {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	if (character == vowels) {
		console.log(character);
		return true;
	} else {
		console.log(false);
		return false;
	}
}
isVowel('t');

//E getTwoLengths

const getTwoLengths = (string1, string2) => {
	thisArray = [];
	thisArray.push(string1.length);
	thisArray.push(string2.length);
	console.log(thisArray);
}
getTwoLengths("Ashley", "Fueger");





