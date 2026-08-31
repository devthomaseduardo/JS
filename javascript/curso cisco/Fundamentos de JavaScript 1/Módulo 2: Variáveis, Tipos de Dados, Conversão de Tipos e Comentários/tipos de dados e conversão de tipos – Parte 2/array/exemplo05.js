//adicionando novo usuario na array

let usuarios = [
  {
    name: 'Thomas', //usuario 0
    sobreNome: 'Nascimento',
    idade: 31,
    email: 'teste@test.com',
  },

  {
    name: 'Matheus', //usuario 1
    sobreNome: 'Silva',
    idade: 22,
    email: 'mateus@testes.com',
  },

  {
    name: 'Janaina', //usuario 2
    sobreNome: 'Romeiro',
    idade: 44,
    email: 'janaina@testes.com',
  },
];

usuarios[3] = {
  name: 'Lucas', //usuario 2
  sobreNome: 'Silva',
  idade: 80,
  email: 'lucas@testes.com',
};

console.log(usuarios[0].name);
console.log(usuarios[1].name);
console.log(usuarios[2].name);
console.log(usuarios[3].name);
