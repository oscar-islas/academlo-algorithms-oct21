class MyArray {
  constructor() {
    this.data = {};
    this.size = 0;
  }

  pop() {
    //Obtengo el último elemento del arreglo
    const lastValue = this.data[this.size - 1];
    delete this.data[this.size - 1];
    this.size--;
    return lastValue;
  }

  push(value) {
    this.data[this.size] = value;
    this.size++;
    return this.size;
  }
}

const numbers = new MyArray();

numbers.push(1);
numbers.push(2);
numbers.push(3);
numbers.push(7);
console.log(numbers.data);
console.log(numbers.pop());
console.log(numbers.data);
