import assert from "node:assert/strict";
import test from "node:test";

import { normalizarPedido } from "./index.js";

test("normaliza textos e calcula subtotais e total", () => {
  const entrada = {
    cliente: "  Ana  ",
    itens: [
      { nome: " Café ", preco: 12.5, quantidade: 2 },
      { nome: "Pão", preco: 3.25, quantidade: 3 }
    ]
  };

  assert.deepEqual(normalizarPedido(entrada), {
    cliente: "Ana",
    itens: [
      { nome: "Café", preco: 12.5, quantidade: 2, subtotal: 25 },
      { nome: "Pão", preco: 3.25, quantidade: 3, subtotal: 9.75 }
    ],
    total: 34.75
  });
});

test("não altera o objeto recebido", () => {
  const entrada = {
    cliente: "Ana",
    itens: [{ nome: "Café", preco: 10, quantidade: 1 }]
  };
  const copia = structuredClone(entrada);

  normalizarPedido(entrada);

  assert.deepEqual(entrada, copia);
});

test("rejeita cliente vazio", () => {
  assert.throws(
    () => normalizarPedido({ cliente: "   ", itens: [] }),
    TypeError
  );
});

test("rejeita quantidade decimal", () => {
  assert.throws(
    () =>
      normalizarPedido({
        cliente: "Ana",
        itens: [{ nome: "Café", preco: 10, quantidade: 1.5 }]
      }),
    TypeError
  );
});

test("rejeita preço igual a zero", () => {
  assert.throws(
    () =>
      normalizarPedido({
        cliente: "Ana",
        itens: [{ nome: "Café", preco: 0, quantidade: 1 }]
      }),
    TypeError
  );
});
