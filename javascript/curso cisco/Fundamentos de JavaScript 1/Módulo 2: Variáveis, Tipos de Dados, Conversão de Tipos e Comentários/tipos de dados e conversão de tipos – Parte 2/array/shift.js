// Criamos um array com 4 elementos
let names = ['Olivia', 'Emma', 'Mateo', 'Samuel'];
console.log(names.length); // Saída: 4

// O método shift() REMOVE e RETORNA o PRIMEIRO elemento da lista
let name = names.shift();

// O tamanho do array diminui para 3
console.log(names.length); // Saída: 3

// A variável 'name' guarda o item que foi removido
console.log(name); // Saída: Olivia

// O array original agora não tem mais a 'Olivia'
console.log(names); // Saída: ["Emma", "Mateo", "Samuel"]
