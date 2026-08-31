let variavelDeclarada;
console.log(typeof variavelDeclarada); // -> undefined (não definido)

variavelDeclarada = 5;
console.log(typeof variavelDeclarada); // -> number (número)

variavelDeclarada = undefined;
console.log(typeof variavelDeclarada); // -> undefined (não definido)

// O valor "undefined" também pode ser retornado pelo operador typeof quando uma variável inexistente é passada como argumento.

console.log(typeof variavelNaoDeclarada); // -> undefined (não definido)
console.log(variavelNaoDeclarada); // -> Uncaught ReferenceError: variavelNaoDeclarada is not defined
