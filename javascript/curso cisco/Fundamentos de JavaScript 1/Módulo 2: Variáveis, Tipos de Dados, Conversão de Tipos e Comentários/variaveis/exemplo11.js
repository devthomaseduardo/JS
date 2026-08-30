//A palavra-chave var - continuação


/*
Se declararmos uma variável usando a palavra-chave `var` dentro de uma função,
 seu escopo ficará limitado apenas ao interior dessa função (é um escopo local).
  Isso significa que o nome da variável será reconhecido corretamente apenas dentro
  dessa função.

*/

var saudacaoGlobal = 'Bom ';
var saudacaoLocal = 'Dia ';

function testarFuncao() {
  console.log('função:');
  console.log(saudacaoGlobal);
  console.log(saudacaoLocal);
}

testarFuncao();

console.log('programa principal:');
console.log(saudacaoGlobal);
console.log(saudacaoLocal); // -> Uncaught ReferenceError: saudacaoLocal is not defined
