// Escopo / Blocos de programa

/*

let contador;
console.log(contador); // undefined
{
  contador = 1;
  console.log(contador); // 1
}

contador = contador + 1;
console.log(contador); // 2
*/


/* aninhamentos = Os blocos de programa podem ser aninhados, ou seja,
podemos criar um bloco dentro de outro.*/


let contador;
console.log(contador); // undefined
{
  contador = 1
  {
    console.log(contador)
  }
}
contador = contador + 1
console.log(contador) // 2
