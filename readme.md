# Get Started Modern JavaScript

## Table of Contents

1. Variable
2. Data Types
3. Template Literals
4. Conditional
5. Looping
6. Function
7. Array
8. Object

## Variable

- Tempat untuk menyimpan nilai.
- Membuat variabel menggunakan keyword let dan const.
- Keyword let dapat diubah nilainya, sedangkan const tidak.
- Dahulukan penggunaan const dari pada let.
- Const bersifat immutable (tidak bisa re-assign, tapi bisa dimodifikasi).
- Name variables right.

## Data Types

Nilai di JavaScript terdiri dari berbagai jenis (types).
Data Types (Primitives):

- Number: Nilai berupa angka (integer atau float).
- String: Nilai berupa kumpulan karakter.
- Boolean: Nilai yang terdiri dari true atau false.
- Null: Nilai yang tidak ada.
- Undefined: Nilai yang belum di-assign.

Primitives: hanya bisa menyimpan 1 nilai.
Gunakan operator typeof untuk mengecek tipe data.
Referensi: JavaScript Info - Data Types.

## Template Literals

- Membuat string menggunakan kutip satu atau dua.
- Template Literals: membuat string menggunakan backtick: `string`.

Supports:

- Multiline.
- interpolasi dan expresi: ${expression}
- Tagged template (memanggil fungsi).
- Referensi: JavaScript Info - https://javascript.info/types#string.

## Conditional

Menjalankan aksi tertentu berdasarkan kondisi tertentu.
Jenis:

- if: membuat satu kondisi.
- else if: membuat dua kondisi atau lebih.
- else: membuat kondisi terakhir.

Referensi: https://javascript.info/ifelse

## Ternary Operator

Menuliskan if else dengan cara yang lebih singkat.
Ternary operator menggunakan operator:
? dijalankan ketika kondisi true.
: dijalankan ketika kondisi false.

Referensi: https://javascript.info/ifelse#conditional-operator

## Looping

Melakukan operasi atau aksi yang berulang-ulang.
Basic Loops:

- While
- For
- Do

Referensi: https://javascript.info/while-for

## Function

- Sekumpulan kode yang menjalankan tugas tertentu.
- Reusable code.
- Function dapat memiliki parameter.
- Function dapat mengembalikan nilai (return).

  Jenis:

- Function Declaration: Membuat fungsi menggunakan keyword function.
- Function Expression: Menyimpan fungsi ke variabel.
- Arrow Function: Sama seperti Function Expression, namun penulisan lebih singkat.

Referensi: https://javascript.info/function-basics

## Default Parameter

- Memberikan nilai default ke parameter.
- Mencegah terjadi error.
- Nilai default digunakan jika tidak ada parameter.

Referensi: https://javascript.info/function-basics#default-values

## Array

- Salah satu jenis struktur data (data structure).
- Menyimpan banyak nilai dalam variabel.
- Disimpan dalam bentuk urutan (ordered): [0, 1, 2, 3, 4, 5].

Referensi: https://javascript.info/array

<!-- problem -->

const animal1 = 'ayam';
const animal2 = 'sapi';
const animal3 = 'kambing';
...
const animal100 = 'kucing';

## Loops Array

Loops dapat digunakan untuk menampilkan seluruh data array.
Jenis:

- for/while/do-while: looping manual.
- for of: looping khusus untuk array.
- forEach: method khusus untuk array (HOF).

## Object

- Salah satu jenis struktur data (data structure).
- Menyimpan data yang lebih kompleks (banyak nilai).
- Nilai disimpan dalam bentuk key:value, bukan urutan (ordered).
- Object selalu digunakan di berbagai tempat di JavaScript.
- Object mirip seperti array asosiatif di bahasa pemrograman lain (PHP).

Referensi: https://javascript.info/object

## Loops Object

- Loops dapat digunakan untuk menampilkan seluruh nilai object.
- Pada object tidak dapat menggunakan loops biasa: for/while/do-while.
- Loops khusus pada object menggunakan method: for-in.

Referensi: https://javascript.info/object#the-for-in-loop

# ====================================================================

# Get Started Advanced JavaScript

## Table of Contents

- Destructing
- Rest Parameters and Spread
- Array Method
- ES Modules
- Promise + Async Await

## Destructing

- Mengekstrak (unpack) array atau object ke variable.
- Destructing object berdasarkan key.
- Destructing array berdasarkan urutan(index).

Referensi: https://javascript.info/destructuring-assignment

## Rest Parameters

Rest parameters dan spread syntax menggunakan keyword titik tiga (…).
Rest parameters:

- Menggabungkan items/parameters menjadi satu (array).

Referensi: https://javascript.info/rest-parameters-spread

## Spread Syntax

Rest parameters dan spread syntax menggunakan keyword titik tiga (…).
Spread syntax:

- Menyebarakan/memisahkan items (array atau object) menjadi item tersendiri.
- Spread dapat digunakan pada array atau object.
  Tujuan:
- Copy array atau object.
- Merge array atau object.

Referensi: https://javascript.info/rest-parameters-spread

## Array Method

Array menyediakan banyak method untuk mempermudah mengelola data.
Methods:

- Menambah dan menghapus: push, pop, shift, unshift.
- Iterate (perulangan): forEach.
- Searching (mencari): find, filter.
- Transform (mengubah): map, reduce.

Referensi: https://javascript.info/array-methods

## Modules

- Modules adalah sebuah file yang berisi kode.
- Kode dipisahkan berdasarkan tujuan atau responsibility tertentu (SRP).
- Bertujuan: mengurangi kompleksitas, memudahkan maintenance, penerapan arsitektur.
- Modules adalah prinsip penting dalam penerapan berbagai pattern.

  Jenis:

- ES Module: Berjalan di browser.
- CommonJS: Berjalan di luar browser (NodeJS).

## Asynchronous

- Proses yang berjalan tanpa harus menunggu proses lain selesai.
- Operasi Asynchronous:
  - Mengakses database.
  - Mengakses file.
  - Mengakses jaringan (resource, fetch)
- JavaScript memiliki fungsi setTimeOut yang menjalankan kode secara asynchronous.
- setTimeOut: menjalankan kode setelah waktu tertentu.

Referensi: https://javascript.info/callbacks

## Promises

- Object yang mengembalikan nilai di masa mendatang (future).
- Solusi untuk menghandle proses Asynchronous.

Pembuatan promise:

1. Producing: Membuat Promise.
2. Consuming: Menggunakan Promise.

Promise memiliki 3 keadaan (state):

- Pending: Ketika promise dijalankan.
- Fulfilled: Ketika promise berhasil (resolve).
- Rejected: Ketika promise gagal (reject).

Referensi: https://javascript.info/promise-basics

## Promises - Consuming

Tahapan sebelumnya merupakan tahapan Producing.
Selanjutnya kita perlu melakukan Consuming, yaitu menggunakan hasil promise.
Consuming Promise:

- .then: menangkap promise ketika status berhasil (resolve).
- .catch: menangkap promise ketika status gagal (reject).

Referensi: https://javascript.info/promise-basics#consumers-then-catch-finally

## Fetch

- Fetch merupakan fungsi yang dapat digunakan untuk mengakses API (AJAX).
- Fetch dibangun di atas Promise.
- Untuk menggunakan Fetch perlu memahami promise.

Referensi: https://javascript.info/fetch

# Async Await

- Async Await: menulis kode asynchronous dengan gaya synchronous.
- Async Await dibangun di atas Promise.
- Async Await hanya berjalan di dalam function.

Referensi: https://javascript.info/async-await
