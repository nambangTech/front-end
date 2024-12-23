// let mahasiswa = {
//   nama : "salsa",
//   umur : 20,
//   funtion mahasiswA (nama umur) {
// }
function mahasiswa (nama, umur) {
  let mahaswa ={};
  mahaswa.nama = nama;
  mahasiswa.umur = umur;


  mahasiswa.makan = function (porsi) {

  this.energi += porsi;
  console.log(`halo(this.nama),selamat makan !`)
    }

}