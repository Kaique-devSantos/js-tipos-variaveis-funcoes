
// o if abaixo ilustra a principal diferenca enre let e var
if (true) {
    let num1 = 10;
    var num2 = 20;
  }
console.log(num2);   

const nome = ‘Camila’ ; // variável global

function cumprimentar() {
  console.log(`Olá, ${nome}!`); // Acessa a var global
}

cumprimentar(); // ‘Olá, Camila!”

