// PLEASE USE ALL OF THESE CONSTANTS IN YOUR CODE
// DO NOT USE HARDCODE NUMBER IN YOUR CODE
const K500_QUANTITY = 2;
const K200_QUANTITY = 5;
const K100_QUANTITY = 10;
const K50_QUANTITY = 100;

const K500_VALUE = 500000;
const K200_VALUE = 200000;
const K100_VALUE = 100000;
const K50_VALUE = 50000;

const BASE_UNIT = 50000;

function withdraw(amount) {
	if (amount > 8000000) {
		return 'Insufficient balance from ATM';
	}
	let sum = 0;
	let a = 0;
	let b = 0;
	let c = 0;
	let d = 0;
	let checkNumberK100 = 0;
	let K50_QUANTITY2 = 160;
	for (let i = 1; i <= K50_QUANTITY2; i++) {
		if (amount === BASE_UNIT * i) {
			sum += amount;
		}
	}
	if (sum === 0) {
		return 'Invalid balance';
	}
	let checkValueK50v2 = 0;
	if (sum > 3000000) {
		checkValueK50v2 = sum - 3000000;
	}
	const checkNumberthree = (sum % K100_VALUE) / 10000;
	let checkNumberk50 = 0;
	if (checkNumberthree === 5) {
		checkNumberk50 = sum - (sum - K50_VALUE);
		sum -= K50_VALUE;
	}
	for (x = 1; x <= K500_QUANTITY; x++) {
		const sumK500 = K500_VALUE * x;
		if (sum < K500_VALUE) {
			a = 0;
		}
		if (sum === sumK500 || x < 2 || sum > sumK500) {
			a = x;
		}
	}
	if (sum >= K500_VALUE && sum < K500_VALUE * 2) {
		sum -= K500_VALUE;
	}
	if (sum >= K500_VALUE * 2) {
		sum -= K500_VALUE * 2;
	}
	for (y = 1; y <= K200_QUANTITY; y++) {
		const sumK200 = K200_VALUE * y;
		const checkValueK200 = sum - K100_VALUE;
		if (sum === sumK200 || checkValueK200 === sumK200) {
			b = y;
		}
		if (sum > sumK200) {
			b = y;
		}
	}
	const validNumber = sum / 100000;
	const sumk500 = K500_VALUE * 2 + K100_VALUE;
	if (sum <= sumk500 && validNumber % 2 !== 0) {
		checkNumberK100 = sum - (sum - K100_VALUE);
	}
	for (z = 1; z <= K100_QUANTITY; z++) {
		const sumK100 = K100_VALUE * z;
		const checkSumk100 = sum - K500_VALUE * 2;
		if (checkNumberK100 === sumK100) {
			c = z;
		}
		if ((sum > sumk500 && checkSumk100 === sumK100) || checkSumk100 > sumK100) {
			c = z;
		}
	}
	for (v = 1; v <= K50_QUANTITY; v++) {
		const sumK50 = K50_VALUE * v;
		if (checkNumberk50 === sumK50 || checkValueK50v2 === sumK50) {
			d = v;
		}
	}
	let newObj = { k500: a, k200: b, k100: c, k50: d };
	return newObj;
}
console.log(withdraw(150000));
console.log(withdraw(200000));
console.log(withdraw(6950000));
console.log(withdraw(125000));
console.log(withdraw(9000000));
