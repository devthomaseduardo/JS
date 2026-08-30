/*

Questão 1: Vamos brincar de florista. Declare seis variáveis, lembrando-se de nomeá-las de acordo com sua função:

o preço de uma única rosa (8) e o número de rosas que você tem (70)
o preço de um único lírio (10) e o número de lírios que você tem (50)
o preço de uma única tulipa (2) e o número de tulipas que você tem (120)

Agora, declare três variáveis, uma para cada tipo de flor (rosas, lírios e tulipas), nas quais você armazenará o preço total de cada uma.
 Insira os valores correspondentes nas variáveis ​​usando as variáveis ​​declaradas na etapa anterior. Por fim, declare uma variável para armazenar o preço de todas
 as suas flores (novamente, use as variáveis ​​anteriores para inicialização).
 Exiba todas as informações do estoque no console no seguinte formato:

ESSA É A SAIDA QUE BUSCAMOS VER :
Rose – unit price: 8 , quantity: 70 , value: 560
Lily – unit price: 10 , quantity: 50 , value: 500
Tulip – unit price: 2 , quantity: 120 , value: 240
Total: 1300

*/

// Declaração das variáveis para preços unitários e quantidades

// existem muitos nomes de variáveis possíveis e corretos
let precoRosa = 8;
let precoLirio = 10;
let precoTulipa = 2;

let quantidadeRosas = 70;
let quantidadeLirios = 50;
let quantidadeTulipas = 120;

let valorRosas = precoRosa * quantidadeRosas;
let valorLirios = precoLirio * quantidadeLirios;
let valorTulipas = precoTulipa * quantidadeTulipas;

let total = valorRosas + valorLirios + valorTulipas;

console.log(
  'Rosa – preço unitário:',
  precoRosa,
  ', quantidade:',
  quantidadeRosas,
  ', valor:',
  valorRosas,
);
console.log(
  'Lírio – preço unitário:',
  precoLirio,
  ', quantidade:',
  quantidadeLirios,
  ', valor:',
  valorLirios,
);
console.log(
  'Tulipa – preço unitário:',
  precoTulipa,
  ', quantidade:',
  quantidadeTulipas,
  ', valor:',
  valorTulipas,
);
console.log('Total: ', total);
