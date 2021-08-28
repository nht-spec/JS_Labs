function countStudents(studentList) {
	if (!Array.isArray(studentList) || studentList.length === 0) {
		return 0;
	}
	let sumCheck = 0;
	studentList.forEach((student) => {
		for (const [key, value] of Object.entries(student)) {
			if (value === 'male') {
				sumCheck += 1;
			}
		}
	});
	return sumCheck;
}
