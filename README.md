# Text Analyzer CLI

Uma aplicação de linha de comando desenvolvida em Node.js para análise de arquivos `.txt`, identificando palavras repetidas e exibindo em quais parágrafos elas aparecem.

## 🎯 Objetivo

Projeto desenvolvido durante o curso de JavaScript para Backend da Alura com foco em:

- Manipulação de arquivos com Node.js
- Programação assíncrona
- Criação de aplicações CLI
- Tratamento de erros
- Utilização de bibliotecas externas

## 🚀 Funcionalidades

- Leitura de arquivos `.txt` via linha de comando
- Separação e análise de palavras por parágrafo
- Identificação de palavras repetidas
- Geração automática de um novo arquivo `.txt` com os resultados
- Nome customizado para o arquivo de saída
- Tratamento de erros com `try/catch`
- Feedback visual no terminal com `chalk`

## 🛠️ Tecnologias

- JavaScript (ES6+)
- Node.js

### Bibliotecas utilizadas

- `fs` → leitura e escrita de arquivos
- `path` → manipulação de caminhos
- `chalk` → estilização do terminal
- `commander` → criação da interface CLI

## 📷 Exemplo de uso

```bash
node src/cli.js -t arquivos/texto-kanban.txt -d ./resultados/
```

### Exemplo de saída

```
Palavras duplicadas no parágrafo 3: que, você, tenha
Palavras duplicadas no parágrafo 12: que, estão
...
```

## 🔗 Execução

1. Clone o repositório:

```bash
git clone <https://github.com/seuusuario/text-analyzer-cli.git>
```

1. Instale as dependências:

```bash
npm install
```

1. Execute o projeto:

```bash
node src/cli.js
```

## 📚 Aprendizados

- Manipulação de arquivos utilizando Node.js
- Uso de programação assíncrona com `async/await`
- Tratamento de erros com `try/catch`
- Criação de aplicações de linha de comando
- Estruturação modular com `import/export`
- Utilização de bibliotecas externas via NPM
- Processamento e organização de dados textuais

## 📌 Conceitos aplicados

- Promises
- Async/Await
- CLI (Command Line Interface)
- Modularização
- Leitura e escrita de arquivos
- Estruturas de dados em JavaScript
