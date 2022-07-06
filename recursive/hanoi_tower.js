class Node {
  constructor(value) {
    //¿Cuáles son las propiedades/atributos?
    this.next = null;
    this.value = value;
  }
}

class Stack {
  constructor(size) {
    //¿Cuáles son las propiedades/atributos?
    this.top = null;
    this.maxSize = size;
    this.size = 0;
  }

  //add insert push -> agregar un elemento
  push(value) {
    let newNode = new Node(value);
    //Agregar el elemento solamente si la pila aún no está llena
    if (this.size !== this.maxSize && !this.top) {
      //Podemos agregar el elemento en la pila
      this.top = newNode;
    } else if (this.size !== this.maxSize && this.top) {
      newNode.next = this.top;
      this.top = newNode;
    } else {
      return console.log('Error: la pila está llena');
    }
    this.size++;
    return this;
  }

  //pop delete remove -> borrar un elemento
  pop() {
    //1. Cuando no nos queden elementos en nuestra estructura de datos
    if (this.size === 0) {
      return null;
    }
    //2. Cuando tengamos elementos en nuestra estructura de datos
    const topNode = this.top;
    this.top = this.top.next;
    this.size--;
    return topNode;
  }

  peek() {
    return this.top;
  }

  isFull() {
    return this.size === this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }

  traverse() {
    //Obtener una lista con todos los nodos de la pila
    let currentNode = this.top;
    let list = [];
    while (currentNode) {
      let tempNode = Object.assign({}, currentNode);
      tempNode.next = null;
      list.push(tempNode);
      currentNode = currentNode.next;
    }
    return list;
  }
}

class Tower {
  constructor() {
    //¿Cuáles son las propiedades/atributos?
    this.stack = new Stack(); //Almacen de discos
  }

  add(disk) {
    //Un valor nuevo en una torre debe ser menor al valor existente en la cabeza
    if (this.stack.isEmpty() || disk < this.stack.top.value) {
      this.stack.push(disk);
    }
  }

  moveTopTo(destinationTower) {
    //mover el disco que se encuentra en top
    //hacia la torre destino
    if (this.stack.top !== null) {
      let disk = this.stack.top.value;
      this.stack.pop(); //Quitamos el disco que se encuentra en top
      destinationTower.add(disk);
    }
  }
}

const tower1 = new Tower();
const tower2 = new Tower();
const tower3 = new Tower();

// tower1.add(3);
tower1.add(2);
tower1.add(1);

function rec(n, origin, destination, aux) {
  if (n === 0) {
    return;
  }

  rec(n - 1, origin, aux, destination);
  origin.moveTopTo(destination);
  rec(n - 1, aux, destination, origin);
}

// n(1) 1 -> 3
// n(2) | 1 -> 2 | 1 -> 3 | 2 -> 3 |
// n(3) | 1 -> 3 | 1 -> 2 | 3 -> 2 | 1 -> 3 | 2 -> 1 | 2 -> 3 | 1 -> 3 |
// n(4) |

rec(2, tower1, tower3, tower2);
console.log('Origen', JSON.stringify(tower1));
console.log('Aux', JSON.stringify(tower2));
console.log('Destino', JSON.stringify(tower3));
