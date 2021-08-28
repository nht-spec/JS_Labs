export function hasStudent(studentList, studentId) {
	if (
		!Array.isArray(studentList) ||
		studentList.length === 0 ||
		typeof studentId !== 'number' ||
		studentId < 0
	) {
		return false;
	}
	let checkValue = false;
	studentList.forEach((student) => {
		if (student.id === studentId) {
			checkValue = true;
		}
	});
	return checkValue;
}
