/**
 * membuat data array family terdiri dari:
 * - suami: Michael 
 * - istri: Hanah
 * - anak: Jonash
 */
const family = ['Michael', 'Hanah', 'Jonash'];

// menampilkan data array tanpa destructing
// const suami = family[0];
// const istri = family[1];
// const anak = family[2];

// console.log(suami, istri, anak);

// melakukannya dengan destructing
const [suami, istri, anak] = family;

console.log(suami);