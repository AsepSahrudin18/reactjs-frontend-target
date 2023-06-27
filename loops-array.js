const animals = ['ayam', 'kucing', 'sapi', 'kambing'];

// melakukan looping array menggunakan for loop
for(i = 0; i < animals.length; i++){
    console.log(animals[i]);
}

// menggunakan for of
for (const iterator of animals) {
    console.log(iterator);
}

// menggunakan for in
for (const key in animals) {
   console.log(animals[key]);
}

// menggunakan foreach
animals.forEach(animal => {
    console.log(animal)
});