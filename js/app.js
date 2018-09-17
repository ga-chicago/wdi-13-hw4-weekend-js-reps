// Part I: Variables & Datatypes

//	a. Q & A

// 1. you assign value to a variable with an assignment operator - 
// i.e. an equals sign = . Put a value across an assignment operator
// from your variable, and it becomes the variable's value - 
// and they become essentially interchangable. 

// 2. you can't change the value of just any variable - 
// const, for example, can't be redclared, but let can!
// all you have to do is declare it afresh. 

// 3. you reassign the value? I think that's what you're asking

// 4. to declare a variable is to outline its structure and parameters 
//  - but not necessarily to assign those parameters  meaning/value - 
// within a given scope. 

// to assign a variable is to give it a specific value.
// This is done with an assignment operator, = . 

// to define a variable is to assess or display its value. 

// 5. psuedocoding is writing out, in language that's sort of 
// half way between proper english and javascript syntax, 
// a rough draft of your code. it's super useful for 
// planning what you'll actually code, as you can break 
// down steps and desired outcomes in a language that's 
// more familiar (probably) to you than straight javascript.
// 6. Hmm, I'm gonna say around 60 planning/40 coding?

// b. Strings

// 1. 

// let firstVariable = 'Hello world';

// firstVariable = 99; 

// let secondVariable = firstVariable;

// secondVariable = 'ibuprofin';

// <-- ibuprofin

// 2. 

// const yourName = 'John'

// console.log('Hello! My name is ' + yourName);

//c. Booleans

 // const a = 4;
 // const b = 53;
 // const c = 57;
 // const d = 16;
 // const e = 'Kevin';

 // console.log(a < b);
 // console.log(c > d);
 // console.log('Name' === 'Name');
 // console.log(true !== false);
 // console.log(false === false === false === false === false === false === true); // ok, I don't understand why this is true but it is?
 // console.log(false === false);
 // console.log(e === 'Kevin');
 // console.log(a + b === c );
 // console.log(a * a === d);
 // console.log(48 == '48');

 //d. the farm

 // let animal = 'horse'

 // if (animal === 'cow') {
 // 	console.log('Mooooo!')
 // } else console.log("Hey! You're not a cow!")


 // //3. Driver's Ed

 // const driversAge = 19;  

 // if (driversAge >= 16) {
 // 	console.log('Here are the keys!')
 // };


// Part II: Loops


//a. the basics

// for (let i = 0; i <= 10; i++) {
// 	console.log(i)
// };

// for (let i = 10; i <= 400; i++) {
// 	console.log(i)
// };

// for (let i = 12; i <= 4000; i += 3) {
// 	console.log(i)
// };


//b. get even

// for (let i = 1; i <= 100; i++) {
// 	if (i % 2 === 0) {
// 		console.log(i)
// 	}
// };

// for (let i = 1; i <= 100; i++) {
// 	if (i % 2 === 0) {
// 		console.log(i + ' is an even number.')
// 	}
// };


//c. give me five

// for (let i = 1; i <= 100; i++) {  
// 	if (i % 5 === 0) {
// 		console.log(`I found a ${i}! High five!`)
// 	}
// };

//the assignment calls for 0 - 100, which causes zero to return. 
//I went ahead and started with 1, but if you want to be really semantic about it
//you could just say if (i % 5 === 0 && i != 0) or something. 


// for (let i = 1; i <= 100; i++) {
// 	if (i % 5 === 0) {
// 		console.log(`I found a ${i}! High five!`)
// 	} if (i % 3 === 0) {
// 		console.log(`I found a ${i}! Three is a crowd`)
// 	}
// };


//d. savings account

// let bankAccount = 0;

// for (i = 1; i <= 10; i++) {
// 	bankAccount += i
// };

// console.log(bankAccount);

// let bankAccount = 0;

// for (i = 1; i <= 100; i++) {
// 	bankAccount += (i * 2)
// };

// console.log(bankAccount);


//e. multiples of 3 and 5

// let sum = 0; 

// for (i = 0; i <= 1000; i++) {
// 	if (i % 3 === 0 || i % 5 === 0) {
// 		sum += i
// 	} 
// }

// console.log(sum) //<-- returns 234168, which I think is right? 

//if I've done this one before, I completely forgot. Pretty nifty 


//Part III: Arrays & Control Flow


//a. talk about it

// 1. They're called elements - and they can be strings, integers, etc. 

