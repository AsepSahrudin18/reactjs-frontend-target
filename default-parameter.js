/**
 * membuat fungsi menggunakan arrow function untuk menghitung umur disertai default parameter
 */

const getAge = (bod = 1999) => {
    const year = 2023;
    const age = year - bod;
    return age;
}

console.log(getAge(2000));