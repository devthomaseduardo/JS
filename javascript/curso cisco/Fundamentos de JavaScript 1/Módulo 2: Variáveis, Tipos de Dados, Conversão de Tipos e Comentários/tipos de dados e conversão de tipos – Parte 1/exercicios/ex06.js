/*
Questão 6: Tente modificar a linha const str1 = 42 + "1"; para obter o resultado 43 (sem remover as aspas em torno de 1).
*/

// Resposta: Converte-se a string "1" explicitamente para Number usando o operador unário (+) ou a função Number().

const str1 = 42 + +'1';
console.log(`${str1} [${typeof str1}]`); // 43 [number]

// Forma alternativa explícita:
const str2 = 42 + Number('1');
console.log(`${str2} [${typeof str2}]`); // 43 [number]
