//Implementación de una cola
//Basandonos en una lista enlazada
class Node {
  constructor(value) {
    /* ¿Cuáles son las dos propiedades/caracteristicas
     *    de un nodo de una lista enlazada?
     */
    this.prev = null;
    this.value = value;
  }
}

class Queue {
  constructor() {
    /* ¿Cuáles son las dos propiedades/caracteristicas
     *    de una cola?
     */
    this.rear = null;
    this.front = null;
    this.size = 0;
  }

  //¿Dos operaciones/métodos para construir nuestra cola?
  enqueue(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.prev = newNode;
      this.rear = newNode;
    }
    this.size++;
    return this;
  }

  dequeue() {
    this.size--;
  }
}

const myQueue = new Queue();
myQueue.enqueue(7);
myQueue.enqueue(2);
myQueue.enqueue(6);

console.log(JSON.stringify(myQueue.front));
