function snail(arr) {
  let rows = 0;
  let columns = 0;
  let columnsLimit = arr[0].length;

  while (rows < 3) {
    // columns = 0;
    console.log(arr[columns][rows]);
    if (columns === columnsLimit || columns === 0) {
      rows++;
      continue;
    } else {
      columns++;
    }
  }
}

//[0][0], [1][0], [2][0]
//[2][1], [2][2], [1][2]
//[0][2], [0][1], [1][1]

let numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
snail(numbers);
