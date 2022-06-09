class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(value) {
    //Crear un nuevo nodo

    //Cuando es el primer nodo en lista
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  search(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

const myLinkedList = new LinkedList();
myLinkedList.insert(40);
myLinkedList.insert(30);
myLinkedList.insert(20);
myLinkedList.insert(10);
console.log(JSON.stringify(myLinkedList.head));
