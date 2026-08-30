// Valida início, fim e passo antes de gerar uma contagem crescente ou decrescente.
function contar() {
  var campoInicio = document.querySelector('#inicio');
  var campoFim = document.querySelector('#fim');
  var campoPasso = document.querySelector('#passo');

  var resultado = document.querySelector('#resultado');

  if (campoInicio.value === '' || campoFim.value === '' || campoPasso.value === '') {
    resultado.textContent = 'Preencha todos os campos.';
    return;
  }

  var inicio = Number(campoInicio.value);
  var fim = Number(campoFim.value);
  var passo = Number(campoPasso.value);

  if (passo <= 0) {
    passo = 1;
  }

  resultado.innerHTML = '';

  if (inicio <= fim) {
    for (var contador = inicio; contador <= fim; contador += passo) {
      resultado.innerHTML += `${contador} 👉 `;
    }
  } else {
    for (var contador = inicio; contador >= fim; contador -= passo) {
      resultado.innerHTML += `${contador} 👈 `;
    }
  }

  resultado.innerHTML += '🏁';
}
