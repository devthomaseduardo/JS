# Método de estudo

O objetivo não é acumular aulas. É demonstrar que você consegue entender um problema, definir um contrato, implementar, testar e explicar uma decisão.

## Ciclo de um exercício

1. **Entender:** identifique entradas, saída esperada e restrições.
2. **Planejar:** escreva exemplos antes do código.
3. **Implementar:** resolva primeiro o caminho principal.
4. **Validar:** cubra erros e limites com testes.
5. **Refatorar:** melhore nomes e responsabilidades sem mudar o comportamento.
6. **Explicar:** registre por que a solução funciona.

## Registro sugerido

Ao concluir um exercício, acrescente ao README dele:

- decisão principal;
- erro encontrado;
- como confirmou a correção;
- o que faria diferente em produção.

## Fluxo Git

Use uma branch por exercício:

```bash
git switch -c exercicio/js-01-normalizar-pedido
git add .
git commit -m "feat(js): resolve normalização de pedido"
```

Um commit deve comunicar uma mudança verificável. Evite mensagens como `alterações`, `teste` ou `final`.
