# Revisão de JavaScript básico

Esta etapa reorganiza e complementa os assuntos estudados nas pastas `aula04` até `aula16`. Os arquivos originais permanecem no repositório para mostrar sua evolução.

## Mapa dos estudos

| Conteúdo original | Assunto | Complemento atual |
|---|---|---|
| `aula04` e `aula06` | entrada, saída, variáveis, números e strings | conversão explícita e validação |
| `aula09` e `aula10` | DOM e eventos | separação entre regra e interface |
| `aula11` e `aula12` | condições e `switch` | funções puras e limites |
| `aula12ex` | condições aplicadas ao DOM | validação antes da renderização |
| `aula13` e `aula14` | `while` e `for` | contador inicializado e proteção contra laço infinito |
| `aula14ex` | contagem e tabuada | geração de dados antes da interface |
| `aula15` | arrays | cópia, busca, transformação e ordenação numérica |
| `aula16` | funções | parâmetros, retorno e contrato |

## Correções importantes

### Declare variáveis com intenção

Use `const` quando a referência não será trocada e `let` quando haverá reatribuição. `var` possui escopo de função e permite comportamentos menos previsíveis.

```js
const limite = 80;
let velocidade = 90;
```

### Compare valor e tipo

Prefira `===` e `!==`.

```js
numero % 2 === 0
```

### Valide a conversão

`Number("")` resulta em `0`, enquanto `Number("abc")` resulta em `NaN`. Converter não significa que o valor é válido.

```js
const numero = Number(valor);

if (!Number.isFinite(numero)) {
  throw new TypeError("Informe um número válido");
}
```

### Ordene números com uma função de comparação

```js
const ordenados = [...numeros].sort((a, b) => a - b);
```

Sem `(a, b) => a - b`, o JavaScript compara os números como textos. Por isso, `110` pode aparecer antes de `20`.

### Separe regra e DOM

Uma função que calcula uma tabuada não precisa conhecer `document`. A interface lê o campo, chama a função e renderiza o resultado. Essa separação torna o comportamento testável e reutilizável em Node, API ou frontend.

## Arquivos

- [fundamentos.js](./fundamentos.js): exemplos corrigidos e reutilizáveis;
- [fundamentos.test.js](./fundamentos.test.js): testes dos comportamentos;
- [DOM.md](./DOM.md): revisão de DOM e eventos;
- [EXERCICIOS.md](./EXERCICIOS.md): atividades de fixação.

## Executar

```bash
npm run test:js:basico
```
