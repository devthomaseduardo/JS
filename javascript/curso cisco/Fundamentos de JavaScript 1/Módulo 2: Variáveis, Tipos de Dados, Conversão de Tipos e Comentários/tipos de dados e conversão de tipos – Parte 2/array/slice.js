let names = ['Olivia', 'Emma', 'Mateo', 'Samuel'];

// 1. Corta do índice 2 até o final
let n1 = names.slice(2);
console.log(n1); // Saída: ["Mateo", "Samuel"]

// 2. Corta do índice 1 até o índice 3 (sem incluir o 3)
let n2 = names.slice(1, 3);
console.log(n2); // Saída: ["Emma", "Mateo"]

// 3. Corta do índice 0 até o penúltimo item (-1)
let n3 = names.slice(0, -1);
console.log(n3); // Saída: ["Olivia", "Emma", "Mateo"]

// 4. Pega apenas o último item (-1)
let n4 = names.slice(-1);
console.log(n4); // Saída: ["Samuel"]

// O array original NÃO é modificado
console.log(names); // Saída: ["Olivia", "Emma", "Mateo", "Samuel"]
