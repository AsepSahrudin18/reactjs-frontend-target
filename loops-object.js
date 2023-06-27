/**
 * membuat object menggunakan tanda {..}
 * membuat object menggunakan key: value
 */
const user = {
    name: 'Asep Sahrudin',
    major: 'Informatics',
    age: 23
}
/**
 * looping object hanya bisa digunakan menggunakan for in
 * mengakses nilai menggunakan cara bracket.
 */
for (const key in user) {
    console.log(key, user[key]);
}