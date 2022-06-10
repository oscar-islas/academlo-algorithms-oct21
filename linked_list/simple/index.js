class Node {
  constructor(value) {
    this.value = value; //Valor
    this.next = null; //Puntero
  }
}

class LinkedList {
  constructor() {
    this.head = null; //Cabeza
    this.size = 0;
  }

  insert(value) {
    let newNode = new Node(value); //Creamos el nodo
    if (!this.head) {
      //Cuando la lista enlazada está vacia
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  } //O(1)

  search(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  } //O(n)

  deleteHead() {
    if (!this.head) {
      return false;
    }
    this.head = this.head.next;
  } //O(1)

  delete(value) {
    let currentNode = this.head;
    //Si el nodo que estoy tratando de eliminar es la cabeza
    if (currentNode.value === value) {
      this.head = this.head.next;
    }
    while (currentNode) {
      if (currentNode.next && currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
    }
    return value;
  } //O(n)

  traverse() {
    let list = [];
    let currentNode = this.head;
    while (currentNode) {
      list.push(currentNode.value);
      //Continuo con el siguiente nodo?
      currentNode = currentNode.next;
    }
    return list;
  }
}

const newLinkedList = new LinkedList();
newLinkedList.insert(5);
newLinkedList.insert(5);
newLinkedList.insert(5);
newLinkedList.insert(12);
newLinkedList.insert(15);
newLinkedList.insert(15);
newLinkedList.insert(20);

function removeD(linkedList) {
  let list = [];
  let currentNode = linkedList.head;
  while (currentNode) {
    let temp = currentNode;
    while (temp && temp.value === currentNode.value) {
      temp = temp.next;
    }
    list.push(currentNode.value);
    currentNode.next = temp;
    currentNode = currentNode.next;
  }

  return list;
}

console.log(removeD(newLinkedList));
console.log(JSON.stringify(newLinkedList.head));
