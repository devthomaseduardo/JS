/*
Questão 1: Criando um objeto de passagem de trem (ticket) usando chaves ({}).
*/

// 1. Criação do objeto com os campos solicitados
let ticket = {
  de: 'Estação Luz', // Estação de partida
  para: 'Estação Campinas', // Estação final (raio de 100 km)
  preco: 25.5, // Preço do ingresso
};

// 2. Exibindo os valores de todos os campos no console
console.log(`Estação de partida: ${ticket.de}`);
console.log(`Estação final: ${ticket.para}`);
console.log(`Preço do ingresso: R$ ${ticket.preco}`);
