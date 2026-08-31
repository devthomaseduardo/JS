let carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2020,
};

console.log(carro.modelo); // Corolla

carro.cor = 'Prata';
console.log(carro.cor); // Prata

carro.ano = 2023;
console.log(carro.ano); // 2024

delete carro.cor;
console.log(carro.cor); // undefined (pois foi apagado)
