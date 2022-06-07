function countPairsWithDiffK(arr, k) {
  let n = arr.length;
  let count = 0;
  let hashTable = {};
  // Insertamos todos los elementos del arreglo en la tabla hash

  for (let i = 0; i < n; i++) {
    hashTable[arr[i]] = true;
  }

  for (let j = 0; j < n; j++) {
    let x = arr[j];
    //Revisamos si la diferencia entre arr[j] - k existe como llave en la tabla hash
    if (x - k >= 0 && hashTable[x - k]) {
      count++;
    } else if (hashTable[x + k]) {
      count++;
    }
    hashTable[x] = false;
  }

  return count;
}

console.log(countPairsWithDiffK([8, 12, 16, 4, 0, 20], 4));
