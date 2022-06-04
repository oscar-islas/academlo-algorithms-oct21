function foo(array) {
  let pasos = 0;
  for (let i = 0; i < array.length; i++) {
    //O(n)
    for (let j = 0; j < array.length; j++) {
      //O(n)
      // console.log(array[j]);
      pasos++;
    }
  }
  console.log(pasos);
}

let numbers = [1, 2, 3, 4, 5, 6];
foo(numbers);

//O(n^2) -> O(4^2) -> O(16)
