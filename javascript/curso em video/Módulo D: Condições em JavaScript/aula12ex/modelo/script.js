var bancoImagens = {
  menino: 'https://loremflickr.com/500/500/boy?lock=1',
  menina: 'https://loremflickr.com/500/500/girl?lock=2',

  jovemHomem: 'https://loremflickr.com/500/500/young,man?lock=3',
  jovemMulher: 'https://loremflickr.com/500/500/young,woman?lock=4',

  homem: 'https://loremflickr.com/500/500/man,portrait?lock=5',
  mulher: 'https://loremflickr.com/500/500/woman,portrait?lock=6',

  idoso: 'https://loremflickr.com/500/500/elderly,man?lock=7',
  idosa: 'https://loremflickr.com/500/500/elderly,woman?lock=8',
};

function verificar() {
  var agora = new Date();
  var anoAtual = agora.getFullYear();

  var campoAno = document.querySelector('#ano');
  var resultado = document.querySelector('#resultado');
  var imagem = document.querySelector('#imagem');

  var anoNascimento = Number(campoAno.value);

  // Primeiro valida o campo
  if (campoAno.value === '') {
    resultado.textContent = 'Digite seu ano de nascimento.';
    imagem.removeAttribute('src');
    return;
  }

  var idade = anoAtual - anoNascimento;

  // Depois valida se o ano e a idade fazem sentido
  if (anoNascimento > anoAtual || idade < 0 || idade > 120) {
    resultado.textContent = 'Ano de nascimento inválido.';
    imagem.removeAttribute('src');
    return;
  }

  var sexoSelecionado = document.querySelector('input[name="sexo"]:checked');

  if (sexoSelecionado === null) {
    resultado.textContent = 'Selecione o sexo.';
    imagem.removeAttribute('src');
    return;
  }

  var sexo = sexoSelecionado.value;

  if (sexo === 'masculino') {
    if (idade < 12) {
      resultado.textContent = `Detectamos um menino de ${idade} anos.`;
      imagem.src = bancoImagens.menino;
    } else if (idade < 18) {
      resultado.textContent = `Detectamos um jovem de ${idade} anos.`;
      imagem.src = bancoImagens.jovemHomem;
    } else if (idade < 60) {
      resultado.textContent = `Detectamos um homem de ${idade} anos.`;
      imagem.src = bancoImagens.homem;
    } else {
      resultado.textContent = `Detectamos um senhor de ${idade} anos.`;
      imagem.src = bancoImagens.idoso;
    }
  } else if (sexo === 'feminino') {
    if (idade < 12) {
      resultado.textContent = `Detectamos uma menina de ${idade} anos.`;
      imagem.src = bancoImagens.menina;
    } else if (idade < 18) {
      resultado.textContent = `Detectamos uma jovem de ${idade} anos.`;
      imagem.src = bancoImagens.jovemMulher;
    } else if (idade < 60) {
      resultado.textContent = `Detectamos uma mulher de ${idade} anos.`;
      imagem.src = bancoImagens.mulher;
    } else {
      resultado.textContent = `Detectamos uma senhora de ${idade} anos.`;
      imagem.src = bancoImagens.idosa;
    }
  }
}
