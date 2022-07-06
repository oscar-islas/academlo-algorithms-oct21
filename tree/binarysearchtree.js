class Node {
  constructor(value) {
    //Las propiedades / atributos de un node de BST
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    //La propiedad / atributo de un BST
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    let currentNode = this.root;
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      while (currentNode) {
        if (newNode.value > currentNode.value) {
          //El nuevo nodo es mayor al nodo raíz? -> Si, entonces revisar si existe un nodo a la derecha
          //Derecha
          if (!currentNode.right) {
            //Comprobar si existe algo
            currentNode.right = newNode;
            break;
          } else {
            //Si existe un nodo a la derecha ->
            currentNode = currentNode.right;
          }
        } else if (currentNode.value === newNode.value) {
          break;
        } else {
          //Izquierda
          if (!currentNode.left) {
            //Comprobar si existe algo
            currentNode.left = newNode;
            break;
          } else {
            //Si existe un nodo a la izquierda ->
            currentNode = currentNode.left;
          }
        }
      }
    }
    return this;
  }

  search(value) {
    //¿Qué es lo primero que tendríamos que hacer?
    // Comprobar si tenemos un nodo en la raíz
    if (!this.root) {
      return null;
    }

    if (this.root.value === value) {
      // Comprobamos si la raíz contiene el numero que estamos buscando
      return true;
    }
    let currentNode = this.root;
    // Un ciclo
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }

      if (value < currentNode.value) {
        //Del lado izquierdo
        currentNode = currentNode.left;
      } else {
        //Del lado derecho
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  findMin() {
    //¿Cuál es el primer paso?
    let currentNode = this.root;
    if (!currentNode) {
      return null;
    }

    //Si el árbol tiene nodos... ¿qué tengo que hacer?
    while (currentNode.left) {
      //Para visitar los nodos de la izquierda
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  //¿Coste?
  //Caso promedio: O(log n)
  //Peor caso: O(n)

  findMax() {
    let currentNode = this.root;
    if (!currentNode) {
      return null;
    }

    //Si el árbol tiene nodos... ¿qué tengo que hacer?
    while (currentNode.right) {
      //Para visitar los nodos de la izquierda
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }
  //¿Coste?
  //Caso promedio: O(log n)
  //Peor caso: O(n)

  inOrder() {
    let currentNode = this.root;
    if (!currentNode) {
      return null;
    }

    let list = [];

    function traverse(currentNode) {
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      list.push(currentNode.value);
      if (currentNode.right) {
        traverse(currentNode.right);
      }
    }
    traverse(currentNode);
    return list;
  }

  postOrder() {}

  preOrder() {
    //Como si estuvieramos construyendo el árbol
  }
  //¿Coste?
  //Peor de los casos: O(n)
}

const myBST = new BinarySearchTree();
myBST.insert(10);
myBST.insert(5);
myBST.insert(20);
myBST.insert(30);
myBST.insert(3);
myBST.insert(9);
myBST.insert(15);
myBST.insert(25);
myBST.insert(2);
console.log(myBST.findMin());
console.log(myBST.findMax());
console.log(myBST.inOrder());

console.log(JSON.stringify(myBST.root));
