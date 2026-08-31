//Manipulação de objeto 


let user1 = {
  name: 'Thomas',
  sobreNome: 'Nascimento',
  idade: 31,
  email: 'teste@test.com',
};

let user2 = {
  name: 'Matheus',
  sobreNome: 'Silva',
  idade: 22,
  email: 'mateus@testes.com',
};

let user3 = {
  name: 'Janaina',
  sobreNome: 'Romeiro',
  idade: 44,
  email: 'janaina@testes.com',
};

console.log(user1.name); // Thomas
console.log(user2.name); // Matheus
console.log(user3.name); // Janaina

user1.idade = 32; // thomas fez aniversario entao nao é mais 31
console.log(user1.idade);

user3.telefone = '11-9999-9999'; // adicionei um numero para janaina
console.log(user3.telefone);

delete user3.telefone; // deletei o numero da jananina
console.log(user3.telefone);


console.log(
  `O ${user2.name} é primo do ${user1.name} e a idade deles tem uma diferença de ${user3.idade - user1.idade} anos.`,
);
