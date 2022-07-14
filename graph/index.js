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

  showConnections(source) {
    const currentNode = this.adjacentList[source];
    let connections = '';
    for (let vertex of currentNode) {
      connections += vertex + ',';
    }
    console.log(source, '--->', connections);
  }

  dfsRecursive(vertex, visited) {
    //Primero vamos a marcar el vertice o nodo como visitado
    visited[vertex] = true;
    let neighbors = this.adjacentList[vertex];

    console.log(vertex, '');

    for (let i = 0; i < neighbors.length; i++) {
      let node = neighbors[i];
      if (!visited[node]) {
        this.dfsRecursive(node, visited);
      }
    }
  }

  dfs(vertex) {
    let noVertex = this.adjacentList.length;
    let visited = new Array(noVertex).fill(false);
    //[false, false, false, false]
    this.dfsRecursive(vertex, visited);
  }

  bfs(vertex) {
    let noVertex = this.adjacentList.length;
    const visited = new Array(noVertex).fill(false); //Registro de los nodos que he visitado
    let queue = [vertex];
    while (queue.length > 0) {
      let visiting = queue.shift(); //Eliminar el primer elemento de la lista
      let neighbors = this.adjacentList[visiting];
      console.log(visiting);
      for (let i = 0; i < neighbors.length; i++) {
        if (!visited[neighbors[i]]) {
          visited[neighbors[i]] = true; //Marcamos al vertice como visitado
          queue.push(neighbors[i]); //Agregamos a la cola
        }
      }
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex(0);
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addVertex(5);

myGraph.addEdge(0, 1);
myGraph.addEdge(0, 3);
myGraph.addEdge(1, 2);
myGraph.addEdge(2, 4);
myGraph.addEdge(2, 5);
myGraph.addEdge(3, 4);
myGraph.addEdge(4, 5);
// myGraph.dfs(0);
myGraph.bfs(0);
// console.log(myGraph.adjacentList);