// 2. no - they only appear in the order in which they are put in, unless
// the array is otherwise instructed. 

// 3. literally anything - items in an online store could easily be described as arrays, 
// as could the store itself holding them. 


//b. easy does it

// let quotes = ['The woods are lovely, dark and deep', 'But I have promises to keep', 'And miles to go before I sleep'];

// console.log(quotes);


//c. accessing elements

// const randomThings = [1, 10, 'Hello', true];

// console.log(randomThings[0]); //<-- returns 1

// randomThings[2] = 'world';

// console.log(randomThings[2]); //<-- returns world


//d. change values

// const ourClass = ['Salty', 'Zoom', 'Sardine', 'Slack', 'Github'];

// ourClass[2];

// ourClass[3] = 'Octocat';

// ourClass.push('Cloud City');


//e. mix it up

// const myArray = [5, 10, 500, 20];

// myArray.push('Egon');
// myArray.splice(0, 1);
// myArray.push('Bob Marley');
// myArray.pop();
// myArray.reverse(); //<-- returns ['Egon', 20, 500, 10]

//yes it mutated the array - that just means the array has been changed
//by the reverse() method: its interior values have been altered by reordering.


//f. biggie smalls

// const num = 7;

// if (num < 100) {
// 	console.log('little number')
// } else {
//	console.log ('big number')
// };


//g. monkey in the middle

// if (num < 5) {
// 	console.log('little number')
// } if (num > 10) {
// 	console.log('big number')
// } else {
// 	console.log ('monkey')
// };


//h. what's in your closet? 

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];

// //1.

// console.log('Kristyn is rocking that ' + kristynsCloset[2] + ' today!')

// //2. 

// kristynsCloset.splice(6, 0, 'raybans'); 

// //3. 

// kristynsCloset[5] = 'stained knit hat';

// //4. 

// console.log(thomscloset[0][1]);

// //5. 

// console.log(thomsCloset[1][2]);

// //6. 

// console.log(thomsCloset[2][0]);

// //7. 

// console.log('Thoms is looking fierce in his ' + thomsCloset[0][2] + ', ' + thomsCloset[1][0] + ' and a nice ' + thomsCloset[2][1] + '.');

// //8. 

// thomscloset[1][2] = 'footie pajamas';


//Part IV: Functions


//a. printGreeting

//I feel pretty comfortable with this one so I'm skipping it thank you


//b. printCool

// const printCool = (name) => {
// 	console.log(`${name} is cool.`);
// };

// printCool('Reuben');


//c. calculateCube

// const calculateCube = (x) => {
// 	console.log(x * x * x);
// };

// calculateCube(3);

//d. isVowel

// const isVowel = (character) => {
// 	let lcCharacter = character.toLowerCase();
// 	if (lcCharacter === 'a' || lcCharacter === 'e' || lcCharacter === 'i' || lcCharacter === 'o' || lcCharacter === 'u') {
// 		console.log(true);
// 	} else {
// 		console.log(false);
// 	}
// };

// isVowel('w');
// isVowel('e');
// isVowel('j');
// isVowel('u');


//e. getTwoLengths

// const getTwoLengths = (string1, string2) => {
// 	let length1 = string1.length; 
// 	let length2 = string2.length;
// 	let lengthArray = [length1, length2]
// 	console.log(lengthArray);
// };


// getTwoLengths('banana', 'Germany');
// getTwoLengths('Jemima', 'applesauce')
// getTwoLengths('latke', 'pantomime');


//f. getMultipleLengths

//this one is tricky - gonna need some psuedo

// const testArray = ['Jeremy', 'boba', 'microscope', 'pancake']

// const getMultipleLengths = (stringArray) => {

// // while loop
// // while i < stringArray.length 
// // save individual string stringArray[i] as variable
// // save .length of individual string as new variable
// // push new variable to empty numArray
// // log numArray

// 	let numArray = [];
// 	let i = 0;
// 	while (i < stringArray.length) {
// 		let indivString = stringArray[i];
// 		let lengthNum = indivString.length;
// 		numArray.push(lengthNum);
// 		i++;
// 	}; 	
// 		console.log (numArray)

// };

// getMultipleLengths(testArray);


//g. maxOfThree

// const maxOfThree = (x, y, z) => {
// 	let winner
// 	if ((x >= y) === true) {
// 		winner = x
// 	} else {
// 		winner = y
// 	};
// 	let lastWinner	 
// 	if ((winner >= z) === true) {
// 		lastWinner = winner
// 	} else {
// 		lastWinner = z
// 	}; 
// 		console.log(lastWinner);
// };

