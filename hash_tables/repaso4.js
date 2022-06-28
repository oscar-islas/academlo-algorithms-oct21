class HashTable {
  constructor(size) {
    this.data = new Array(size).fill();
    this.maxSize = size;
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
}

const myHashTable = new HashTable(3);
// console.log(myHashTable.data);
myHashTable.set('name', 'academlo');
myHashTable.set('lastname', 'info');
myHashTable.set('password', 'academlo1234');
console.log(myHashTable.data);
