function exigirNumeroFinito(valor, campo) {
  const numero = typeof valor === "number" ? valor : Number(valor);

  if (!Number.isFinite(numero)) {
    throw new TypeError(`${campo} deve ser um número válido`);
  }

  return numero;
}

export function somar(a, b) {
  return exigirNumeroFinito(a, "a") + exigirNumeroFinito(b, "b");
}

export function parOuImpar(valor) {
  const numero = exigirNumeroFinito(valor, "valor");

  if (!Number.isInteger(numero)) {
    throw new TypeError("valor deve ser um número inteiro");
  }

  return numero % 2 === 0 ? "par" : "ímpar";
}

export function classificarVoto(idadeInformada) {
  const idade = exigirNumeroFinito(idadeInformada, "idade");

  if (!Number.isInteger(idade) || idade < 0) {
    throw new TypeError("idade deve ser um número inteiro não negativo");
  }

  if (idade < 16) {
    return "não vota";
  }

  if (idade < 18 || idade >= 70) {
    return "opcional";
  }

  return "obrigatório";
}

export function saudacaoPorHora(horaInformada) {
  const hora = exigirNumeroFinito(horaInformada, "hora");

  if (!Number.isInteger(hora) || hora < 0 || hora > 23) {
    throw new RangeError("hora deve ser um inteiro entre 0 e 23");
  }

  if (hora < 6) return "Boa madrugada";
  if (hora < 12) return "Bom dia";
  if (hora < 18) return "Boa tarde";
  return "Boa noite";
}

export function nomeDoDia(indice) {
  const dias = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
  ];

  if (!Number.isInteger(indice) || indice < 0 || indice >= dias.length) {
    throw new RangeError("índice do dia deve estar entre 0 e 6");
  }

  return dias[indice];
}

export function criarContagem(inicioInformado, fimInformado, passoInformado = 1) {
  const inicio = exigirNumeroFinito(inicioInformado, "início");
  const fim = exigirNumeroFinito(fimInformado, "fim");
  const passo = exigirNumeroFinito(passoInformado, "passo");

  if (passo <= 0) {
    throw new RangeError("passo deve ser maior que zero");
  }

  const valores = [];

  if (inicio <= fim) {
    for (let atual = inicio; atual <= fim; atual += passo) {
      valores.push(atual);
    }
  } else {
    for (let atual = inicio; atual >= fim; atual -= passo) {
      valores.push(atual);
    }
  }

  return valores;
}

export function criarTabuada(numeroInformado, limite = 10) {
  const numero = exigirNumeroFinito(numeroInformado, "número");

  if (!Number.isInteger(limite) || limite < 1) {
    throw new RangeError("limite deve ser um inteiro maior que zero");
  }

  return Array.from({ length: limite }, (_, indice) => {
    const multiplicador = indice + 1;

    return {
      multiplicando: numero,
      multiplicador,
      resultado: numero * multiplicador
    };
  });
}

export function ordenarNumeros(numeros) {
  if (!Array.isArray(numeros)) {
    throw new TypeError("números deve ser uma lista");
  }

  const valores = numeros.map((numero) => exigirNumeroFinito(numero, "item"));

  return valores.toSorted((a, b) => a - b);
}
