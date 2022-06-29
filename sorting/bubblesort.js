function bubbleSort(arr) {
  let i, j, temp;
  let length = arr.length;

  for (i = 0; i < length - 1; i++) {
    for (j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //Intercambio -> Swap
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
} //O(n^2)

let numbers = [3, 4, 8, 2, 6, 1, 0, 9, 5, 7];
console.log(bubbleSort(numbers));
