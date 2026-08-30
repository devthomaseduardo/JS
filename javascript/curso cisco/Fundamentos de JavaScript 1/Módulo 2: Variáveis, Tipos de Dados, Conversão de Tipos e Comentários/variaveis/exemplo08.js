// Escopo / Blocos de programa

let altura = 180; //VARIAL VEL GLOBAL
{
  let peso = 75; // VARIAVEL LOCAL
  console.log(altura); // 180
  console.log(peso); // 75
}

console.log(altura);
console.log(peso);

/* VAI DAR ERRO POIS ESTAMOS TENTANDO EXECUTAR UM CÓDIGO FORA DO BLOCO DE PROGRAMA,
 ONDE A VARIÁVEL `peso` FOI DECLARADA.*/

//VEJA O AEXEMPLO09.JS
