const objTwo = {
	meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}

for (var y in objTwo) {
	console.log(objTwo[y][3]);
}

// console.log(Object.keys(objTwo[3]));

// const obj = {
// 	foo: "foo",
// 	bar: 2,
// 	fum: 3, 
// 	quux: 4, 
// 	spam: 5,
// }

// for (let x in obj) {
// 	console.log(x + obj[x]);
// }


// var obj = {a: 1, b: 2, c: 3};
    
// for (var prop in obj) {
//   console.log(`obj.${prop} = ${obj[prop]}`);
// }

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

