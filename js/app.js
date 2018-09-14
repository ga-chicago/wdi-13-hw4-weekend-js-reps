//I. Variables and Datatypes
	//A. Q + A
		//1. How do we assign a value to a variable?
			//let/const name = value;
		//2. How do we change the value of a variable?
			//Reassign it: name = value;
		//3. How do we assign an existing variable to a new variable?
			//newVar = oldVar;
		//4. Remind me, what are declare, assign, and define?
			//Declare: let/const var;
			//Assign: var = value;
			//Define: let/const var = value;
		//5. What is pseudocoding and why should you do it?
			//Pseudocoding consists of writing out what you want code to do in English to help plan the actual coding
		//6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
			//Mostly thinking, little coding
	//B. Strings
		//1.
		let firstVariable = "Hello World";
		firstVariable = 42;
		let secondVariable = firstVariable;
		secondVariable = "Beeblebrox";
		console.log(firstVariable); //42

		//2.
		let yourName = "Chris Lehman";
		const hello = () => {
			return "Hello, my name is " + yourName;
		}
	//C. Booleans
		const a = 4;
		const b = 53;
		const c = 57;
		const d = 16;
		const e = 'Kevin';

		console.log(a < b);
		console.log(c > d);
		console.log('Name' === 'Name');
		console.log(true !== false);
		console.log(false !== false !== false !== false !== false !== false !== true);
		console.log(false === false)
		console.log(e === 'Kevin');
		console.log(a !== b < c);
		console.log(a !== a < d);
		console.log(48 == '48');
	//D. The farm
		const animal = "duck";
		if(animal === "cow") {
			console.log("mooooo");
		} else {
			console.log("Hey! You're not a cow.");
		}
	//E. Driver's Ed
		const age = 4;
		if(age >= 16) {
			console.log("Here are the keys");
		} else {
			console.log("Sorry, you're too young");
		}
//II. Loops
	//A. The basics
		//1. Write a loop that will print out all the numbers from 0 to 10, inclusive.
		for(let i = 0; i <= 10; i++) {
			console.log(i);
		};
		//2. Write a loop that will print out all the numbers from 10 up to and including 400.
		for(let i = 10; i <= 400; i++) {
			console.log(i);
		};
		//3. Write a loop that will print out every third number starting with 12 and going no higher than 4000.
		for(let i = 12; i <= 4000; i+=3) {
			console.log(i);
		};
	//B. Get even
		//1. Print out the even numbers that are within the range of 1 - 100. //2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number".
		for(let i = 1; i <= 100; i++) {
			if(i % 2 === 0) {
				console.log(i + "<-- is an even number");
			}
		}
		












