
// Escopo / Blocos de programa


let altura = 1.75; // altura em metros
{
  let peso = 100;
  {
    let info = 'Peso em kg';
    console.log(altura); // 1.75
    console.log(peso); // 100
    console.log(info); // Peso em kg
  }

  console.log(altura); // 1.75
  console.log(peso); // 100
  console.log(info); // Peso em kg
}

/*COMO PODEMOS VER A LET`INFO` SÓ É VISIVEL DENTRO DO BLOCO MAIS INTERNO, E NÃO PODE SER ACESSADA FORA DELE.
/*

A variável `weight` é visível tanto dentro do bloco em que foi declarada
 quanto dentro do bloco aninhado nele. E a variável global `height` é visível
  em todos os lugares.
*/

//VEJA O EXEMPLO 10
