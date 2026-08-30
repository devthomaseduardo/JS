# Laboratório 2.0.15 — Variáveis

**Tempo estimado:** 15 a 30 minutos
**Nível de dificuldade:** Fácil

## Objetivos

Familiarizar o aluno com:
* **Variáveis** (nomear, declarar, inicializar e modificar seus valores)

---

## Cenário

Nossa tarefa será criar uma lista de contatos. Inicialmente, a lista será bem simples: adicionaremos apenas três pessoas usando os dados da tabela abaixo. Ao longo do curso, você retornará a esse script e o expandirá sistematicamente com novas funcionalidades, utilizando os elementos de JavaScript recém-aprendidos.

### Tabela de Contatos

| Nome | Telefone | E-mail |
| :--- | :--- | :--- |
| **Maxwell Wright** | (0191) 719 6495 | Curabitur.egestas.nunc@nonummyac.co.uk |
| **Raja Villarreal** | 0866 398 2895 | posuere.vulputate@sed.com |
| **Helena Richards** | 0800 1111 | libero@convallis.edu |

---

## Tarefa

1. Declare e inicialize as variáveis onde você armazenará todas as informações (**nove variáveis no total**).
2. Exiba no console informações sobre o **primeiro** e o **último** contato no formato: `nome/telefone/e-mail`.

---

## Resolução Sugerida em JavaScript

```javascript
// Contato 1
let nome1 = "Maxwell Wright";
let telefone1 = "(0191) 719 6495";
let email1 = "Curabitur.egestas.nunc@nonummyac.co.uk";

// Contato 2
let nome2 = "Raja Villarreal";
let telefone2 = "0866 398 2895";
let email2 = "posuere.vulputate@sed.com";

// Contato 3
let nome3 = "Helena Richards";
let telefone3 = "0800 1111";
let email3 = "libero@convallis.edu";

// Exibindo o primeiro contato
console.log(nome1 + " / " + telefone1 + " / " + email1);

// Exibindo o último contato
console.log(nome3 + " / " + telefone3 + " / " + email3);
