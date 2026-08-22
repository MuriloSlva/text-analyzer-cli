import fs from "fs";
import path from "path";
import chalk from "chalk";
import { Command } from "commander";
import { trataErro } from "./erros/funcoes-erro.js";
import { contaPalavras } from "./index.js";
import { saidaArquivo } from "./helpers.js";

const program = new Command();

program
  .version("0.0.1")
  .option("-t, --texto <string>", "caminho do texto a ser processado")
  .option("-d, --destino <string>", "caminho da pasta para salvar o resultado")
  .action((options) => {
    const { texto, destino } = options;

    if (!texto || !destino) {
      console.error(
        chalk.red("Erro: favor inserir caminho de origem e destino"),
      );
      program.help();
      return;
    }

    const caminhoTexto = path.resolve(texto);
    const caminhoDestino = path.resolve(destino);

    try {
      processArquivo(caminhoTexto, caminhoDestino);
      console.log(chalk.green("Texto processado com sucesso."));
    } catch (erro) {
      console.log(chalk.red("Ocorreu um erro no processamento."));
    }
  });

program.parse();

function processArquivo(texto, destino) {
  fs.readFile(texto, "utf-8", (erro, texto) => {
    try {
      if (erro) throw erro;
      const resultado = contaPalavras(texto);
      criaSalvaArq(resultado, destino);
    } catch (erro) {
      console.log(trataErro(erro));
    }
  });
}

function criaSalvaArq(listaPalavras, endereco) {
  const arquivoNovo = `${endereco}/resultado.txt`;
  const textoPalavras = saidaArquivo(listaPalavras);

  fs.promises
    .writeFile(arquivoNovo, textoPalavras)
    .then(() => {
      console.log(chalk.green("Arquivo criado."));
    })
    .catch((erro) => {
      throw erro;
    })
    .finally(() => console.log(chalk.green("Ação finalizada.")));
}
