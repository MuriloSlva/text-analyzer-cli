export function contaPalavras(texto) {
  const paragrafos = extraiParagrafo(texto);
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return [];
    return filtraPalavrasDuplicadas(paragrafo);
  });

  return contagem;
}

function extraiParagrafo(texto) {
  return texto.toLowerCase().split("\n");
}

function limpaTexto(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

function filtraPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(" ");
  const resultado = {};

  listaPalavras.forEach((palavra) => {
    if (palavra.length >= 3) {
      const palavraLimpa = limpaTexto(palavra);
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
    }
  });

  return resultado;
}
