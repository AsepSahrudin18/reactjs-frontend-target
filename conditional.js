const hasilUjian = 85;

// if: satu kondisi
if(hasilUjian > 90){
    console.log('Grade A');
}

// else if: membuat dua kondisi atau lebih
else if(hasilUjian > 80) {
    console.log('Grade B');
}else if(hasilUjian > 70) {
    console.log('Grade C');
}

// else: kondisi terakhir
else{
    console.log('Grade D');
}