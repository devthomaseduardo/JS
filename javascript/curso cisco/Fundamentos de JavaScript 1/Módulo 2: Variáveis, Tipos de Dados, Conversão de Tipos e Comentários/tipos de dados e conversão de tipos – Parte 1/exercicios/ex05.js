/*
Questão 5: Tente somar dois valores de tipos diferentes e verifique o
tipo do resultado.
*/

// 1. Number + String (O Number é convertido para String e concatenado)
let res1 = 100 + '200';
console.log(`${res1} [${typeof res1}]`); // 100200 [string]

// 2. Boolean + Number (Boolean é convertido para número: true = 1)
let res2 = true + 10;
console.log(`${res2} [${typeof res2}]`); // 11 [number]

// 3. Boolean + String (Boolean é convertido para texto)
let res3 = false + ' é um booleano';
console.log(`${res3} [${typeof res3}]`); // false é um booleano [string]

// 4. BigInt + Number (Gera TypeError: o JS não soma BigInt e Number diretamente)
try {
  let res4 = 100n + 50;
} catch (error) {
  console.log(`Erro ao somar BigInt e Number: ${error.message}`);
}

// 5. Undefined + Number (Resulta em NaN - Not a Number)
let res5 = undefined + 10;
console.log(`${res5} [${typeof res5}]`); // NaN [number]

// 6. Null + Number (Null é convertido para 0)
let res6 = null + 10;
console.log(`${res6} [${typeof res6}]`); // 10 [number]

// 7. Null + String (Null é convertido para a palavra "null")
let res7 = null + ' valor';
console.log(`${res7} [${typeof res7}]`); // null valor [string]
