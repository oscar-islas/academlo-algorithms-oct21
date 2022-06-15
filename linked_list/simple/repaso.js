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
  //Numeros duplicados
  let list = [];
  let currentNode = linkedList.head;
  while (currentNode) {
    let temp = currentNode;
    while (temp && temp.value === currentNode.value) {
      if (temp.next && currentNode.value === temp.next.value) {
        list.push(temp.value);
      }
      temp = temp.next;
    }
    currentNode.next = temp;
    currentNode = currentNode.next;
  }
  return list;
}
//O(n*m)
// n -> cantidad de nodos de la lista enlaza
// m -> cantidad de nodos repetidos

function removeOptimize(linkedList) {
  let prev, temp;
  prev = linkedList.head;
  temp = linkedList.head;

  while (temp) {
    if (temp.value !== prev.value) {
      prev.next = temp;
      prev = temp;
    }
    temp = temp.next;
  }

  if (prev !== temp) {
    prev.next = null;
  }
}

//O(n)
// n -> todos los nodos de la lista enlazada

removeOptimize(newLinkedList);
console.log(JSON.stringify(newLinkedList.head));

// linkedList -> 20 -> 15 -> 15 -> 12 -> 5 -> 5 -> 5 -> null
// temp -> 20 -> 15 -> 15 -> 12 -> 5 -> 5 -> 5 -> (null)
// prev -> [ 20 -> 15 -> 12 -> 5 -> null ]
