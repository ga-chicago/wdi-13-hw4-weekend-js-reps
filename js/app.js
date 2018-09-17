// console.log('Homework!!')

// Q & A

// 1. We assign a variable by declaring it within the js document.
// 	  You can declare a variable with var, let, or const. Each one 
// 	  has its uses except var... never use var... you can also declare
//	  the variable without any of these, but that's like declaring it
//	  var. Don't do it.

// 2. If you declare your variable with let, you can redeclare it later
//	  in your code to have another value by simply rewriting it or by
//	  manipulating the data within it using various means. If
//	  you declare it with const, you can only update the value by
//	  manipulating the data inside of it. It cannot be redeclared

// 3. You can say "const newVariable = existingVariable" or use let.

// 4. to declare a variable is to state it within your code (i.e let variable)
//	  assiging a variable is giving another variable the value of one that has
//	  already been defined. Defining a variable is giving a variable a value.

// 5. Psuedocodeing is writing out in plain english what you are trying to 
//	  make happen to plan out a way to tackle the thing you are trying
//	  to make the code do. It's like writing an outline before you write
//	  a book.

// 6. 75% to 90% of your time should be spent planning how to do something
//	  10% to 25% should be spent typing code.

//	Strings

let firstVariable = "Hello World";

firstVariable = 34874;

let secondVariable = firstVariable;

secondVariable = 'This is really fun...'

//	secondVariable will console.log the last thing that was done to it. So, it will print out 'This is really fun...'

const yourName = 'Chris';

console.log('Hello, my name is ' + yourName);

// Booleans

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  console.log(true !== false);
  console.log(false + false + false + false + false + false !== true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a + b === c);
  console.log(a * a === d);
  console.log(48 == '48');

  // The Farm

  const animal = 'dog';

  if(animal === 'cow'){
  	console.log('Moooo')
  } else {
  	console.log("Hey! You're not a cow!");
  }

// Driver's Ed

const driversAge = 22;

if (driversAge >= 16){
	console.log('Here are the keys!');
} else {
	console.log("Sorry, you're too young");
}

//	Loops

// A. The basics

for(let i = 0; i <= 10; i++) {
	console.log(i);
}

for(let i = 10; i <= 400; i++){
	console.log(i);
}

for(let i = 12; i <= 4000; i++){
	if(i % 3 === 0) {
		console.log(i);
	}
}

// Get Even

for(let i = 1; i <= 100; i++){
	if(i % 2 === 0){
		console.log(i + " <-- in an even number");
	}
}

// Give Me Five

// 1.
for(let i = 0; i <= 100; i++){
	if(i % 5 === 0) {
		console.log("I found a " + i + ". High five!");
	} if(i % 3 === 0){
		console.log("I found a " + i + ". Three is a crowd");
	}
}

// Savings Account

// let bankAccount = 0;

// for(let i = 1; i <= 10; i++){
// 	bankAccount += i;
// }
// console.log(bankAccount)

let bankAccount = 0;

for(let i = 1; i <= 100; i++){
	bankAccount += i * 2;
}
console.log(bankAccount)

// Multiples of 3 and 5

// Well played. I read the problem, all the way through. Glad I don't have to do it again :)

// Array and Control Flow

// A. Talk about it

// 1. Array Objects

// 2. As long as you don't mutate the aray with functions
//	  the objects within the array will remain in the 
//	  order that you put them in.

// 3. You can model a grocery list or any other list
//	  that you'd like.

//	B. Easy Does It

const quotes = ["We are going to need a bigger boat", "Do or do not. There is no try.", "GET TO THE CHOPPA!", 
"I'm gettin' too old for this shit", "Yippee ki-yay, mother fucker!"];

// C. Accessing Elements

const randomThings = [1, 10, "Hello", true];

// 1. You would access the first element using randomThings[0];

// 2. randomThings[2] = "World"

// 3. It worked :)
	  // console.log(randomThings[2]);

// D. Change Values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// 1. ourClass[2]; 

// 2. ourClass[4] = "Octocat"

// 3. ourClass.push("Cloud City")

// E. Mix it up

const myArray = [5, 10, 500, 20]

// 1. 
	myArray.push('Egon', 'Venkman');

// 2. 
	myArray.splice(0, 1);

// 3. 
	myArray.unshift("Bob Marley");

// 4. 
	myArray.splice(4, 1)

