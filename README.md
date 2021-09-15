<h1 align="center">
  <img alt="EDUICK" title="EDUICK" src="https://raw.githubusercontent.com/edusynch/frontend-challenge/main/.github/logo.png" width="200" />
</h1>

![Layout do eduick](https://raw.githubusercontent.com/edusynch/frontend-challenge/main/.github/eduick.png)

## 📝 Descrevendo Solução

- A aplicação foi feita em [Next.js](https://nextjs.org/) em conjunto com [SASS](https://sass-lang.com/) e um servidor [Express](https://expressjs.com/pt-br/).
- Para a escrita do estilo nas páginas foram utilizados principios da metodologia **BEM**.
- Foi desenvolvido um servidor **express** para servir uma api estática que renderiza as páginas da aplicação.
- O desenvolvimento das páginas foi feito com base na abordagem arquitetural da **componentização**.
- A ferramenta `eslint` foi utilizada junto ao `prettier` na padronização da escrita dos arquivos `.js` e `.jsx`.
- O recurso dos **Hooks customizados** foi utilizado para a lógica da responsividade.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Versão do node `node@10.24.1` ou superior

## 🚀 Instalando o projeto

Para instalar o projeto basta executar os comandos:

```
git clone https://github.com/Rezende123/eduick.git
npm install
```

## ☕ Usando o projeto

Para executar a versão básica (desenvolvimento) execute o comando:

```
npm run dev
```

Para executar o servidor express execute o comando:

```
npm run start:express
```

Para executar em produção execute os comandos:

```
npm run build
npm start
```
A aplicação roda na porta `3000`, para acessar a página Landing Page basta navegar até http://localhost:3000 e até http://localhost:3000/Dashboard para acessar o Dashboard


