function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const length = arr.length;
  const middleIndex = Math.floor(length / 2);
  const leftSide = arr.slice(0, middleIndex);
  const rightSide = arr.slice(middleIndex);
  return merge(mergeSort(leftSide), mergeSort(rightSide));
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([7, 3, 2, 16, 24, 4, 11, 9]));
