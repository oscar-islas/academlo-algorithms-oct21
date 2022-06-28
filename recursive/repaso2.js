//Factorial de un numero

// 0! -> 0
// 1! -> 1
// 2! -> 2x1
// 3! -> 3x2x1 = 3x2!
// 4! -> 4x3x2x1 = 4x3!
// 5! -> 5x4x3x2x1 = 5x4! -> n! -> n*(n-1)!

//Una función recursiva tiene dos caracteristicas
// 1. Debe de tener un límite o un punto en el cual nos debamos de detener -> Caso base (base case)
// 2. Llamada a la misma función dentro del cuerpo (necesitamos obtener la función recursiva)

function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

//1° 4 * factorial(4-1)
//2° 3 * factorial(3-1)
//3° 2 * factorial(2-1)
//4° return 1

// Call stack -> Pila de llamadas -> Pop()
// factorial(1) -> return 1
// factorial(2) -> 2 * factorial(2-1) -> 2*1 -> 2
// factorial(3) -> 3 * factorial(3-1) -> 3*2 -> 6
// factorial(4) -> 4 * factorial(4-1) -> 4*6 -> 24

// console.log(factorial(4));

//Para resolver un problema de este tipo vamos a necesitar resolver un problema más pequeño

//Fibonacci
// 1, 1, 2, 3, 5, 8, 13, 21, 34...

// fib(0) -> 0
// fib(1) -> 1
// fib(2) -> fib(0) + fib(1) -> 1
// fib(3) -> fib(1) + fib(2) -> 2
// fib(4) -> fib(2) + fib(3) -> 3
// fib(5) -> fib(3) + fib(4) -> 5
// fib(n) -> fib(n-2) + fib(n-1)

function fib(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fib(n - 2) + fib(n - 1);
}

// fib(2)
// fib(0) -> limite
// fib(1) -> limite

//fib(1) -> 1
//fib(0) -> 0
//fib(2) -> fib(0) + fib(1) -> 1

console.log(fib(2));
