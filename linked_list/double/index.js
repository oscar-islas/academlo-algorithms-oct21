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

  remove(index) {
    let currentNode = this.head;
    let count = 0;
    if (index === 0) {
      this.head = currentNode.next;
      this.head.prev = null;
    } else {
      let prevNode = {},
        nextNode = {};
      while (count <= index) {
        prevNode = currentNode.prev;
        nextNode = currentNode.next;
        if (count === index) {
          prevNode.next = nextNode;
          nextNode.prev = prevNode;
        }
        count++;
        currentNode = currentNode.next;
      }
    }
    this.size--;
  }

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
myDoublyLinkedList.remove(3);
console.log(myDoublyLinkedList.traverse());
console.log(myDoublyLinkedList.reverse());

/* Tienes dos numeros representados por una lista enlazada, donde cada nodo
 * contiene un unico digito. Los digitos se almacenan en orden inverso, de modo
 * que el dígito del primero está al principio de la lista
 * Ejemplo:
 * Input: (7->1->6) + (5 -> 9 -> 2) 617 + 295
 * Output: 2 -> 1 -> 9  = 912
 */
function sumLists(list1, list2) {
  let carry = 0;
  let listResult = new LinkedListDoubly();
  if (!list1 && !list2) {
    return null;
  }

  let currentNode1 = list1.tail;
  let currentNode2 = list2.tail;
  while (currentNode1) {
    let sum = currentNode1.value + currentNode2.value + carry;
    carry = 0;
    if (sum > 9) {
      carry = Number(sum.toString()[0]);
      listResult.insert(Number(sum.toString()[1]));
    } else {
      listResult.insert(sum);
    }
    currentNode1 = currentNode1.prev;
    currentNode2 = currentNode2.prev;
  }

  return listResult.traverse();
}

// let l1 = new LinkedListDoubly();
// l1.insert(7);
// l1.insert(1);
// l1.insert(6);
// let l2 = new LinkedListDoubly();
// l2.insert(5);
// l2.insert(9);
// l2.insert(2);
// console.log(sumLists(l1, l2));
