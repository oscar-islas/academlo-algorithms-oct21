function linearSearch(n, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (n === arr[i]) {
      return true;
    }
  }
  return false;
}

const searching = 6;
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(linearSearch(searching, list));
console.log(binarySearch(searching, list));

function binarySearch(n, arr) {
  let startIndex = 0;
  let endIndex = list.length - 1;

  while (startIndex <= endIndex) {
    // log n
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (arr[middleIndex] === n) {
      return true;
    } else if (arr[middleIndex] < n) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
  return false;
}
