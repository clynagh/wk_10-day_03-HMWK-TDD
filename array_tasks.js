var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		return arr.map(function (num){
			return Math.pow(num, 2);
		})
	},

	sum: function (arr) {
		var result = arr.reduce( function (accumulator, currentValue){
			return accumulator + currentValue;
		}, 0);
		return result
	},

	findDuplicates: function (arr) {
		return arr.filter(function (item, i) {
			var restOfArrayIncludesItem = arr.slice(i + 1).includes(item)
			var isFirstInstanceOfItem = arr.indexOf(item) === i
			return restOfArrayIncludesItem && isFirstInstanceOfItem
		})
	},

	removeAndClone: function (arr, valueToRemove) {
		return arr.filter(function (item) {
			return item !== valueToRemove
		})
	},


	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
