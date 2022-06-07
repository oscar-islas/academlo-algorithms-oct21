function frequency(arr, x) {
  let count = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] == x) {
      count++;
    }
  }
  return count;
}

var hashTable = new Map();

function countFreq(arr) {
  let n = arr.length;
  // Insert elements and their
  // frequencies in hash map.
  for (let i = 0; i < n; i++) {
    if (hashTable.has(arr[i])) {
      hashTable.set(arr[i], hashTable.get(arr[i]) + 1);
    } else {
      hashTable.set(arr[i], 1);
    }
  }
}

// Return frequency of x (Assumes that
// countFreq() is called before)
function query(x) {
  if (hashTable.has(x)) {
    return hashTable.get(x);
  }
  return 0;
}

// Driver program
// var a = [1, 3, 2, 4, 2, 1];
// var n = a.length;
// countFreq(a, n);
// document.write(query(2) + '<br>');
// document.write(query(3) + '<br>');
// document.write(query(5) + '<br>');

let arr = [0, 5, 5, 5, 4];
let x = 5;

console.log(frequency(arr, x));
console.log(frequency(arr, 4));

countFreq(arr);
console.log(query(x));
console.log(query(4));
