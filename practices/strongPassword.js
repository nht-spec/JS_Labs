function isStrongPassword(password) {
	if (typeof password !== 'string' || password.length < 8) {
		return false;
	}
	let arr = password.split('');
	let checkSpecCharacter = '';
	let checkUperCase = '';
	let checkLowerCase = '';
	let checkNumber = 0;
	let specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
	for (let i = 0; i < arr.length; i++) {
		let element = arr[i];
		specialCharacter.filter((spec) => {
			if (element === spec) {
				checkSpecCharacter = element;
			}
		});
	}
	arr.filter((x) => {
		if (Number.parseInt(x)) {
			checkNumber = x;
		}
		if (Number.parseFloat(x) !== Number.parseFloat(x) && x === x.toUpperCase()) {
			checkUperCase = x;
		}
		if (Number.parseFloat(x) !== Number.parseFloat(x) && x === x.toLowerCase()) {
			checkLowerCase = x;
		}
	});
	if (
		checkUperCase.length !== 0 &&
		checkLowerCase.length !== 0 &&
		checkNumber !== 0 &&
		checkSpecCharacter.length !== 0
	) {
		return true;
	}
	return false;
}
