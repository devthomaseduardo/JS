// Sombreamento variável

/*
Significa que podemos declarar uma
 variável global e uma variável local com o mesmo nome.
*/

let contador = 100;
console.log(contador); // 100
{
  contador = 200;
  console.log(contador); // 200
}

console.log(contador); // 200
