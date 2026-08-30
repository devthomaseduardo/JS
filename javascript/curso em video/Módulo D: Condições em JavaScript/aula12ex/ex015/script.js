// Ajusta mensagem, imagem e cor da página de acordo com a hora atual.
var bancoImagens = {
  manha: 'img/manha.jpeg',
  tarde: 'img/tarde.jpeg',
  noite: 'img/noite.jpeg',
};

function carregar() {
  var agora = new Date();
  var hora = agora.getHours();
  var mensagem = document.querySelector('#mensagem');
  var imagem = document.querySelector('#imagem');

  if (hora >= 0 && hora < 12) {
    mensagem.textContent = `Bom dia! Agora são ${hora} horas.`;
    imagem.src = bancoImagens.manha;
    document.body.style.backgroundColor = '#b4cdeb';
  } else if (hora >= 12 && hora < 18) {
    mensagem.textContent = `Boa tarde! Agora são ${hora} horas.`;
    imagem.src = bancoImagens.tarde;
    document.body.style.backgroundColor = '#ffae36';
  } else {
    mensagem.textContent = `Boa noite! Agora são ${hora} horas.`;
    imagem.src = bancoImagens.noite;
    document.body.style.backgroundColor = '#284060';
  }
}

carregar();
