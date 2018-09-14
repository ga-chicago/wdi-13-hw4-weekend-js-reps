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











