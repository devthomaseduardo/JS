# Laboratório: Lista de Contatos com Array de Objetos

Este projeto consiste na refatoração e estruturação de uma lista de contatos utilizando tipos de dados complexos em JavaScript. O objetivo é substituir variáveis avulsas por um **Array de Objetos**, tornando a manipulação de dados eficiente e escalável.

---

## Descrição do Desafio

O laboratório propõe solucionar a limitação de armazenar informações de contatos em variáveis separadas. Ao estruturar cada usuário como um objeto contendo `nome`, `telefone` e `email`, reunimos todos eles em um único array (`contacts`).

### Requisitos Atendidos:
1. Criar um array com 3 contatos iniciais estruturados como objetos.
2. Adicionar um 4º contato ao final da lista utilizando o método `.push()`.
3. Exibir o primeiro contato no console no formato: `nome / telefone / email`.
4. Exibir o último contato no console no formato: `nome / telefone / email`, utilizando a propriedade `.length` de forma dinâmica.

---

## Conceitos Aplicados

* **Objetos (`{}`):** Agrupamento de propriedades (`nome`, `telefone`, `email`) para descrever uma única entidade.
* **Arrays (`[]`):** Estrutura para armazenar a coleção de contatos.
* **Método `.push()`:** Adição de um novo objeto ao final do array.
* **Acesso por Índice:** Leitura do primeiro elemento via índice `0`.
* **Acesso Dinâmico:** Obtenção do último elemento do array com o cálculo `contacts.length - 1`.

---

## Código de Resolução

```javascript
// Criando a lista de contatos inicial como um Array de Objetos
let contacts = [
  {
    nome: "Maxwell Wright",
    telefone: "(0191) 719 6495",
    email: "Curabitur.egestas.elit@magnaCrasconvallis.ca"
  },
  {
    nome: "Raja Villarreal",
    telefone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
  },
  {
    nome: "Helen Richards",
    telefone: "0800 1111",
    email: "libero@tum.edu"
  }
];

// Adicionando o novo contato ao final do array
contacts.push({
  nome: "Maisie Haley",
  telefone: "0913 531 3030",
  email: "risus.Quisque@urna.ca"
});

// Acessando o primeiro contato (índice 0)
let primeiroContato = contacts[0];
console.log(`${primeiroContato.nome} / ${primeiroContato.telefone} / ${primeiroContato.email}`);

// Acessando o último contato usando a propriedade .length
let ultimoContato = contacts[contacts.length - 1];
console.log(`${ultimoContato.nome} / ${ultimoContato.telefone} / ${ultimoContato.email}`);
