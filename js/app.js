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







