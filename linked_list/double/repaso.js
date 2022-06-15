class Node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

class LinkedListDoubly {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  traverse() {
    let currentNode = this.head;
    let list = [];
    while (currentNode) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return list;
  }

  reverse() {
    let currentNode = this.tail;
    let list = [];
    while (currentNode) {
      list.push(currentNode.value);
      currentNode = currentNode.prev;
    }
    return list;
  }
}

const myLinkedList = new LinkedListDoubly();
myLinkedList.insert(3);
myLinkedList.insert(2);
myLinkedList.insert(1);
console.log(myLinkedList.traverse());
console.log(myLinkedList.reverse());
