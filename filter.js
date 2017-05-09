// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

//const filteredNames = filter(myNames, (name) => name[0] === 'R');
console.log(filter(myNames, (name) => name[0] === 'R')); // => ['Rich', 'Ray']

// TASK -- DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
	const newArray = [];
		for (i=0; i<arr.length;i++){
			if (fn(arr[i])){
				newArray.push(arr[i]);
			}
		}

	return newArray;
}
