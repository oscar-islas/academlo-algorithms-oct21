function foo(n) {
  if (n === 1) {
    return 1;
  }
  return foo(n - 1);
}

// console.log(foo(5));

function factorial(n) {
  //Caso base
  if (n === 1) {
    return 1;
  }
  //Caso recursivo
  return n * factorial(n - 1);
}

function fib(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

//Dynamic Programming -> DP
function fibDP(n, memo) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  if (memo[n] === 0) {
    memo[n] = fibDP(n - 1, memo) + fibDP(n - 2, memo);
  }

  return memo[n];
}

// let n = 50;
// let memoArr = new Array(n + 1).fill(0);
// console.log(fibDP(n, memoArr));
// console.log(fib(n));

function tripleStep(n) {
  if (n === 0) {
    return 1;
  }

  if (n < 0) {
    return 0;
  }

  return tripleStep(n - 1) + tripleStep(n - 2) + tripleStep(n - 3);
}
//O(3^n)

function tripleStepDP(n, memo) {
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
}

let n = 1000;
let memoArr = new Array(n + 1).fill(0);
console.log(tripleStepDP(n, memoArr));
// console.log(tripleStep(n));
