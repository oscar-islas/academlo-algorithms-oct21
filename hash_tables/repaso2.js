class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);

    let bucket = this.data[address];
    if (bucket && bucket.length > 0) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    } else {
      return undefined;
    }
  }

  remove(key) {
    let address = this._hash(key);

    let bucket = this.data[address];
    if (bucket && bucket.length > 0) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return this.data[address].splice(i, 1);
        }
      }
    } else {
      return undefined;
    }
  }
}

const myHashTable = new HashTable(10);
myHashTable.set('name', 'Luis');
myHashTable.set('lastname', 'Torres');
myHashTable.set('email', 'luis02@gmail.com');
myHashTable.set('password', 'luis1234');
myHashTable.set('profile', 'http://academlo.com/images/profile.png');
myHashTable.remove('email');
myHashTable.remove('profile');
console.log(myHashTable.data);

const romans = {
  I: 1,
  V: 5,
  X: 10,
};

const roman = 'XV';
