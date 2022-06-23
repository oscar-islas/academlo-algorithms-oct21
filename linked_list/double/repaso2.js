class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedListDoubly {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    //1. Lista este vacia
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //2. Lista tenga nodos
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  pushAfter(value, index) {
    const newNode = new Node(value);
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (count === index) {
        //He llegado a la posición indicada
        let nextNode = currentNode.next;
        nextNode.prev = newNode;
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        newNode.prev = currentNode;
        this.size++;
        return;
      }
      count++;
      currentNode = currentNode.next;
    }
  }

  remove(index) {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (index === count) {
        let prevNode = currentNode.prev;
        let nextNode = currentNode.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        this.size--;
        return;
      }
      count++;
      currentNode = currentNode.next;
    }
  }

  traverse() {
    let list = [];
    let currentNode = this.head;
    while (currentNode) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return list;
  }

  reverse() {
    let list = [];
    let currentNode = this.tail;
    while (currentNode) {
      list.push(currentNode.value);
      currentNode = currentNode.prev;
    }
    return list;
  }
}

const myDoublyLinkedList = new LinkedListDoubly();
myDoublyLinkedList.push(10);
myDoublyLinkedList.push(8);
//7
myDoublyLinkedList.push(6);
myDoublyLinkedList.push(5);
myDoublyLinkedList.push(3);
// myDoublyLinkedList.pushAfter(7, 2);
myDoublyLinkedList.remove(2);
console.log(myDoublyLinkedList.traverse());
console.log(myDoublyLinkedList.reverse());
