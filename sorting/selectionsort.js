function selectionSort(arr) {
  //1. ¿Que variables necesito?
  // temp, indices, longitud, numberMax
  //2. Definir las variables
  let i,
    j,
    temp,
    numberMax,
    length = arr.length;

  for (i = 0; i < length; i++) {
    numberMax = 0;
    for (j = 0; j < length - i; j++) {
      if (arr[j] > arr[numberMax]) {
        numberMax = j;
      }
    }
    temp = arr[length - i - 1];
    arr[length - i - 1] = arr[numberMax];
    arr[numberMax] = temp;
  }
  return arr;
} //O(n^2)

let numbers = [40, 21, 39, 12, 83, 11, 93, 76, 13, 1];

console.log(selectionSort(numbers));
