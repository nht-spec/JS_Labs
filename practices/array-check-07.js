function isAlice(student) {
	return student.gender === 'female' && student.name.toLowerCase() === 'alice';
}
export function hasAlice(studentList) {
	if (!Array.isArray(studentList) || studentList.length === 0) {
		return false;
	}
	for (let i = 0; i < studentList.length; i++) {
		const student = studentList[i];
		if (isAlice(student)) return true;
	}
	return false;
}
// for earch
export function hasAlice2(studentList) {
	if (!Array.isArray(studentList) || studentList.length === 0) {
		return false;
	}
	let hasAliceFlag = false;
	studentList.forEach((student) => {
		if (isAlice(student)) hasAliceFlag = true;
	});
	return hasAliceFlag;
}
// find
export function hasAlice3(studentList) {
	if (!Array.isArray(studentList) || studentList.length === 0) {
		return false;
	}
	return Boolean(studentList.find(isAlice));
}
// find index

export function hasAlice4(studentList) {
	if (!Array.isArray(studentList) || studentList.length === 0) {
		return false;
	}
	return studentList.findIndex(isAlice) >= 0;
}
// filter
export function hasAlice5(studentList) {
	if (!Array.isArray(studentList) || studentList.length === 0) {
		return false;
	}
	return studentList.filter(isAlice).length > 0;
}
