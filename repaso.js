const car = {
  brand: 'Audi',
  color: 'blue',
  model: 2015,
};
car['belongsTo'] = 1;
car['createdAt'] = 2014;

const carTwo = new Map([
  ['brand', 'Dodge'],
  ['color', 'red'],
  ['model', '2015'],
]);

carTwo.set('name', 'prueba');
// carTwo.set('color', 'red');
// carTwo.set('model', '2015');

console.log(car.brand);
console.log(Object.keys(car));
console.log(car.name ? true : false);
console.log(carTwo.get('brand'));
console.log(carTwo.size);
console.log(carTwo.has('name'));
console.log(carTwo.keys());
carTwo.forEach((value, key) => {
  console.log(key, value);
});

for (key in car) {
  console.log(key);
}

for (key of carTwo) {
  console.log(key);
}
