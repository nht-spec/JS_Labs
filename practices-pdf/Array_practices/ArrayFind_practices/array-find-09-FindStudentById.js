export function findStudentById(studentList, studentId) {
	if (
		!Array.isArray(studentList) ||
		studentList.length === 0 ||
		typeof studentId !== 'number' ||
		studentId <= 0
	) {
		return -1;
	}
	let checkValue = -1;
	studentList.forEach((student, i) => {
		const checkId = student.id;
		if (checkId === studentId) {
			checkValue = i;
		}
	});
	return checkValue;
}
