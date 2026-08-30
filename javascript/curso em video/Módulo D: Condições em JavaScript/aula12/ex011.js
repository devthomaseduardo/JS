// Classifica a obrigatoriedade do voto conforme a faixa de idade.
var idade = 20;
if (idade < 16) {
  console.log('não vota!');
} else if (idade < 18 || idade > 60) {
  console.log('Seu voto é OPCIONAL!');
} else {
  console.log('Seu voto é OBRIGATORIO!');
}
