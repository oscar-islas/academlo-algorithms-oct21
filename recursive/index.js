function foo(n) {
  //Caso base
  if (n === 1) {
    return 1;
  }
  //Llamada recursiva
  return 1 + foo(n - 1);
}

// console.log(foo(5));

//foo(5)
//foo(4)
//foo(3)
//foo(2)
//foo(1) -> hasta aquí llegamos al caso base

function factorial(n) {
  //Caso base
  if (n === 1) {
    return 1;
  }
  //Llamada recursiva
  return n * factorial(n - 1);
}

// console.log(factorial(5));

function sum(a, b) {
  //caso base
  if (b === 0) {
    return a;
  }
  return sum(a, b - 1) + 1;
}

// console.log(sum(10, 12));

function prod(a, b) {
  if (b === 0 || a === 0) {
    return 0;
  }

  if (b === 1) {
    return a;
  }
  return prod(a, b - 1) + a;
}
// console.log(prod(3, 3));

function fib(n) {
  //¿Casos bases?
  // if(n < 2){
  //   return n;
  // }

  if (n === 1) {
    return 1;
  }

  if (n === 0) {
    return 0;
  }

  return fib(n - 1) + fib(n - 2);
} //O(2^n)

function fibIterative(n) {
  let fib = [0, 1];

  for (let i = 0; i <= n - 2; i++) {
    fib.push(fib[i] + fib[i + 1]);
  }

  return fib;
} //O(n)

console.log(fibIterative(12));
