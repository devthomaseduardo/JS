// Gera dinamicamente a tabuada do número informado usando uma repetição de 1 a 10.
function gerarTabuada() {
  var campoNumero = document.querySelector('#numero');
  var resultado = document.querySelector('#resultado');

  if (campoNumero.value === '') {
    resultado.innerHTML = '<p class="erro">Digite um número.</p>';
    return;
  }

  var numero = Number(campoNumero.value);

  resultado.innerHTML = `
    <div class="titulo-resultado">
      Tabuada do ${numero}
    </div>
  `;

  for (var contador = 1; contador <= 10; contador++) {
    var multiplicacao = numero * contador;

    resultado.innerHTML += `
      <div class="linha-tabuada">
        <span>${numero} × ${contador}</span>
        <strong>${multiplicacao}</strong>
      </div>
    `;
  }
}
