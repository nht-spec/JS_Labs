// createArrayInRangeV1
// function createArrayInRangeV1(a, b) {
// 	if ((a < -100 && a > b) || b > 100) {
// 		return false;
// 	}
// 	let newArray = [];
// 	for (let i = a; i <= b; i++) {
// 		newArray.push(i);
// 	}
// 	return newArray;
// }

//  createArrayInRangeV2
// function createArrayInRangeV2(a, b) {
// 	if (a < -100 && b > 100) {
// 		return false;
// 	}
// 	let range = (start, stop, step = 1) =>
// 		Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
// 	return range(a, b);
// }

// isPrimeV1
export function isPrimeV1(n) {
	if (n < 2 || n > 1000) {
		return false;
	}
	for (let i = 2; i < n - 1; i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}
// console.log(isPrimeV1(1));
// isPrimeV2
// function isPrimeV2(n) {
// 	if (n < 0 || n > 1000) {
// 		return false;
// 	}
// 	for (let i = 2; i < Math.sqrt(n); i++) {
// 		if (n % i === 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// getDivisorListV1
// using for...i to loop from 1 to n
// function getDivisorListV1(n) {
// 	if (n < 1 || n > 1000) {
// 		return false;
// 	}
// 	let newArr = [];
// 	for (let i = 1; i <= n; i++) {
// 		if (n % i === 0) {
// 			newArr.push(i);
// 		}
// 	}
// 	return newArr;
// }

// getDivisorListV2
// using Array.from() and filter() to loop from 1 to n
// function getDivisorListV2(n) {
// 	if (n < 1 || n > 1000) {
// 		return false;
// 	}
// 	let newArr = Array.from({ length: n }, (v, i) => i + 1);
// 	const filterNumber = newArr.filter((x) => n % x === 0);
// 	return filterNumber;
// }

// transformNumbersV1
// function transformNumbersV1(numberList) {
// 	if (!Array.isArray(numberList)) {
// 		return undefined;
// 	}
// 	if (numberList === 0) {
// 		return [];
// 	}
// 	let number = [];
// 	for (let i = 0; i < numberList.length; i++) {
// 		if (numberList.length <= 1) {
// 			number.push(numberList[i]);
// 		}
// 		if (i === 0 && numberList.length < 3 && numberList.length > 1) {
// 			number.push(numberList[i + 1]);
// 		}
// 		if (i === 1 && numberList.length < 3 && numberList.length > 1) {
// 			number.push(numberList[i - 1]);
// 		}
// 		if (i === 1 && numberList.length > 2) {
// 			number.push(numberList[1]);
// 		}
// 		if (i > 0 && i < numberList.length - 1) {
// 			number.push(numberList[i - 1] + numberList[i + 1]);
// 		}
// 		if (i === numberList.length - 1 && i !== 0 && i > 2) {
// 			number.push(numberList[i - 1]);
// 		}
// 	}
// 	return number;
// }

//  transformNumbersV2
// using forEach()
// function transformNumbersV2(numberList) {
// 	if (!Array.isArray(numberList) || numberList.length === 0) {
// 		return [];
// 	}

// 	let newArr = [];
// 	let arr = [];
// 	if (numberList.length === 1) {
// 		arr.push(numberList[0]);
// 	}
// 	numberList.forEach(function (e, i) {
// 		if (i === 0) {
// 			newArr.push(numberList[i + 1]);
// 		}
// 		if (i === numberList.length - 1) {
// 			newArr.push(numberList[i - 1]);
// 		}
// 		if (i > 0 && i < numberList.length - 1) {
// 			newArr.push(numberList[i - 1] + numberList[i + 1]);
// 		}
// 	});
// 	if (arr.length === 1) {
// 		return arr;
// 	}
// 	return newArr;
// }
// transformNumbersV4
// using map()
// function transformNumbersV4(numberList) {
// 	let newArr = [];
// 	let newArray = [];
// 	const number = numberList.map((x, i) => {
// 		if (i === 0) {
// 			newArr.push(numberList[i + 1]);
// 		}
// 		if (i === numberList.length - 1) {
// 			newArr.push(numberList[i - 1]);
// 		}
// 		if (i > 0 && i < numberList.length - 1) {
// 			newArr.push(numberList[i - 1] + numberList[i + 1]);
// 		}
// 		if (numberList.length === 1) {
// 			newArray.push(numberList[i]);
// 		}
// 	});
// 	if (newArray.length === 1) {
// 		return newArray;
// 	}
// 	return newArr;
// }
// console.log(transformNumbersV4([2, 4, 6, 8]));

// hasPrimeV1
// function hasPrimeV1(numberList) {
// 	if (!Array.isArray(numberList) || numberList.length === 0) {
// 		return false;
// 	}
// 	for (let i = 0; i < numberList.length; i++) {
// 		if (numberList[i] > 100) {
// 			return false;
// 		}
// 		if ((numberList[i] !== 1 && numberList[i] % 2 === 1) || numberList[i] === 2) {
// 			return true;
// 		}
// 	}

// 	return false;
// }

//  isPerfectNumber
// function isPerfectNumber(n) {
// 	if (n < 1 || n > 1000) {
// 		return false;
// 	}
// 	let sum = 0;
// 	for (let i = 1; i < n - 1; i++) {
// 		if (n % i === 0) {
// 			sum += i;
// 		}
// 	}
// 	if (sum === n) {
// 		return true;
// 	}
// 	return false;
// }

// isAllPerfectNumbersV1
// function isAllPerfectNumbersV1(numberList) {
// 	if (!Array.isArray(numberList) || numberList.length === 0) {
// 		return false;
// 	}
// 	let sum = 0;
// 	let sum2 = 0;
// 	for (let i = 0; i < numberList.length; i++) {
// 		let number = numberList[i];
// 		for (let n = 1; n < number - 1; n++) {
// 			if (number % n === 0) {
// 				sum += n;
// 			}
// 		}
// 		sum2 += number;
// 	}
// 	if (sum !== sum2) {
// 		return false;
// 	}
// 	return true;
// }

//  calcAvgOfAllEvenNumbers
// function calcAvgOfAllEvenNumbers(numberList) {
// 	if (!Array.isArray(numberList) || numberList.length === 0) {
// 		return 0;
// 	}
// 	let number = [];
// 	let sum = 0;
// 	for (let i = 0; i < numberList.length; i++) {
// 		if (numberList[i] % 2 === 0) {
// 			sum += numberList[i];
// 			number.push(numberList[i]);
// 		}
// 	}
// 	if (sum === 0) {
// 		return 0;
// 	}
// 	let sumNumber = Math.round(sum / number.length);
// 	return sumNumber;
// }
