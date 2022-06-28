function fib(n) {
  //fib(5) = fib(4) + fib(3) -> fib(n) = fib(n-1) + fib(n-2)
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}
//O(2^n)

// Dynamic Programming
function fibDP(n, memo) {
  //fib(5) = fib(4) + fib(3) -> fib(n) = fib(n-1) + fib(n-2)
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  if (memo[n] === 0) {
    //Aún no he guardado el calculo de fib(n-1) + fib(n-2)
    memo[n] = fibDP(n - 1, memo) + fibDP(n - 2, memo);
  }

  return memo[n];
} //O(n)

// let n = 50;
// let memoArr = new Array(n + 1).fill(0);
// console.log(fibDP(n, memoArr));

function tripleStep(n) {
  // tripleStep(4) = ?
  // tripleStep(3) = [1, 1, 1], [1, 2], [2, 1], [3] -> 4 [ triple(n-1) + triple(n-2) + triple(n-3) ]
  // tripleStep(2) = [1,1], [2] -> 2
  // tripleStep(1) = 1
  // tripleStep(0) = 1
  if (n === 0) {
    return 1;
  }

  if (n < 0) {
    return 0;
  }

  return tripleStep(n - 1) + tripleStep(n - 2) + tripleStep(n - 3);
} //O(3^n)

console.log('Triple Step sin programacion dinamica', tripleStep(35));

function tripleStepDP(n, memo) {
  // tripleStep(4) = ?
  // tripleStep(3) = [1, 1, 1], [1, 2], [2, 1], [3] -> 4 [ triple(n-1) + triple(n-2) + triple(n-3) ]
  // tripleStep(2) = [1,1], [2] -> 2
  // tripleStep(1) = 1
  // tripleStep(0) = 1
  if (n === 0) {
    return 1;
  }

  if (n < 0) {
    return 0;
  }

  if (memo[n] === 0) {
    memo[n] =
      tripleStepDP(n - 1, memo) +
      tripleStepDP(n - 2, memo) +
      tripleStepDP(n - 3, memo);
  }

  return memo[n];
} //O(n)

let input = 35;
let memoArr2 = new Array(input + 1).fill(0);
// console.log('Triple Step con DP', tripleStepDP(input, memoArr2));
