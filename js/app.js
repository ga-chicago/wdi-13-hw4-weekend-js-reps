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
	//C. Give me Five
		//1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five. //2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
		for(let i = 0; i <= 100; i++) {
			if(i % 5 === 0) {
				console.log("I found a " + i + ". High five!");
			} else if(i % 3 === 0) {
				console.log("I found a " + i + ". Three is a crowd");
			}
		}
	//D. Savings account
		//1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
		let bank_account = 0;
		for(let i = 1; i <= 10; i++) {
			bank_account += i;
		}
		//2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
		let doubleSum = 0;
		for(let i = 1; i <= 100; i++) {
			doubleSum += i*2;
		}
	//E. Multiples of 3 and 5
		let euler1 = 0;
		for(let i = 1; i < 1000; i++) {
			if(i % 5 === 0 || i % 3 === 0) {
				euler1 += i;
			}
		}
//III. Arrays & Control flow
	//A. Talk about it
		//1. Things in arrays are called elements
		//2. Arrays do not guarantee that the elements will be in order
		//3. A list of students could be modeled with an array
	//B. Easy does it
		//1. Create an array that contains three quotes and store it in a variable called quotes.
		const quotes = ["To infinity and beyond","The first rule is you do not talk about fight club","All your base are belong to us"];
	//C. Accessing elements
		const randomThings = [1, 10, "Hello", true];
		//1.	
		randomThings[0];
		//2.
		randomThings[2] = "World";
		//3.
		console.log(randomThings);
	//D. Change values
		const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
		//1. 
		ourClass[2];
		//2.
		ourClass[4] = "Octocat";
		//3.
		ourClass.push("Cloud City");
	//E. Mix It Up
		const myArray = [5, 10, 500, 20]
		//1.
		myArray.push("Egon");
		myArray.push("Bolas");
		//2.
		myArray.splice(0,1);
		//3.
		myArray.splice(0,0,"Bob Marley");
		//4.
		myArray.pop();
		//5.
		myArray.reverse();
	//F. Biggie Smalls
		const biggieSmalls = 144;
		if(biggieSmalls < 144) {
			console.log("little number");
		} else if(biggieSmalls >= 144) {
			console.log("big number");
		}
	//G. Monkey in the Middle
		const monkey = 8;
		if(monkey < 5) {
			console.log("little number");
		} else if(monkey > 10) {
			console.log("big number");
		} else {
			console.log("monkey");
		}
	//H. What's in Your Closet?
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
		//1.
		console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
		//2.
		kristynsCloset.splice(6,0,"raybans");
		//3. 
		kristynsCloset[5] = "stained knit hat";
		//4.
		console.log(thomsCloset[0][0]);
		//5.
		console.log(thomsCloset[1][1]);
		//6.
		console.log(thomsCloset[2][2]);
		//7.
		console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][2] + "!");
		//8.
		thomsCloset[1][2] = "Footie Pajamas";
//IV. Functions
	//A. printGreeting
	//skipped
	//B. printCool
	const printCool = (name) => {
		return name + " is cool";
	}
	console.log(printCool("Jeff"));
	//C. calculateCube
	const calculateCube = (number) => {
		return number**3;
	}
	console.log(calculateCube(4));
	//D. isVowel
	const isVowel = (char) => {
		if(char === "a" || char === "A" || char === "e" || char === "E" || char === "i" || char === "I" || char === "o" || char === "O" || char === "u" || char === "U") {
			return true;
		} else {
			return false;
		}
	}
	//E. getTwoLengths
	const getTwoLengths = (str1,str2) => {
		return [str1.length,str2.length];
	}
	//F. getMultipleLengths
	const getMultipleLengths = (strArray) => {
		let numArray = [];
		for(let i = 0; i < strArray.length; i++) {
			numArray.push(strArray[i].length);
		}
		return numArray;
	}










