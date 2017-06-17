//Factory Functions with LOTR

//create factory function called createCharacter 

function createCharacter(name, nickName, race, origin, attack, defense, weapon) {
	return {
		name,
		nickName,
		race,
		origin,
		attack,
		defense,
		weapon,
		//describe(): that takes no parameters and console.logs({name} is a {race} from {origin})

		describe: function() {
			console.log(`${name} is a ${race} from ${origin} who uses ${weapon}`);
		},
		evaluateFight(characterObject) {
			let thisDifference = this.attack - characterObject.defense;
			let opponentDifference = characterObject.attack - this.defense;

			if (thisDifference > 0 && opponentDifference > 0) { 
				return(`Your opponent takes ${thisDifference} damage and you receive ${characterObject.attack - this.defense} damage`);
			} else if (opponentDifference < 0){
				return(`Your opponent takes ${thisDifference} damage and you receive 0 damage`);
			} else if (thisDifference < 0) {
				return(`Your opponent takes 0 damage and you receive ${characterObject.attack - this.defense} damage`);
			} else {
				return(`Your opponent takes ${thisDifference} damage and you receive ${characterObject.attack - this.defense} damage`);
			}
		}
	}

}
//each character should have:
	 //Methods:
	  		//evaluateFight(characterObject): returns "your opponent takes {x} damage and you receive {y} damage"; x and y are 
			//differences between each characters attack and defense values. 
			//If defense exceeds attack, 0 damage is taken
//use array literal syntax to create array *characters* that calls factory function for each character in the provided table
	//array should contain 5 objects
let characters = [
	createCharacter('Gandalf the White', 'gandalf','Wizard','Middle Earth',10,6,'a wizard staff'),
	createCharacter('Bilbo Baggins', 'bilbo','Hobbit','The Shire',2,1,'the Ring'),
	createCharacter('Frodo Baggins','frodo','Hobbit','The Shire',3,2,'the String and Barrow Blade'),
	createCharacter('Aragorn son of Arathorn','aragorn','Man','Dunnedain',6,8,'the Anduril'),
	createCharacter('Legolas','legolas','Elf','Woodland Realm',8,5,'a Bow and Arrow'),
	createCharacter('Arwen Undomiel','undome','Half-Elf','Rivendell',1,1,'the Hadhafang')
];
console.log(characters);
characters[0].describe();

characters[2].evaluateFight(characters[4]);

//use .find to find aragorn and call describe method

console.log(characters.find(findAragorn).describe());

function findAragorn(characterName) {
	return characterName.nickName === 'aragorn';
}

//use .filter to create new array from *characters* that only contains characters of the race Hobbit

console.log(characters.filter(checksIfHobbit));

function checksIfHobbit(character) {
	return character.race === 'Hobbit';
}

//use .filter to create new arary from *characters* that only contains characters with attack value > 5

console.log(characters.filter(checksIfStrong));

function checksIfStrong(character) {
	return character.attack > 5;
}


//Cipher Problem 
// const letterCipher = {
// 	a: 1,
// 	b: 2,
// 	c: 3,
// 	d: 4
// };

// function decodeString(string, cipher) {
// 	let result = "";
// 	const cipherKeys = Object.keys(cipher);
// 	let currentWord, firstLetter;  
// 	// convert string into array for examination
// 	const words = string.split(" ");
// 	// iterate over words and:
// 	for (let i = 0; i < words.length; i++) {
// 		currentWord = words[i]
// 		firstLetter = currentWord[0];
// 		// if first character of word matches one in cipher,
// 		if (cipherKeys.indexOf(firstLetter) > -1) {
// 		//   use cipher to add indicated letter to result
// 			result += currentWord[cipher[firstLetter]];
// 		} else {
// 			result += ' ';
// 		}

// 	}
// 	// after loop,
// 	//   return result
// 	return result;
// }

// let message = decodeString('craft block argon meter bells brown croon droop', letterCipher);
// console.log(message);


//console.log(message);

// const p1 = {
// 	name: "Loren",
// 	job_title: "Free Lancer"
// }

// const p2 = {
// 	name: "Jenn",
// 	job_title: "web developer",
// 	boss: "Bob"
// }

// const p3 = {
// 	name: "Nicole",
// 	job_title: "Arrangements Abroad",
// 	boss: "SpongeBob"
// }

// function makeFriendsArr( x, y, z) {
// 	let friends = [];
// 	friends.push.apply(friends, [x, y, z]);
// 	return friends;
// }

// let realFriends= makeFriendsArr(p1, p2, p3)


// function convertToProfiles(arr){
// 	arr.forEach( function(profile) {
// 		if (profile.boss === undefined) {
// 			console.log(`${profile.job_title} ${profile.name} does not report to anybody.`);
// 		} else {
// 			console.log(`${profile.job_title} ${profile.name} reports to ${profile.boss}`);
// 		}
// 	}		
// 	)
// }

// convertToProfiles(realFriends);

// const p1 = {
// 	name: "Loren",
// 	job_title: "Free Lancer"
// }

// const p2 = {
// 	name: "Jenn",
// 	job_title: "web developer",
// 	boss: "Bob"
// }

// const p3 = {
// 	name: "Nicole",
// 	job_title: "Arrangements Abroad",
// 	boss: "SpongeBob"
// }

// function makeFriendsArr( x, y, z) {
// 	let friends = [];
// 	friends.push.apply(friends, [x, y, z]);
// 	return friends;
// }
// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
// //console.log(obj2array(p1, p2, p3));
// let realFriends= makeFriendsArr(p1, p2, p3)
// //console.log(realFriends);

// function convertToProfiles(arr){
// 	arr.forEach(
// 		function(profile) {for(let prop in profile) {
// 			console.log(profile[prop])
// 			// console.log(`${profile[prop]} ${profile[prop]} reports to ${profile[prop]}`);
// 			// Junior Engineer Bob reports to Fred
// 			}
// 		}
// 	)
// }


// convertToProfiles(realFriends);


// // const objTwo = {
// // 	meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
// // }

// // for (var y in objTwo) {
// // 	console.log(objTwo[y][3]);
// // }

// // console.log(Object.keys(objTwo[3]));

// // const obj = {
// // 	foo: "foo",
// // 	bar: 2,
// // 	fum: 3, 
// // 	quux: 4, 
// // 	spam: 5,
// // }

// // for (let x in obj) {
// // 	console.log(x + obj[x]);
// // }


// // var obj = {a: 1, b: 2, c: 3};
    
// // for (var prop in obj) {
// //   console.log(`obj.${prop} = ${obj[prop]}`);
// // }

// const loaf = {
// 	flour: 300,
// 	water: 210,
// 	hydration: function() {
// 		return (this.water/this.flour) * 100;
// 	}
// }

// console.log(Object.keys(loaf));
// console.log(loaf.flour + ' ' + loaf.water);

//console.log(loaf.hydration());

