import assert from "node:assert/strict";
import test from "node:test";

import {
  classificarVoto,
  criarContagem,
  criarTabuada,
  nomeDoDia,
  ordenarNumeros,
  parOuImpar,
  saudacaoPorHora,
  somar
} from "./fundamentos.js";

test("converte textos numéricos antes de somar", () => {
  assert.equal(somar("10", "2.5"), 12.5);
});

test("rejeita valores que não representam números", () => {
  assert.throws(() => somar("dez", 2), TypeError);
});

test("classifica números inteiros como par ou ímpar", () => {
  assert.equal(parOuImpar(8), "par");
  assert.equal(parOuImpar(5), "ímpar");
  assert.throws(() => parOuImpar(2.5), TypeError);
});

test("aplica os limites atuais da classificação eleitoral", () => {
  assert.equal(classificarVoto(15), "não vota");
  assert.equal(classificarVoto(16), "opcional");
  assert.equal(classificarVoto(18), "obrigatório");
  assert.equal(classificarVoto(70), "opcional");
});

test("seleciona uma saudação por faixa de horário", () => {
  assert.equal(saudacaoPorHora(5), "Boa madrugada");
  assert.equal(saudacaoPorHora(6), "Bom dia");
  assert.equal(saudacaoPorHora(12), "Boa tarde");
  assert.equal(saudacaoPorHora(18), "Boa noite");
  assert.throws(() => saudacaoPorHora(24), RangeError);
});

test("obtém o nome do dia por um índice válido", () => {
  assert.equal(nomeDoDia(0), "Domingo");
  assert.equal(nomeDoDia(6), "Sábado");
  assert.throws(() => nomeDoDia(7), RangeError);
});

test("cria contagens crescentes e decrescentes", () => {
  assert.deepEqual(criarContagem(1, 5, 2), [1, 3, 5]);
  assert.deepEqual(criarContagem(5, 1, 2), [5, 3, 1]);
  assert.throws(() => criarContagem(1, 5, 0), RangeError);
});

test("cria uma tabuada como dados reutilizáveis", () => {
  assert.deepEqual(criarTabuada(3, 2), [
    { multiplicando: 3, multiplicador: 1, resultado: 3 },
    { multiplicando: 3, multiplicador: 2, resultado: 6 }
  ]);
});

test("ordena números sem alterar a lista original", () => {
  const entrada = [8, 110, 20, 3];

  assert.deepEqual(ordenarNumeros(entrada), [3, 8, 20, 110]);
  assert.deepEqual(entrada, [8, 110, 20, 3]);
});
