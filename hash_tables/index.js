class HashTable {
  constructor(size) {
    this.data = new Array(size); //Donde almacenaremos los pares clave/valor
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    //1. Convertir la clave (key) en una dirección
    let index = this._hash(key);
    //2. Tomo mi arreglo y me ubico en la dirección que me arrojo _hash
    let bucket = this.data[index];
    if (bucket && bucket.length >= 0) {
      //3. Agrego el par clave/valor .push
      this.data[index].push([key, value]);
    } else {
      this.data[index] = [];
      this.data[index].push([key, value]);
    }
  }

  get(key) {
    //1. Convertir la clave en una dirección -> index
    let index = this._hash(key);
    //2. Obtenemos el bucket -> el arreglo con todos los pares (clave, valor) almacenados
    let bucket = this.data[index];
    //3. Iterar sobre bucket (comprobar si tenemos pares clave valor almacenados)
    if (bucket && bucket.length > 0) {
      //O(n)
      for (let i = 0; i < bucket.length; i++) {
        //4. Buscar la clave en el bucket
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    } else {
      return undefined;
    }
  }

  remove(key) {
    //1. Convertir la clave en una dirección -> index
    let index = this._hash(key);
    //2. Obtenemos el bucket -> el arreglo con todos los pares (clave, valor) almacenados
    let bucket = this.data[index];
    //3. Iterar sobre bucket (comprobar si tenemos pares clave valor almacenados)
    if (bucket && bucket.length > 0) {
      for (let i = 0; i < bucket.length; i++) {
        //O(n)
        //4. Buscar la clave en el bucket
        if (bucket[i][0] === key) {
          return this.data[index].splice(i, 1);
        }
      }
    } else {
      return undefined;
    }
  }
}

const myHashTable = new HashTable(5);
myHashTable.set('name', 'Academlo');
myHashTable.set('image', 'http://academlo.com/images/profile.png');
myHashTable.set('email', 'info@academlo.com');
myHashTable.set('password', 'academlo1234');
myHashTable.set('lastname', 'prueba');
// console.log(myHashTable.data);
myHashTable.remove('image');
myHashTable.remove('name');
myHashTable.remove('email');
console.log(myHashTable.data);
