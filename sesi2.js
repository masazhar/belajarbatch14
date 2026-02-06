const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate(num1, num2, operator) {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/': return num1 / num2;
    default: return 'Operator tidak dikenal';
  }
}

rl.question('Masukkan angka pertama: ', (num1) => {
  rl.question('Masukkan angka kedua: ', (num2) => {
    rl.question('Masukkan operator (+, -, *, /): ', (operator) => {
      const result = calculate(parseFloat(num1), parseFloat(num2), operator);
      console.log(`Hasil: ${result}`);
      rl.close();
    });
  });
});