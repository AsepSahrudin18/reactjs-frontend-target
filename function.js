/**
 * case: menghitung usia
 */

// tanpa menggunakan fungsi
// const bod = 1999;
// const year = 2023;

// const age = year - bod;
// console.log(age);

// menggunakan fungsi

function age(bod, year){
    const age = year - bod;
    return age;
}

const hasil = age(1999, 2023);
console.log(hasil);

/**
 * kelebihan & kekurangan:
 * - tanpa fungsi: setiap kali kita akan menghitung usia maka harus melakukan duplikasi code nya secara berulang
 * - menggunakan fungsi: tinggal fanggil dan isi parameternya.
 */