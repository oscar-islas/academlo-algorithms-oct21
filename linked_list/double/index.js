class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
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
      //El nuevo nodo en el puntero next (next) a la cabeza
      newNode.next = this.head;
      //El nodo de la cabeza en el puntero (prev) al nuevo nodo
      this.head.prev = newNode;
      //Apuntamos la cabeza al nuevo nodo
      this.head = newNode;
    }
    this.size++;
  }

  traverse() {
    let list = [];
    //1. crear nuestro currentNode
    let currentNode = this.head;
    //2. colocar mi while
    while (currentNode) {
      //3. meter los valores en la lista
      list.push(currentNode.value);
      //4. Continuar visitando los siguientes nodos...
      currentNode = currentNode.next;
    }
    return list;
  }

  reverse() {
    let list = [];
    //1. crear nuestro currentNode
    let currentNode = this.tail;
    //2. colocar mi while
    while (currentNode) {
      //3. meter los valores en la lista
      list.push(currentNode.value);
      //4. Continuar visitando los siguientes nodos...
      currentNode = currentNode.prev;
    }
    return list;
  }

  insertAfter(index, value) {}

  insertBefore(index, value) {}
}

const myDoublyLinkedList = new LinkedListDoubly();
myDoublyLinkedList.insert(10);
myDoublyLinkedList.insert(8);
myDoublyLinkedList.insert(6);
myDoublyLinkedList.insert(4);
myDoublyLinkedList.insert(2);
myDoublyLinkedList.insert(0);
console.log(myDoublyLinkedList.traverse());
console.log(myDoublyLinkedList.reverse());
