# Exercícios de JavaScript: Manipulação de Arrays e Objetos

Este projeto consiste em uma série de exercícios práticos (Questões 3 a 7) focados na criação, manipulação e extração de dados em estruturas de Arrays de Objetos utilizando métodos nativos do JavaScript.

---

## Descrição das Questões

### Questão 3: Criando a Biblioteca Inicial
* **Objetivo:** Criar uma lista inicial de livros representados por objetos.
* **Lógica:** Cada livro possui três propriedades (`titulo`, `autor` e `paginas`). Todos os objetos são agrupados dentro de um array principal chamado `livros`.

### Questão 4: Adicionando um Novo Livro
* **Objetivo:** Inserir um novo elemento ao final do array existente.
* **Lógica:** Utiliza-se o método `.push()` para adicionar o novo objeto. Em seguida, verifica-se o tamanho atual do array com a propriedade `.length` e exibe-se o título de cada livro acessando o índice do array e a propriedade do objeto (ex: `livros[0].titulo`).

### Questão 5: Fatiando o Array com `slice`
* **Objetivo:** Copiar os dois últimos elementos para uma nova variável sem modificar a lista original.
* **Lógica:** O método `.slice(-2)` é aplicado passando um índice negativo. Isso instrui o JavaScript a contar de trás para frente e extrair apenas os dois últimos livros.

### Questão 6: Removendo o Primeiro Elemento
* **Objetivo:** Excluir o primeiro livro da lista original.
* **Lógica:** O método `.shift()` é utilizado para remover o elemento no índice `0`. Essa operação reorganiza os índices restantes (o índice 1 passa a ser 0) e reduz a contagem de `.length`.

### Questão 7: Somando Propriedades Numéricas
* **Objetivo:** Calcular o total de páginas de todos os livros restantes.
* **Lógica:** Acessa-se o campo `.paginas` de cada posição do array (`livros[0].paginas`, `livros[1].paginas`, etc.) e realiza-se a soma aritmética dos valores.

---

## Métodos do JavaScript Utilizados

| Método / Propriedade | Descrição |
| :--- | :--- |
| **`Array.prototype.push()`** | Adiciona um ou mais elementos ao final de um array. |
| **`Array.prototype.shift()`** | Remove o primeiro elemento de um array e reordena os índices. |
| **`Array.prototype.slice()`** | Retorna uma cópia de parte de um array sem modificar o original. |
| **`Array.prototype.length`** | Retorna a quantidade total de elementos presentes no array. |

---

## Código de Resolução




// Questão 3: Criando o Array de Objetos com os livros iniciais
let livros = [
  {
    titulo: 'Falando JavaScript',
    autor: 'Axel Rauschmayer',
    paginas: 460,
  },
  {
    titulo: 'Programação de Aplicações JavaScript',
    autor: 'Eric Elliott',
    paginas: 254,
  },
  {
    titulo: 'Entendendo ECMAScript 6',
    autor: 'Nicholas C. Zakas',
    paginas: 352,
  },
];

console.log('--- Questão 3: Lista Inicial ---');
console.log(livros);

// Questão 4: Adicionando novo livro ao final com .push()
livros.push({
  titulo: 'Learning JavaScript Design Patterns',
  autor: 'Addy Osmani',
  paginas: 254,
});

console.log('\n--- Questão 4: Após adicionar novo livro ---');
console.log('Quantidade total de livros:', livros.length);

// Exibindo todos os nomes dos livros
console.log(livros[0].titulo);
console.log(livros[1].titulo);
console.log(livros[2].titulo);
console.log(livros[3].titulo);

// Questão 5: Copiando os dois últimos livros com .slice()
// O valor -2 pega os últimos dois elementos da lista
let ultimosLivros = livros.slice(-2);

console.log('\n--- Questão 5: Dois últimos livros (nova matriz) ---');
console.log(ultimosLivros);

// Questão 6: Removendo o primeiro livro com .shift()
// O método .shift() remove o elemento do índice 0
livros.shift();

console.log('\n--- Questão 6: Após remover o primeiro livro ---');
console.log('Quantidade atual de livros:', livros.length);

// Exibindo todos os nomes dos livros restantes (um por um)
console.log(livros[0].titulo);
console.log(livros[1].titulo);
console.log(livros[2].titulo);

// Questão 7: Soma total de páginas de todos os livros restantes
let totalPaginas = livros[0].paginas + livros[1].paginas + livros[2].paginas;

console.log('\n--- Questão 7: Total de páginas ---');
console.log('A soma de páginas dos livros é:', totalPaginas);
