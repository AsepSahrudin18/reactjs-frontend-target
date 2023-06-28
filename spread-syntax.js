// SPREAD ARRAY
/**
 * copy families ke newFamilies
 */
// tanpa spread
const families = ['Asep Sahrudin', 'Fullan', 'Fulanah'];

const newFamilies = [families[0], families[1], 'Hanah', 'Jonash'];

console.log(newFamilies);

// menggunakan spread operator
const keluargaBaru = [...families, 'Andri', 'Hanafi'];
console.log(keluargaBaru);




// SPREAD OBJECT
const user = {
    name: 'Asep Sahrudin',
    age: 24,
    major: 'Informatics'
}

// tanpa spread
const userBaru = {
    name: user.name,
    age: user.age,
    major: user.major,
    address: 'Depok'
}
console.log(userBaru);


// menggunakan spread
const newUser = {...user, address: 'Jakarta'};
console.log(newUser);