export function hasAlice(studentList) {
	if (!Array.isArray(studentList) || studentList.length === 0) {
		return false;
	}
	let checkValue = false;
	studentList.forEach((student) => {
		const checkName = student.name.toLowerCase();
		if (checkName === 'alice' && student.gender === 'female') {
			checkValue = true;
		}
	});
	return checkValue;
}
