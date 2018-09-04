function dhanang() {
  var nilai = 6;
  if (nilai === 5){
    console.log('benar')
  } else if (nilai < 7) {
    console.log('7 kebawah')
  } else {
    console.log('salah')
  }
}

function tambah(a, b) {
  hasil = a+b;
  console.log(hasil);
}

var funcRandom = function(x, y) {
  var random = Math.floor(Math.random() * 5) + 5;
  hasil = x+random+y;
  console.log(hasil);
}

funcRandom(10,5);
