export function findStudentHavingHighestMark(studentList) {
	if (!Array.isArray(studentList) || studentList.length === 0) {
		return undefined;
	}
	let checkPoint = undefined;
	let newArr = [];
	let newArrv2 = [];
	studentList.forEach((student) => {
		const checkValue = student.math;
		if (checkValue > 10) {
			return checkPoint;
		}
		newArr.push(checkValue);
	});
	checkPoint = Math.max(...newArr);
	studentList.forEach((student) => {
		if (student.math === checkPoint) {
			newArrv2.push(student);
		}
	});
	return newArrv2[0];
}
