let n = 5; // Jumlah baris
let string = "";

for (let i = 1; i <= n; i++) {
  // Mencetak bintang
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  // Pindah baris
  string += "\n";
}
console.log(string);