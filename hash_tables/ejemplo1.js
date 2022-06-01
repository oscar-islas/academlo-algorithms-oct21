const array = new Array(5).fill([]);
//Agregar el par clave/valor
array[2][0] = 'name';
array[2][1] = 'Academlo';

array[1][0] = 'email';

array[1][1] = 'info@academlo.com';

// > array
// [
//   [],
//   [ 'email', 'info@academlo.com' ],
//   [ 'name', 'Academlo' ],
//   [],
//   []
// ]
array[0][0] = 'profileImage';
array[0][1] = 'http://academlo.com/images...';
array;
// [
//   [ 'profileImage', 'http://academlo.com/images...' ],
//   [ 'email', 'info@academlo.com' ],
//   [ 'name', 'Academlo' ],
//   [],
//   []
// ]
let user = { name: 'Academlo', email: 'info@academlo.com' };
user['profileImage'] = 'http://academlo.com/images';
user;
// {
//   name: 'Academlo',
//   email: 'info@academlo.com',
//   profileImage: 'http://academlo.com/images'
// }

//Obtener el valor dada una clave
array[2][1];
// 'Academlo'
array[1][1];
//'info@academlo.com'
array[0][1];
//'http://academlo.com/images...'

//Crear una hash table en js
let userTwo = new Map();

//Agregar un par clave valor
userTwo.set('name', 'Academlo');
// Map(1) { 'name' => 'Academlo' }

//Obtener el tamaño de elementos de la tabla hash
userTwo.size;
//1

//Obtener un valor dada una clave
userTwo.get('name');
//'Academlo'
