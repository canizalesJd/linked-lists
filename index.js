import LinkedList from "./linkedList.js";

const list = new LinkedList();
list.append(1);
list.append(2);
list.prepend(0);
list.insertAt(1.5, 2);
list.removeAt(3);
console.log(list.toString()); // Output: (0) -> (1) -> (1.5) -> (2) -> null
console.log(list.size); // Output: 3
console.log(list.head.value); // Output: 0
console.log(list.tail.value); // Output: 2
console.log(list.contains(1.5)); // Output: true
console.log(list.find(1)); // Output: 1
list.pop();
console.log(list.toString()); // Output: (0) -> (1) -> (1.5) -> null
console.log(list.size); // Output: 3
