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
