export function findLastStudentHavingMinAvg(studentList) {
	if (!Array.isArray(studentList) || studentList.length === 0) {
		return undefined;
	}
	let checkValue = [];
	let checkValuev2 = [];
	let checkUndefined = undefined;
	studentList.forEach((student) => {
		const checkSum = (student.math + student.english) / 2;
		checkValue.push(checkSum);
	});
	let checkNumber = Math.min(...checkValue);
	studentList.forEach((student) => {
		if (student.math > 10 || student.english > 10) {
			return checkUndefined;
		}
		const checkSumv2 = (student.math + student.english) / 2;
		if (checkNumber === checkSumv2) {
			checkValuev2.push(student);
		}
	});
	return checkValuev2[checkValuev2.length - 1];
}
