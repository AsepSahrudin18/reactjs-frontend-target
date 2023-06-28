const user = {
    name: 'Asep Sahrudin',
    age: 23,
    major: 'Informatics'
}

// extrak object tanpa melakukan destrcucting
const nama = user.name;
const usia = user.age;
const jurusan = user.major;

console.log(nama, usia, jurusan);

/**
 * melakukan destructing object
 * destructing object berdasarkan key
 */
const {name, age, major} = user;

console.log(name); // output: Asep Sahrudin