//there might have been a cleaner way to do this, but this works. 

// maxOfThree(5, 4, 19);
// maxOfThree(45, 9, 21);
// maxOfThree(12, 99, 7);


//h. printLongestWord



// // pseudo: 
// // while loop
// // while i < stringarray.length
// // save individual stringArray[i].length as variable
// // (maybe split that^^ into two steps w/ two vars if it doesn't work)
// // save stringarray(i + 1).length as variable2
// // compare var1 & var 2, save winner as var winner
// // i ++; <== bc i almost forgot you last time
// // console.log(finalwinner)

// //basically a combo of the last 3 functions, ok
	// let stringOne = stringArray[i].length;
// 		// // let stringTwo = stringArray[i + 1].length;//<--- returns undefined for some reason
// 		// let stringOne = stringArray[i];
// 		// let stringOneLength = stringOne.length;
// 		// let stringTwo = stringArray[(i + 1)];
// 		// let stringTwoLength = stringTwo.length; 
// 		// //<-- returns undefined too... I think I'm overdoing this 
// 		// let winner
// 		// if ((stringOneLength.length >= stringTwoLength.length) === true) {
// 		// 	winner = stringOneLength
// 		// } else {
// 		// 	winner = stringTwoLength
// 		// }; 

//while loop isn't cutting it, and I realized it was just picking the most recent
//word when did get it to work. so instead, tried a for loop comparing each entry 
//to an empty string. did the trick. 

// testArrayTwo = ['Illinois', 'Annie', 'synechdoche', 'fifi'];

// let largest = '';

// const printLongestWord = (stringArray) => {

// 	for (let i = 0; i < stringArray.length; i++) {
// 			if (stringArray[i].length >= largest.length) {
// 				largest = stringArray[i];
// 			};
// 	}; 	console.log(largest);
// };

// printLongestWord(testArrayTwo)


//i. transmogrify 

//  const transmogrify = (x, y, z) => {
// 	const transmogrified = (Math.pow((x * y), z));
// 	console.log(transmogrified)
// };

// transmogrify(10, 5, 2);

//j. reverseWordOrder v2

// let stagingArrayOne = [];
// let stagingArrayTwo = [];
// let reversedString = '';

// const reverseWordOrder = (string) => {

// //psuedo: 
// // create new const reversedString (above)
// // loop backwards (i--) from string.length

// 	// for (i = string.length; i >= 0; i--) {
// 	// 	reversedString += string[i];
// 	// }; 
// // argh wait this reverse letter order too. hmm...
// // ok, can i split the string into an array of words without .split()? 
// // maybewith something based around ' '...

// 	for (let i = string.length - 1; i >= 0; i--) {
// 		stagingArrayOne.splice(0, 0, string[i]);
// 	}; 
// 	console.log (stagingArrayOne);
// }; 

// // that's as far as I can get. Been at this one for several hours, so I'm moving on for now. 
// reverseWordOrder('so much depends upon the red wheelbarrow');


//k. math.random 

//NOTE: you can toggle between these by commenting and uncommenting them - they all have the same name, and are invoked at the bottom of the answer:

//1.

// const generateRandomNum = () => {
// 	console.log(Math.floor(Math.random() * 10));
// }; 

//2. 

// const generateRandomNum = () => {
// 	console.log(Math.floor(Math.random() * (90)) + 10);
// }; 

//3. 

// const generateRandomNum = () => {
// 	console.log(Math.floor(Math.random() * (12735)) + 532);
// }; 

//4. 

// const generateRandomNum = () => {
// 	console.log(Math.random() * 10);
// }; 

// generateRandomNum();

//5. 

// const quotes = ['whose woods these are I think I know', 'his house is in the village though', 'he will not see me stopping here', 'to watch his woods fill up with snow', 'The woods are lovely, dark and deep', 'But I have promises to keep', 'And miles to go before I sleep'];

// const getRandomElement = (array) => {
// 	let j = (Math.floor(Math.random() * array.length));
// 	console.log(array[j]);
// };

// getRandomElement(quotes); 


//Part V:

//a. 

const user = {
	name: 'Finn',
	email: 'finn@ooo.email',
	age: 17,
	purchased: []
};

//b. 

user.email = 'finnrulez@ooo.com';
user.age++;

//c. 

user.location = 'Land of Ooo';







