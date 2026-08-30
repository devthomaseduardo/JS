// Recebe um número e retorna sua classificação como par ou ímpar.
function parimpar(n) {
  if (n % 2 == 0) {
    return 'Par!';
  } else {
    return 'Impar!';
  }
}

console.log(parimpar(5));
