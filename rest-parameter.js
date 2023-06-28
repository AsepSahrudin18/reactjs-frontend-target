/**
 * membuat fungsi sum 
 * fungsi yang memiliki 2 parameter
 */
// tanpa rest parameter
function sum(a, b){
    return a + b;
}

console.log(sum(2, 5));

// menggunakan rest parameter
function getSum(...numbers){
    let hasil = 0;

    for (const number of numbers) {
        hasil += number;
    }

    return hasil;
}

console.log(getSum(1,2,3,3,4));

/**
 * paremeter ketiga menggunakan rest parameter
 * membuat fungsi showFamilies
 * menampilkan anggote keluarga
 */
function showFamilies(suami, istri, ...params){
    console.log(`suami: ${suami}`);
    console.log(`istri: ${istri}`);

    for (const iterator of params) {
        console.log(`anak: ${iterator}`);
    }
}

showFamilies('Asep Sahrudin', 'Fullanah', 'test', 'test1', 'test2');