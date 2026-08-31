/*
Questão 3: Realize uma cadeia de conversões: crie um Boolean a partir de um
BigInt criado a partir de um Number que foi criado a partir de uma String.
Comece com o valor "1234". É possível?
*/

// Resposta: Sim, é possível!

// Opção em uma única linha:
let b = Boolean(BigInt(Number('1234')));
console.log(`${b} [${typeof b}]`);


// Ou passo a passo:
let s = '1234';
let n = Number(s);
let bi = BigInt(n);
let b2 = Boolean(bi);
console.log(`${b2} [${typeof b2}]`);
