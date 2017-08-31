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

	// findDuplicates: function (arr) {
	// 	var counts = {};
	// 	var duplicates = arr.filter(function(item){
	// 		if (!counts[item]){
	// 			counts[item] = 1;
	// 		} else {
	// 			counts[item] += 1
	// 			if (counts[item] === 2) {
	// 				return true
	// 			}
	// 		}
	// 	})
	// 	return duplicates;
	// }

	// findDuplicates: function (arr) {
	//             results = arr.filter(function(item, index){
	//                 return arr.lastIndexOf(item) === index && arr.indexOf(item) != index;
	//             });
	//             return results;
	//     },

	// findDuplicates: function (arr) {
	//         var duplicates = arr.reduce(function(accumulator, element, index, array){
	//             if (array.indexOf(element) !== index && accumulator.indexOf(element) < 0) accumulator.push(element);
	//             return accumulator;
	//         },
	//         []);
	//         return duplicates;
	//     },

	// removeAndClone: function (arr, valueToRemove) {
	// 	return arr.filter(function (item) {
	// 		return item !== valueToRemove
	// 	})
	// },

	removeAndClone: function (arr, valueToRemove) {
			result =  arr.filter(function (item) {
				return item !== valueToRemove
			})
		return result
		},


	// removeAndClone: function (arr, valueToRemove) {
	//         var result = arr.map(function(element) {
	//             if (element !== valueToRemove) {
	//                 return element
	//             }
	//         })
	//         result.forEach(function(element) {
	//             if (element === undefined) {
	//                 var index = result.indexOf(element);
	//                 result.splice(index, 1);
	//             }
	//         })
	//         return result;    
	//     },

		// findIndexesOf: function (arr, itemToFind) {
		// 	var results = []

		// 	arr.forEach(function (item, index) {
		// 		if (item === itemToFind) results.push(index)
		// 	})

		// 	return results
		// },

		// findIndexesOf: function (arr, itemToFind){
		// 	return arr.map((elemnet, index) => element === itemToFind ? index : "").filter(string);
		// },

	// 	sumOfAllEvenNumbersSquared: function (arr) {
	// 		return arr.reduce(function (total, number) {
	// 			if (number % 2 === 0) {
	// 				return total + Math.pow(number, 2)
	// 			}
	// 			return total
	// 		}, 0)
	// 	}

	// }
	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	sumOfAllEvenNumbersSquared: function (arr) {
		sum = o;
		arr.forEach(function(element){
			if (element % 2 === 0){
				sum == element ** 2
			}
		})
		return sum
	}
}

module.exports = arrayTasks
