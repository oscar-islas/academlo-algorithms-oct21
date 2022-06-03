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

  get(key) {}
}

const myHashTable = new HashTable(5000);
myHashTable.set('name', 'Academlo');
myHashTable.set('image', 'http://academlo.com/images/profile.png');
myHashTable.set('email', 'info@academlo.com');
myHashTable.set('password', 'academlo1234');
myHashTable.set('lastname', 'prueba');
myHashTable.set('image', 'http://academlo.com/images/profiles.png');
console.log(myHashTable.data);
