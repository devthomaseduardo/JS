# DOM e eventos

DOM é a representação do documento HTML disponível para o JavaScript no navegador.

## Fluxo recomendado

1. selecione o elemento;
2. escute o evento;
3. leia e valide a entrada;
4. execute uma função de regra;
5. apresente o resultado.

```js
import { somar } from "./fundamentos.js";

const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const dados = new FormData(formulario);

  try {
    const total = somar(dados.get("numeroA"), dados.get("numeroB"));
    resultado.textContent = `Resultado: ${total}`;
  } catch (erro) {
    resultado.textContent = erro.message;
  }
});
```

## Pontos revistos

- prefira `textContent` para texto comum;
- use `innerHTML` somente quando realmente precisar criar marcação;
- evite atributos como `onclick="somar()"`; mantenha eventos no JavaScript;
- formulários devem tratar `submit`, não somente o clique;
- confirme se `querySelector` encontrou o elemento;
- não misture cálculo e atualização visual na mesma função;
- valide o texto original antes de depender de `Number(valor)`.

Separar as responsabilidades permite testar a regra sem abrir o navegador.
