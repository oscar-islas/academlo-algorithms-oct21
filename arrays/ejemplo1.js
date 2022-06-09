// let numbers = [1, 2, 4, 6].map();
// Array.prototype.academlo = 'Hola mundo';
// Array.prototype.upperCase = function () {
//   for (let i = 0; i < this.length; i++) {
//     this[i] = this[i].toUpperCase();
//   }
// };
// let letters = ['a', 'b', 'c'];
// letters.upperCase();
// console.log(letters);

let romans = new Map();
romans.set('I', 1);
romans.set('V', 5);
romans.set('X', 10);

let input = 'IV';

let result = 0;
for (let i = 0; i < input.length; i++) {
  result += romans.get(input[i]);
}

console.log(result);
