# JS-01: normalizar pedido

Implemente a função `normalizarPedido` em `index.js`.

## Entrada

A função recebe um objeto com:

- `cliente`: texto;
- `itens`: lista de objetos com `nome`, `preco` e `quantidade`.

## Saída

Retorne um novo objeto com:

- nome do cliente sem espaços nas extremidades;
- itens com nome normalizado;
- `subtotal` de cada item;
- `total` do pedido.

## Regras

- o objeto original não pode ser alterado;
- cliente e nome do item não podem ficar vazios;
- preço deve ser número maior que zero;
- quantidade deve ser número inteiro maior que zero;
- entrada inválida deve lançar `TypeError`;
- resultados monetários devem ter duas casas decimais.

## Exemplos

```js
normalizarPedido({
  cliente: "  Ana  ",
  itens: [
    { nome: " Café ", preco: 12.5, quantidade: 2 }
  ]
});
```

Resultado:

```js
{
  cliente: "Ana",
  itens: [
    { nome: "Café", preco: 12.5, quantidade: 2, subtotal: 25 }
  ],
  total: 25
}
```

## Executar

```bash
npm run test:js:01
```

Antes de programar, escreva pelo menos três casos: pedido válido, texto vazio e quantidade decimal.
