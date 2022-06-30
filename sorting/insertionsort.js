function insertionSort(arr) {
  let i,
    j,
    length = arr.length;

  for (i = 0; i < length; i++) {
    if (arr[i - 1] > arr[i]) {
      console.log('Iterador I', arr[i - 1], arr[i]);
      for (j = i; j > 0; j--) {
        console.log('Iterador J', arr[j - 1], arr[i]);
        if (j - 1 === 0 && arr[i] < arr[0]) {
          let sortNumber = arr.splice(i, 1)[0];
          arr.unshift(sortNumber);
          break;
        }
        if (arr[j - 1] <= arr[i]) {
          //Sacar el numero arr[i]
          let sortNumber = arr.splice(i, 1)[0];
          //Colocarlo en la posición de j
          arr.splice(j, 0, sortNumber);
          break;
        }
      }
    }
  }
  return arr;
}

console.log(insertionSort([1, 3, 4, 5, 2, 6, 9, 5, 7]));

//[2, 3, 4, 8, 6, 1, 0, 9, 5, 7]
