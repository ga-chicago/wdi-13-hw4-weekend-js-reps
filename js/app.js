// //  // Variables & Datatypes

// // // 1. You assign value to a variable by using one = sign 

// // // 2. You can change the value of a variable by reassinging 
// // 	  // it's value below, but make sure to use let!
// // 	  let morningAlarm = "6:30";
// // 	  morningAlarm = "8:00";

// // 3. let x = 15
// // 	  let a = x
// // 	  now a is equal to 15

// // 4. We declare a variable at the top let a; 
// //    We assign when we add the value of the variable a = 5;
// // 	  It will be defined depending where the decleration sits 
// // 	  if your decleration is outside the for loop and your
// // 	  console.log is inside then it will be undefined
// // 	  (slightly confused on this)


// //  5. pseudocoding is writing out in plain english what it is
// //     that you want to accomplish before you attack and write the code
// // 	   its important because you need to think about what you do before 
// //     you do it so you can break it down into smaller chunks 

// // 6. You should spend 75% if not 85% of your time thinking about/
// // 	  researching how you are going to solve your problem and about 25%-
// // 	  15% of time actually writing the code




// Strings

	let firstVariable;
    firstVariable = "Hello World";
	firstVariable = 18;
	let secondVariable;
	firstVariable = secondVariable;
	secondVariable = "Goodbye World";
	//  when I console.log first variable I get undefined 
	// and when I switched line 41 to say secondVariable = firstVariable
	// firstVariable was equal to 18, not sure why?
	let yourName = "Greg";
	console.log("hello my name is" + " " + yourName);



// Boolean
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  console.log(true != false);
  console.log(false === false === false === false === false === false == true);
  console.log(false === false)
  console.log(e ==='Kevin');
  console.log(a && b != c);
  console.log(a && a != d);
  console.log(48 == '48');

// The farm
// Declare a variable animal. Set it to be either "cow" or something else.
// Write code that will print out "mooooo" if the it is equal to cow.
// Change your code so that if the variable animal is anything other than a cow, 
// it will print "Hey! You're not a cow."
// Commit.



// Part D.
 const animal = "cow";
if(animal === "cow") {
	console.log("MOOOOOOO");
} else {
	console.log("Hey, you're not a cow!!");
}

 
// // The Basics

// 1. for(let i = 0; i <= 10; i++){
// 	console.log(i);
// }

// 2. for(let i = 10; i <= 400; i++){
// 	console.log(i);
// }

// // // 3.
// // for(let i = 12; i < 4000; i = i + 3){
// // 	console.log(i);
// // }


// // Get even

for( g = 0; g <= 100; g+=2){
	console.log((g)+ " " + "<-- is an even number");
}

// Give me five

for(let g = 1; g <= 100; g++){
	if( g % 5 === 0 ) {
      console.log("I found a " + (g)+ "! High Five!");
  }else{
  	if( g % 3 === 0){
  		console.log("I found a " + (g)+ ". Three is a crowd.");
  	}else{
  		console.log(g)
      	}
      }
    }



// // Savings Account


 1.
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let bank_account = 0;
for(let g = 0; g<nums.length; g++){
	bank_account += (nums[g]);
}
console.log(bank_account);



 //2. 
  let bank_account2 = 0;
for (let i = 1; i <= 100; i += 1)
{
    bank_account2 += i * 2;
}
    console.log(bank_account2);


// // Multiples of 3 and 5 


// // Already did it! deja vu no thank you!


// // Arrays and Control Flow

// // 1. Elements
// // 2.No, the .length can add one to the value of the array
// // 3. If you need to store a list of names or you are making 
// // a grocery list you could store the names or items inside an 

// // Easy does it 

const quotes = ['pain dont hurt', 'Ill have what shes having', 'Easy does it'];
console.log(quotes);

// // Change values


const ourClass = ['Salty', 'Zoom', 'Sardine', 'Slack','Github'];
      console.log(ourClass[2]);

      ourClass[4]= 'Octocat';


ourClass[5] = 'Cloud City';

console.log(ourClass);


// // Mix it up dawg

const myArray = [5, 10, 500, 20];
     myArray[4] = 'Egon';
     myArray[5] = 'SwayzDog';
     myArray.unshift('Bob Marley');
     myArray.pop('SwayzDog');
     myArray.reverse(myArray);
     // Yes I did mutate the array because I used .reverse, .pop, and .unshift
     // mutating is changing the source element
     // myArray.reverse(myArray) returned the array in reverse order
console.log(myArray);



// // Biggie Smalls
    let x = 19;
if( x < 100){
  console.log( " " + "little number")


}else{
  if( x >= 100)
    console.log(" "+ "big number")

}


//  // Monkey in the Middle


// let x = 6;
if(x < 5){
  console.log(" " + "little number");
}else{
  if(x > 10){
    console.log(" " + "big number");
  }else{
  console.log("monkey");
  }
}

// // What's in Your Closet?

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];
console.log('Kristyn is rocking that' + ' ' + [kristynsCloset[2]] + ' ' + 'today!');

kristynsCloset.splice(6,0,'raybans');

kristynsCloset[5] = "stained yellow knit hat";

console.log(kristynsCloset);


// // Thom's closet is more complicated. Check out this nested data structure!!
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


console.log(thomsCloset[0][0]);
console.log(thomsCloset[1][2]);
console.log(thomsCloset[2][0]);
console.log('Thom is looking fierce in a' + ' ' +(thomsCloset[0][0]) + ' , ' 
  + (thomsCloset[1][1]) + ' , ' + 'and a ' + (thomsCloset[2][1]));  
