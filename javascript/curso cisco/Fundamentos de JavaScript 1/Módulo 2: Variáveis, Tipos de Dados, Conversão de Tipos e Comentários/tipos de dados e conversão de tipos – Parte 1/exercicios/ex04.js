/*
Questão 4: Tente somar dois valores do mesmo tipo e verifique o tipo do resultado.
Tente para todos os tipos primitivos (Boolean, Number, BigInt, String, Undefined, Symbol e Null).
*/

// 1. Boolean + Boolean (Converte para Number: true = 1, false = 0)
let bRes = true + true;
console.log(`${bRes} [${typeof bRes}]`); // 2 [number]

// 2. Number + Number
let nRes = 10 + 20;
console.log(`${nRes} [${typeof nRes}]`); // 30 [number]

// 3. BigInt + BigInt
let biRes = 10n + 20n;
console.log(`${biRes} [${typeof biRes}]`); // 30n [bigint]

// 4. String + String (Concatena)
let sRes = 'Hello' + ' World';
console.log(`${sRes} [${typeof sRes}]`); // Hello World [string]

// 5. Undefined + Undefined (Retorna NaN - Not a Number)
let uRes = undefined + undefined;
console.log(`${uRes} [${typeof uRes}]`); // NaN [number]

// 6. Null + Null (Converte null para 0)
let nullRes = null + null;
console.log(`${nullRes} [${typeof nullRes}]`); // 0 [number]

// 7. Symbol + Symbol (Lança um erro de TypeError, pois Symbols não aceitam operação de +)
try {
  let sym1 = Symbol('a');
  let sym2 = Symbol('b');
  let symRes = sym1 + sym2;
} catch (error) {
  console.log(`Erro ao somar Symbols: ${error.message}`);
}
