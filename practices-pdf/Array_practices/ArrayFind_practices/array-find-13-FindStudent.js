export function findStudent(studentList) {
	if (!Array.isArray(studentList) || studentList.length === 0) {
		return undefined;
	}
	let checkValue = [];
	for (let i = 0; i < studentList.length; i++) {
		const { math, english, programming } = studentList[i].marks;
		let a = 0;
		let b = 0;
		let c = 0;
		if (math < 5) a = math;
		if (english < 5) b = english;
		if (programming < 5) c = programming;
		if (a !== 0 && b === 0 && c === 0) {
			checkValue.push(studentList[i]);
		}
		if (a === 0 && b !== 0 && c === 0) {
			checkValue.push(studentList[i]);
		}
		if (a === 0 && b === 0 && c !== 0) {
			checkValue.push(studentList[i]);
		}
	}
	return checkValue[0];
}
