let a = 1 / 0;
let b = -Infinito;

console.log(a); //  ->  Infinito (Infinity)
console.log(b); //  ->  -Infinito (-Infinity)
console.log(typeof a); //  ->  número (number)
console.log(typeof b); //  ->  número (number)

let texto = 'com certeza nao e um numero';
let n = texto * 10;
console.log(n); //  ->  NaN (Não é um Número)
console.log(typeof n); //  ->  número (number)
