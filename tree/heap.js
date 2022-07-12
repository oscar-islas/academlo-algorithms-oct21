class Heap {
  //Min heap
  constructor() {
    //Propiedad o caracteristica de Heap
    this.data = [];
  }

  insert(value) {
    this.data.push(value);
    this.moveUp(this.data.length - 1);
  }

  remove() {}

  moveUp(index) {
    let element = this.data[index];

    while (index > 0) {
      let parentIndex = Math.ceil((index - 1) / 2); //Indice del nodo padre
      let value = this.data[parentIndex]; //Valor del nodo padre

      if (element > value) break; //Si el elemento que acabamos de insertar es mayor que el padre

      //Si es menor al padre -> intercambio
      let father = this.data.splice(parentIndex, 1, element);
      this.data.splice(index, 1, father[0]);
      index = parentIndex;
    }
  }
}

//Min heap
const myHeap = new Heap();
myHeap.insert(10);
myHeap.insert(6);
myHeap.insert(2);
myHeap.insert(1);
myHeap.insert(7);
console.log(myHeap.data);
