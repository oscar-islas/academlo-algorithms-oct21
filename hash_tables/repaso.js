//O(1) -> Tiempo constante
//O(n) -> Tiempo lineal
//O(n^2) -> Tiempo cuadratico
// =========================
//O(log n) -> En cada iteración reducimos a la mitad el tamaño de la entrada 10 -> 5 -> 3 -> 1
//O(n log n) -> En cada iteración reducimos a la mitad el tamaño de la entrada 10 -> 5 -> 3 -> 1
//O(2^n) -> Cuando tenemos funciones recursivas
//O(n!) -> Funciones recursivas pero que en su cuerpo tienen un ciclo 5*4*3*2*1

// function permutation(str){
//   permutationRecursive(str, "");
// }

// function permutationRecursive(str, prefix){
//   if(str.length === 0){
//     console.log(prefix);
//     return prefix;
//   }else{
//     for(let i = 0; i < str.length; i++){ //O(n)
//       let rem = str.substring(0, i) + str.substring(i + 1);
//       permutationRecursive(rem, prefix + str.charAt(i));
//     }
//   }
// }

//1. Peor de los casos
//2. Debemos de colocar terminos diferentes a las entradas
//3. Quitar las constantes
//4. Quitar los terminos no dominantes

// items -> n
// match -> m
function findIndex(items, match) {
  let total = items.length; //O(1)
  for (let i = 0; i < total; i++) {
    //O(n)
    if (items[i] == match) return i; //O(1) -> 1*n ->
  }
  return -1; //O(1)
}
//O(2+n) -> O(n)

//Peor Caso (Worst Case):

// items -> n
function buildSquareMatrix(items) {
  let matrix = []; //O(1)
  let total = items.length; //O(1)
  for (let i = 0; i < total; i++) {
    //O(n)
    matrix[i] = [];
    for (let j = 0; j < total; j++) {
      //O(n)
      matrix[i].push(items[j]);
    }
  }
  return matrix; //O(1)
}
//O(3 + n*n) -> O(n*n) -> O(n^2)

//Peor Caso (Worst Case):

function funChallenge(arrayA, arrayB) {
  let total = arrayA.length;
  for (let i = 0; i < total; i++) {
    for (let j = i + 1; j < total; j++) {
      console.log(arrayA[i]);
    }
  }
}

//Peor Caso (Worst Case):

// arrayA -> a
// arrayB -> b
function anotherFunChallenge(arrayA, arrayB) {
  let total = arrayA.length;
  let totalB = arrayB.length;
  for (let i = 0; i < total; i++) {
    //O(a)
    for (let j = i + 1; j < totalB; j++) {
      //O(b)
      console.log(arrayA[i]);
    }
  }
}

//O(a*b) -> O(ab)

//Peor Caso (Worst Case):

function fooChallenge(arrayA, arrayB, arrayC) {
  let total = arrayA.length;
  let totalB = arrayB.length;
  let totalC = arrayC.length;
  for (let i = 0; i < total; i++) {
    for (let j = 0; j < totalB; j++) {
      for (let k = 0; k < totalC; k++) {
        console.log(arrayA[i]);
      }
    }
  }
}

//Peor Caso (Worst Case):

function anotherFooChallenge(array) {
  for (let j = 0; j < array.length; j++) {
    console.log(array[j]);
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[j]);
    }
  }
}

//Peor Caso (Worst Case):

function barChallenge(arrayA, arrayB, arrayC) {
  let total = arrayA.length;
  let totalB = arrayB.length;
  let totalC = arrayC.length;

  for (let i = 0; i < total; i++) {
    for (let k = 0; k < totalC; k++) {
      console.log(arrayA[i]);
    }
  }

  for (let i = 0; i < totalB; i++) {
    console.log(arrayB[i]);
  }
}

//Peor Caso (Worst Case):

function anotherBarChallenge(arrayA, arrayB, arrayC) {
  let total = arrayA.length;
  let totalB = arrayB.length;
  let totalC = arrayC.length;

  for (let i = 0; i < total; i++) {
    for (let k = 0; k < totalC; k++) {
      console.log(arrayA[i]);
    }
  }

  for (let i = 0; i < totalB; i++) {
    console.log(arrayB[i]);
  }
}

//Peor Caso (Worst Case):

function eChallenge(str) {
  let re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  let len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

//Peor Caso (Worst Case):
