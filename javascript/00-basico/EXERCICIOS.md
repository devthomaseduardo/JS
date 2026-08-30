# Exercícios de fixação

Implemente cada atividade em uma branch ou commit separado e crie testes antes de considerar a tarefa concluída.

## Básico 01: limite de velocidade

Crie `avaliarVelocidade(velocidade, limite)`.

Critérios:

- aceite números ou textos numéricos;
- rejeite valores negativos;
- informe se houve infração;
- devolva quanto o limite foi ultrapassado;
- não escreva no console dentro da função.

## Básico 02: resumo de idades

Crie `resumirIdades(idades)`.

O retorno deve conter:

- menor idade;
- maior idade;
- média;
- quantidade de pessoas que não votam;
- quantidade com voto opcional;
- quantidade com voto obrigatório.

Não altere o array recebido.

## Básico 03: busca em números

Crie `buscarNumero(numeros, procurado)`.

O retorno deve diferenciar:

- número encontrado e sua posição;
- número ausente;
- entrada inválida.

Evite retornar `-1` sem explicar seu significado no contrato.

## Básico 04: renderizar tabuada

Use `criarTabuada` para construir uma página no navegador. A função de domínio deve permanecer sem acesso ao DOM.

Critérios:

- envio pelo evento `submit`;
- mensagem para entrada inválida;
- resultado criado com elementos do DOM;
- nenhuma concatenação de HTML recebida do usuário.
