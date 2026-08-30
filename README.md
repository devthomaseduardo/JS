# Laboratório JavaScript, TypeScript, Node e APIs

Este repositório reúne exercícios práticos para desenvolver raciocínio, escrita de código e decisões de backend.

## Trilhas

| Trilha | Objetivo |
|---|---|
| [JavaScript](./javascript/README.md) | Linguagem, funções, coleções, módulos e assincronismo |
| [TypeScript](./typescript/README.md) | Tipos, contratos, generics e validação |
| [Node.js](./node/README.md) | Runtime, arquivos, eventos, streams e serviços |
| [APIs](./api/README.md) | HTTP, REST, validação, autenticação e persistência |
| [Estudos anteriores](./docs/ESTUDOS-ANTERIORES.md) | Material já existente no repositório |

## Como estudar

1. Leia o enunciado sem procurar uma solução.
2. Anote entradas, saídas e casos de erro.
3. Implemente a menor solução correta.
4. Execute os testes.
5. Refatore somente depois de funcionar.
6. Registre no README do exercício o que aprendeu.

Comece em [JavaScript: normalização de pedidos](./javascript/01-fundamentos/01-normalizar-pedido/README.md).

## Comandos

Requer Node.js 20 ou superior.

```bash
npm test
```

Para executar apenas o primeiro exercício:

```bash
npm run test:js:01
```

## Regra do repositório

Cada exercício deve possuir enunciado, critérios de aceite, código inicial e testes. A solução nasce em uma branch própria e entra na `main` somente depois da revisão.
