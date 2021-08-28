function createLinkedList() {
	let head = null;
	let tail = null;
	function insertTail(data) {
		const newNode = {
			data: data,
			next: null,
		};
		if (head == null) {
			head = newNode;
			tail = head;
			return;
		}
		tail.next = newNode;
		tail = newNode;
		return head;
	}

	function printList() {
		if (head == null) return;

		let current = head;
		while (current != null) {
			console.log(current.data);

			current = current.next;
		}
	}

	return {
		insertTail,
		printList,
	};
}
const numberLinkedList = createLinkedList();
numberLinkedList.insertTail(2);
numberLinkedList.insertTail(3);

numberLinkedList.printList();
