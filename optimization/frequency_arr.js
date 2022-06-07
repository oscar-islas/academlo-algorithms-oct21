function countFreq(arr) {
  let n = arr.length;
  let visited = new Array(n).fill(false);

  // Traverse through array elements and
  // count frequencies
  for (let i = 0; i < n; i++) {
    // Skip this element if already processed
    if (visited[i] === true) {
      continue;
    }

    // Count frequency
    let count = 1;
    for (let j = i + 1; j < n; j++) {
      if (arr[i] == arr[j]) {
        visited[j] = true;
        count++;
      }
    }
    console.log(arr[i] + ' ' + count);
  }
}

function countFreq(arr, n) {
  let hashTable = new Map();

  // Traverse through array elements and
  // count frequencies
  for (var i = 0; i < n; i++) {
    if (hashTable.has(arr[i])) hashTable.set(arr[i], hashTable.get(arr[i]) + 1);
    else hashTable.set(arr[i], 1);
  }

  var keys = [];
  hashTable.forEach((value, key) => {
    keys.push(key);
  });
  keys.sort((a, b) => a - b);

  // Traverse through map and print frequencies
  keys.forEach((key) => {
    document.write(key + ' ' + mp.get(key) + '<br>');
  });
}

countFreq([10, 20, 20, 10, 10, 20, 5, 20]);
