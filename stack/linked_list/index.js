class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//LIFO (Last In First Out) -> último que entra es el primero en salir
class Stack {
  //StackOverflow ->
  constructor(maxSize) {
    this.top = null;
    this.size = 0;
    this.maxSize = maxSize;
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
}

const myStack = new Stack(5);
// myStack.push(2);
// myStack.push(3);
// myStack.push(4);
// myStack.push(5);
// myStack.push(6);
// myStack.push(7); //Este elemento no lo pudimos agregar ya que la pila está llena
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());
// //LIFO -> Last In First Out
// console.log(JSON.stringify(myStack.top), myStack.size);

// ==== Primer ejercicio ====
function checkBalance(str) {
  //Revisar si un string cuenta con parentesis balanceados

  //1. Revisar si la entrada es un string
  //2. Crear una pila
  //3. Itero sobre cada caracter del string
  const stack = new Stack(str.length);
  if (typeof str === 'string') {
    for (let i = 0; i < str.length; i++) {
      //4. Cuando tenga una apertura de parentesis -> voy agregar el parentesis en la pila
      if (str[i] === '(') {
        stack.push('(');
      } else if (str[i] === ')' && !stack.isEmpty()) {
        stack.pop();
      } else {
        return false;
      }
    }
  } else {
    return console.log('la entrada no es un string');
  }

  return stack.isEmpty();
}

// let parentesis = '(((((((';

// console.log(checkBalance(parentesis));

/*
Imagina un pila de platos. Si la pila llega a ser muy alta puede llegar a caerse. Por lo tanto en la vida real, iniciaríamos con una nueva pila de platos cuando la pila anterior haya alcanzado un límite en cuanto altura. Implementa un estructura de datos SetOfStacks que imite este comportamiento. SetOfStacks debe de estar compuesto por varias pilas y debe crear una nueva pila una vez que la pila anterior haya excedido su capacidad. SetOfStacks.push() y SetOfStacks.pop() deben comportarse idénticamente a cómo funciona una pila.
*/
//LIFO (Last In First Out) -> último que entra es el primero en salir
class Stack {
  //StackOverflow ->
  constructor(maxSize) {
    this.top = null;
    this.size = 0;
    this.maxSize = maxSize;
  }

  //add insert push -> agregar un elemento
  push(value) {
    let newNode = new Node(value);
    //Agregar el elemento solamente si la pila aún no está llena
    if (!this.isFull() && !this.top) {
      //Podemos agregar el elemento en la pila
      this.top = newNode;
    } else if (!this.isFull() && this.top) {
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
    if (this.isEmpty()) {
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
}

const mySetOfStacks = new SetOfStacks(5);

mySetOfStacks.push('-');
mySetOfStacks.push('-');
mySetOfStacks.push('-');
mySetOfStacks.push('-');
mySetOfStacks.push('-');
mySetOfStacks.push('-');
mySetOfStacks.push('-');
mySetOfStacks.push('-');
mySetOfStacks.push('-');
mySetOfStacks.push('-');
mySetOfStacks.push('-');
mySetOfStacks.push('-');
mySetOfStacks.pop();
mySetOfStacks.pop();
mySetOfStacks.pop();
mySetOfStacks.pop();
mySetOfStacks.pop();
mySetOfStacks.pop();
mySetOfStacks.pop();
mySetOfStacks.pop();
mySetOfStacks.pop();
mySetOfStacks.pop();
mySetOfStacks.pop();
mySetOfStacks.pop();
mySetOfStacks.pop();

console.log(mySetOfStacks.stacks);
