const letterCipher = {
	a: 1,
	b: 2,
	c: 3,
	d: 4
};

function decodeString(string, cipher) {
	let result = "";
	const cipherKeys = Object.keys(cipher);
	let currentWord, firstLetter;  
	// convert string into array for examination
	const words = string.split(" ");
	// iterate over words and:
	for (let i = 0; i < words.length; i++) {
		currentWord = words[i]
		firstLetter = currentWord[0];
		// if first character of word matches one in cipher,
		if (cipherKeys.indexOf(firstLetter) > -1) {
		//   use cipher to add indicated letter to result
			result += currentWord[cipher[firstLetter]];
		} else {
			result += ' ';
		}

	}
	// after loop,
	//   return result
	return result;
}

let message = decodeString('craft block argon meter bells brown croon droop', letterCipher);
console.log(message);


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

