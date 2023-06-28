// foreach
const users = ['Asep Sahrudin', 'Fullanah', 'Fullan'];

/**
 * array foreach bertujuan untuk interasi
 */
users.forEach(function(user){
    console.log(user);
});
/**
 * array map: bertujuan untuk transform (mengubah data)
 */
const formatName = users.map(function(user){
    return `Mr/Mrs:  ${user}`;
});

console.log(formatName);




// membuat array of object
const students = [
    {
        name: 'Asep Sahrudin',
        age: 24,
    },
    {
        name: 'Nur asyifa',
        age: 20,
    },
    {
        name: 'Zaki nur',
        age: 23
    }
];

/**
 * find
 * mencari 1 data berdasarkan kondisi tertentu
 * misal: umur lebih dari 21
 * 
 * cara kerjanya:
 * - akan menampilkan kondisi yang paling pertama ditemukan
 */
const findStudent = students.find(function(student){
    return student.age > 21;
});

console.log(findStudent);

/**
 * filter
 * mencari semua data berdasarkan kondisi tertentu
 * misal: mencari kondisi umur lebih dari 21
 * 
 * cara kerja: akan menampilkan berdasarkan kriteria (misalnya yang diatas 21 itu ada 2 data atau lebih maka yang akan ditampilkan adalah jumlah kriteria tersebut)
 */
const filterAge = students.filter(function(student){
    return student.age > 21;
});

console.log(filterAge);


/**
 * refactor array method dengan arrow function
 */
// foreach arrow function
users.forEach(user => console.log(user));

// map arrow function
const mapResult = users.map(user => `Mr/Mrs. ${user}`);
console.log(mapResult);

// find arrow function
const findResult = students.find(student => student.age > 21);
console.log(findResult);

// filter arrow function
const filterResult = students.filter(student => student.age > 21);
console.log(filterResult);