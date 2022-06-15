class Stack {
  constructor(length) {
    this.data = [];
    this.top = null;
    this.size = 0;
    this.maxSize = length;
  }

  push(value) {
    //Validar que la pila no haya llegado al limite
    if (this.size < this.maxSize) {
      this.data.push(value);
      this.top = value;
      this.size++;
      return this.data;
    }
    return new Error('La pila está llena');
  }

  pop() {
    const lastItem = this.data.pop();
    if (this.size - 1 > 0) {
      this.size--;
      this.top = this.data[this.size - 1];
    } else {
      this.top = null;
      this.size = 0;
    }
    return lastItem;
  }

  peek() {
    //Regresa el elemento que se encuentra en la cima
    return this.top;
  }

  isEmpty() {
    return this.data.length < 1;
  }

  isFull() {
    return this.size === this.maxSize;
  }
}

const myStack = new Stack(5); //Creamos una pila de tamaño 5
myStack.push(5);
myStack.push(3);
myStack.push(2);
myStack.push(1);
myStack.push(7);
myStack.push(10); //Error sobrepasaste el tamaño de la pila

// myStack.pop();
// myStack.pop();
// myStack.pop();
// myStack.pop();
// myStack.pop();
console.log(myStack.isFull());
