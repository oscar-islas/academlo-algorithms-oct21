// Cuenta todos los pares distintos donde la diferencia sea igual a k

//Dado un arreglo de enteros positivos y un entero positivo k, cuenta todos los pares distintos cuya diferencia sea igual a k.

let numbers = [3, 4, 1, 5, 7, 2];
let k = 5;

/*
[3,2] -> 3 + 2 = 5
[4,1] -> 4 + 1 = 5
[7,2] -> 7 - 2 = 5
*/

//Fuerza bruta
function countPairs(arr, k) {
  let n = arr.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    //O(n)
    for (let j = i + 1; j < n; j++) {
      //O(n)
      if (arr[i] - arr[j] === k || arr[j] - arr[i] === k) {
        console.log(arr[i], arr[j]);
        count++;
      }
    }
  }

  return count;
}

//O(n^2)

console.log(countPairs(numbers, k));

//Optimizado
function countPairsOptimize(arr, k) {
  let n = arr.length;
  let count = 0;
  let hashTable = {};

  for (let i = 0; i < n; i++) {
    //O(n)
    hashTable[arr[i]] = true;
  }

  for (let j = 0; j < n; j++) {
    //O(n)
    let x = arr[j];

    if (x - k >= 0 && hashTable[x - k]) {
      console.log(x, x - k);
      count++;
    } else if (hashTable[x + k]) {
      console.log(x, x + k);
      count++;
    }
    hashTable[x] = false;
  }

  return count;
}
//O(n+n) -> O(2n) -> O(n)

console.log(countPairsOptimize(numbers, k));
