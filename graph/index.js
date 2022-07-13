class Graph {
  constructor() {
    this.adjacentList = [];
  }

  //addVertex addNode
  addVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = [];
    }
  }

  addEdge(source, destination) {
    //Dirigido
    if (!this.adjacentList[source]) {
      //Si no existe el nodo en la lista adyacente entonces
      //Agregamos el nodo
      this.addVertex(source);
    }
    this.adjacentList[source].push(destination);
  }
}

const myGraph = new Graph();
myGraph.addVertex(0);
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addVertex(3);

myGraph.addEdge(0, 1);
myGraph.addEdge(0, 3);
myGraph.addEdge(1, 3);
myGraph.addEdge(2, 0);
myGraph.addEdge(2, 1);
myGraph.addEdge(3, 2);
console.log(myGraph.adjacentList);