// 5.
	myArray.reverse()
	// The array was mutated the data came back as expected, but it was mutated. Mutating the data is changing it from what 
	// it was originally defined as. The prototype thing didn't, but the
	// way that I wrote it did.

console.log(myArray);

// F. Biggie Smalls

const specificNumber = 7

// 1.
if(specificNumber < 5) {
	console.log("Little number...");
// 2.
} else if (specificNumber > 10) {
	console.log("Big number!")
}

// G. Monkey in the Middle

if(specificNumber < 5) {
	console.log("Little number...")
} else if(specificNumber > 10) {
	console.log("Big number!");
} else {
	console.log("Monkey...")
}

// What is in Your Closet?

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


// 1.

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// 2.
kristynsCloset.splice(6, 0, "raybans");

// 3.
kristynsCloset[5] = "stained knit hat"

// 4.
thomsCloset[0][0];

// 5.
thomsCloset[1][2];

// 6.
thomsCloset[2][1]

// 7.
console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][2] + ", and " + thomsCloset[2][1] + "!")

// 8.

thomsCloset[1][2] = "Footie Pajamas"

// printGreeting

// Again, well played!

// printCool

const printCool = (name) => {
	console.log(name + " is cool");
}
printCool('Chris')

// calculateCube

const calcCube = (num) => {
	return num ** 3;
}
console.log(calcCube(5))

//isVowel

const isAVowel = (letter) => {
	lowercase = letter.toLowerCase()
	if(lowercase === 'a' || lowercase === 'e' || lowercase === 'i' || lowercase === 'o' || lowercase === 'u') {
		return true;
	} else if (lowercase === 'y') {
		return 'I mean kinda...'
	} else {
		return false;
	}
}

console.log(isAVowel('Y'))

// getTwoLengths

const getTwoLengths = (arr1, arr2) => {
	const arraysLength = []
	arraysLength.push(arr1.length, arr2.length)
	return arraysLength;
}

console.log(getTwoLengths("What", "Yea"));

// getMultipleLengths

const getMultLengths = (str) => {
	let lengthStorage = [];
	for(let i = 0; i < str.length; i++) {
		let breakDown = str[i];
		lengthStorage.push(breakDown.length);
	}
	return lengthStorage;
}

console.log(getMultLengths(["Hey", "Yeah", "Super", "Totally"]));

// printLongestWord

const findLongestWord = (arrayOne) => {
	let longestWord = '';
	arrayOne.forEach(function(words) {
		if(words.length > longestWord.length) {
			longestWord = words
		}
	});
	return longestWord;
}

console.log(findLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]))

// Transmogrify

const transmogrify = (firstNum, secondNum, thirdNum) => {
	return (firstNum * secondNum) ** thirdNum;
}

console.log(transmogrify(5, 3, 2));

// reverseWordOrder

// This is the best I could get to work :( 
// I tried a ton of different things, but I can't get the words to
// to spell out the right way if the words are all in one array.
	
const reverseWordOrder = (newString) => {
	let reversedString = "";
	for(let i = newString.length - 1; i >= 0; i--) {
		reversedString += newString[i];	
	}
	return reversedString;
}

console.log(reverseWordOrder("Ishmael me Call"));

// Get down and dirty with Math.random()

// 1.
const randomOneTen = () => {
	let oneTen = Math.floor(Math.random() * 10) +1;
	return oneTen;
}
console.log(randomOneTen());

// 2.
const randomTenHundred = () => {
	let tenHundred = Math.floor(Math.random() * 90 + 1) + 10;
	return tenHundred;
}
console.log(randomTenHundred());

// 3. 
const randomStrangNumbers = () => {
	let strangeNumbers = Math.floor(Math.random() * 12735 + 1) + 532;
	return strangeNumbers;
}
console.log(randomStrangNumbers());

// 4.
const randomOneTenNum = () => {
	let oneTenNum = Math.random() * 10 +1;
	return oneTenNum;
}
console.log(randomOneTenNum());

// 5.

const getRandomElement = (array) => {
	return array[Math.floor(Math.random() * array.length)];
}
console.log(getRandomElement(quotes))

// User

const user = {
	name: 'Chris',
	email: 'tophy912@gmail.com',
	age: 33,
	purchased: []
}

user.email = 'Tophy03@gmail.com';
user.age = user.age + 1;

user.location = 'Chicago, IL'















