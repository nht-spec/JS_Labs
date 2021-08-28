export function findAllStudents(studentList) {
	if (!Array.isArray(studentList) || studentList.length === 0) {
		return [];
	}
	let checkValue = [];
	studentList.forEach((student) => {
		const { math } = student;
		if (math < 5) {
			checkValue.push(student);
		}
	});
	return checkValue;
}
