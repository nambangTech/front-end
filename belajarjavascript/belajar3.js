// function greet() {
//   console.log("selamat datang!");
// }
// greet(); // Output: Hello, Dunia!


// function addNumbers(num1, num2) {
//   console.log("Hasil penjumlahan: " + (num1 + num2));
// }
// addNumbers(5, 7); // Output: Hasil penjumlahan: 12
// addNumbers(3, 30);


// function datasaya (name, age) {
//   console.log(`halo nama saya  ${name}  dan umur saya  ${age}` )
// }
// datasaya ( "melvin", 16)

// function tambah(a, b) {
//  return a + b; // Mengembalikan hasil penjumlahan
// }

// let hasil = tambah(40, 3);
// console.log(hasil); // Output: 8

// function kali(c, d) {
//   return c * d;

// }
// let nama = kali(2, 3);
// console.log(nama); // Output: 6

// function expresion 

// let melvin = function (a, b) {
//   return a * b;
//   }
// console.log(melvin(10, 20));

// arrow function 

// const salam = (nama) => {
//   console.log("Halo, " + nama + "!");
// };

// salam("Melvin"); // Output: Halo, Melvin!


// //tanpa kurung kurawal


// const tambah = (a, b) => a + b;

// console.log(tambah(5, 3)); // Output: 8



// const nama = (c, d) => c * d;

// console.log(nama(10, 10));
// const user = {
//   name: 'Dicoding',
//   'last name': 'Indonesia',
//   age: 9,
// };
 
// delete user.age;
// console.log(user.name);



// const employees = [
//   {
//     name: 'Fulan',
//     email: 'fulan@dicoding.com',
//     joinYear: 2020,
//   },
// ];

// function addEmployee(name, email, joinYear) {
//     const newEmployee = {
//     name: name,
//     email: email,
//     joinYear: joinYear,
//   };
//   /**
//    * @TODO
//    * lengkapi fungsi ini agar dapat menambahkan objek employee baru
//    * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
//    */
//      employees.push(newEmployee);
// }


// ini tentang looping

for (let i = 0; i < 10; i++) {
  if (i === 5) {
      continue;
  }
  console.log(i);
}
