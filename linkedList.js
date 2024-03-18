import Node from "./node.js";

export default class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	append(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.nextNode = newNode;
			this.tail = newNode;
		}
		this.size++;
	}

	prepend(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.nextNode = this.head;
			this.head = newNode;
		}
		this.size++;
	}

	size() {
		return this.size;
	}

	tail() {
		return this.tail;
	}

	head() {
		return this.head;
	}

	at(index) {
		if (index < 0 || index >= this.size) {
			return null;
		}
		let currentNode = this.head;
		for (let i = 0; i < index; i++) {
			currentNode = currentNode.nextNode;
		}
		return currentNode;
	}

	pop() {
		if (!this.head) {
			return null;
		}
		let currentNode = this.head;
		let prevNode = null;
		while (currentNode.nextNode) {
			prevNode = currentNode;
			currentNode = currentNode.nextNode;
		}
		if (prevNode) {
			prevNode.nextNode = null;
			this.tail = prevNode;
		} else {
			this.head = null;
			this.tail = null;
		}
		this.size--;
		return currentNode.value;
	}

	contains(value) {
		let currentNode = this.head;
		while (currentNode) {
			if (currentNode.value === value) {
				return true;
			}
			currentNode = currentNode.nextNode;
		}
		return false;
	}

	find(value) {
		let currentNode = this.head;
		let index = 0;
		while (currentNode) {
			if (currentNode.value === value) {
				return index;
			}
			currentNode = currentNode.nextNode;
			index++;
		}
		return null;
	}

	insertAt(value, index) {
		if (index < 0 || index > this.size) {
			return;
		}
		if (index === 0) {
			this.prepend(value);
		} else if (index === this.size) {
			this.append(value);
		} else {
			const newNode = new Node(value);
			let prevNode = this.at(index - 1);
			newNode.nextNode = prevNode.nextNode;
			prevNode.nextNode = newNode;
			this.size++;
		}
	}

	removeAt(index) {
		if (index < 0 || index >= this.size) {
			return null;
		}
		if (index === 0) {
			const removedValue = this.head.value;
			this.head = this.head.nextNode;
			this.size--;
			if (this.size === 0) {
				this.tail = null;
			}
			return removedValue;
		}
		let prevNode = this.at(index - 1);
		const removedValue = prevNode.nextNode.value;
		prevNode.nextNode = prevNode.nextNode.nextNode;
		if (index === this.size - 1) {
			this.tail = prevNode;
		}
		this.size--;
		return removedValue;
	}

	toString() {
		let result = "";
		let currentNode = this.head;
		while (currentNode) {
			result += `(${currentNode.value}) -> `;
			currentNode = currentNode.nextNode;
		}
		result += "null";
		return result;
	}
}