thomsCloset[1][2] = 'Footie Pajamas';
console.log(thomsCloset);




// // printCool

const printCool = (name) => {
console.log(`${name} is cool`);
}
printCool('Captain Reynolds');
// console.log(printCool("Captain Reynolds"));

// // calculateCube


const calculateCube = (num1) => {
// console.log(num1 * num1 * num1);
return num1 * num1 * num1
}
console.log(calculateCube(5));


// // isVowel

const isVowel = function(letter)  {

    let vowels = ["a", "e", "i", "o", "u"];

    for(let i = 0; i < vowels.length; i++){ 
        if(letter === vowels[i]){
            return true;
         }
    }

    return false;

};

console.log(isVowel("a"));


// // getTwoLengths


const getTwoLengths = ( word1 , word2 ) => {
    return [ word1.length , word2.length ];
}


console.log(getTwoLengths("Hank", "Hippopopalous"));


// // getMultipleLengths

const getMultipleLengths = ( arrayOfStrings ) => {
    const lengths = [];
    for ( let g = 0; g < arrayOfStrings.length; g++ ){
        lengths.push( arrayOfStrings[g].length );
      }
      return lengths;
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


// // maxOfThree


const maxOfThree = ( num1, num2 , num3 ) => {
   return Math.max ( num1, num2, num3 );
}

console.log(maxOfThree(6, 9, 1));

// // 



// // Write a function printLongestWord that accepts a single argument, an array of strings.
// //  The method should return the longest word in the array. In case of a tie, 
// //  the method should return the word that appears first in the array.

// printLongestWord

const printLongestWord = (arrayOfStrings) => {
  let longest = ' ';
  for(let i = 0; i < arrayOfStrings.length; i++){
    if(arrayOfStrings[i].length > arrayOfStrings.length){
      longest = arrayOfStrings[i];
    }
  }
    return longest;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));




// // Write a Javascript function called transmogrify. This function should accept three arguments,
// //  which you can assume will be numbers. Your function should return the "transmogrified" result.

// // The transmogrified result of three numbers is the product of the first two numbers, 
// // raised to the power of the third number.

// // For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

// // transmogrify
const transmogrify = (num1,num2,num3) => {
  return (num1*num2)**num3;
}

console.log(transmogrify(5, 3, 2));



// // K. Get down and dirty with Math.random()

// Write a function that will return a random integer between 1 and 10. Test it.
    function getRandomInt(max) {
  return Math.floor(Math.random() * 10) +1;
}
console.log(getRandomInt(""));

// // Write a function that will return a random integer between 10 and 100. Test it.

function getRandom(max){
  return Math.floor(Math.random() * 100) +1;
}
console.log(getRandom());

// Write a function that will return a random number between 532 and 13267. Test it.

function keepItRandom(max){
  return Math.floor(Math.random() * 13267) + 532;
}
console.log(keepItRandom());



// // Write a function that will return a random number between 1 and 10. Test it.

// // deja vu?
    function getRandomInt(max) {
  return Math.floor(Math.random() * 10) +1;
}
console.log(getRandomInt());


// // Add a few more quotes to the quotes array from question III-B-1 above.
// // quotes.push() 

quotes[quotes.length] = 'actually pain does hurt';
quotes[quotes.length] = 'wrong kid died'
console.log(quotes);
 
// // //  Write a function that will take an array as a parameter,
// //  and returned a random element from that array. Call your function a few times,
// //   passing in the quotes array. Give it a nice semantic name like getRandomElement.

let arr = ['pickle highway', 'bologna blues', 'El HotDog'];

function paramaDawg(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}
console.log(paramaDawg(arr));

// // A. Make a user object
// // Create an object called user.
// // Write in to the object the key-value pairs for name, email, age, 
// // and purchased. Set the value of purchased to an empty array []. 
// // Set the other values to whatever you would like.

// A. Make a user object
const user =
  {name: 'Greg',
  email: 'gfrye414@yahoo.com',
  age: 24,
  puchased: []
};
// B. Update the user
user.age++
user.email = 'gregoryrfrye@gmail.com'

// C. Adding keys and values
user[location]= 'Pickle Facorty';

// could not get my push to work

// // D. Shopaholic!
// user.purchased.push("carbohydrates");
// user.purchased.push("peace of mind");
// user.purchased.push("Merino jodhpurs");

// // E. Object-within-object

user.friend = {
    name: "Grace Hopper",
    age: 85
},
user.friend = {
	name: 'Rob Derhak',
	age: 'old',
	location: 'hell',
	purchased: []
}

console.log(user.friend.name);
console.log(user.friend.location);

user.friend.age = 55;
// could not get G and F to print, but figured id turn it in and see what you thought?

// // user.friend.purchased.push('The One Ring');
// // user.friend.purchased.push('A latte');
// console.log(user.friend.purchased[1]);

// // F

// for(let i = 0; i < user.purchased.length; i++) {
// 	console.log(user.purchased[i]);
// }
//  for(let i = 0; i < user.friend.purchased.length; i++) {
// 	console.log(user.friend.purchased[i]);
// }

// // G.
// const updateUser = () => {
// 	user.age ++;
// 	user.name = user.name.toUpperCase();
// }
//  updateUser();
//  const oldAndLoud = (person) => {
// 	person.age ++;
// 	person.name = person.name.toUpperCase();
// }
//  oldAndLoud(user);