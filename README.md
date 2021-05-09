# NodeJs Api com testes E2E e principios Solid 

![Testes de API](https://github.com/PauloGoncalvesBH/sample-supertest/workflows/Testes%20de%20API/badge.svg)
[![ServeRest API](https://img.shields.io/badge/API-ServeRest-green)](https://github.com/PauloGoncalvesBH/ServeRest/)

**Uma API para manutenção de laboratórios e exames feita em NodeJS + [Supertest](https://www.npmjs.com/package/supertest) e [Mocha](https://www.npmjs.com/package/mocha)**

- [Instalação e execução](#instalação-e-execução)
  - [Pré-requisitos](#pré-requisitos)
  - [Clonando o repositório](#clonando-o-repositório)
- [Testes de API](#testes-de-api)
  - [Pré-requisito](#pré-requisito)
  - [Executando os testes](#executando-os-testes)
  - [Resultado](#resultado)
- [Sobre o projeto](#sobre-o-projeto)
  - [Dependências utilizadas](#dependências-utilizadas)
  - [Estrutura de diretórios](#estrutura-de-diretórios)
  - [Ambiente](#ambiente)
- [Lint](#lint)

---

## Instalação e execução

### Pré-requisitos

- [Git](https://git-scm.com/download/) e [Node.js](https://nodejs.org/en/download/) instalados.

### Clonando o repositório

Todos os comandos abaixo são feitos no terminal

**1** - Faça um clone do repositório e acesse o diretório criado pelo clone.

```sh
git clone https://github.com/PauloGoncalvesBH/sample-supertest && cd sample-supertest
```

**2** - Instale as dependências do projeto:

```sh
npm install
```

### Testes de API

Os testes foram realizados em cima do [Serverest](https://github.com/PauloGoncalvesBH/ServeRest), que fornece rotas REST para fins de estudos.

#### Executando os testes

Caso queira apenas rodar os testes, sem precisar subir ambiente, execute o seguinte comando:

> Os testes serão executados em cima da página [serverest.dev](http://serverest.dev/)

```sh
npm run test
```

Para executar os testes localmente (_http://localhost:3000_) é preciso subir o ambiente local utilizando NPM ou Docker. [Verifique aqui como](https://github.com/PauloGoncalvesBH/ServeRest#ambientes-dispon%C3%ADveis). Após isso execute:

```sh
npm test
```

As variáveis por ambiente estão definidos dentro dos arquivos _*.config.js_ em [config/](config).

#### Resultado

O resultado dos testes são apresentados no terminal e em report HTML gerado com [mochawesome](https://www.npmjs.com/package/mochawesome).

<img src=https://user-images.githubusercontent.com/29241659/83446839-cbe8d380-a425-11ea-991b-c36cb0337859.png height="400">

## Sobre o projeto

### Dependências utilizadas
| lib | descrição
| --- | ---
| [NodeJs 14+](https://nodejs.org/en/) | Versão do NodeJS
| [Supertest](https://www.npmjs.com/package/supertest) | Biblioteca de automação de API
| [Mocha](https://www.npmjs.com/package/mocha) | Estrutura (`describe`, `it`, etc) e runner da automação
| [NYC](https://www.npmjs.com/package/nyc) | relatórios de cobertura de testes
| [Cross-env](https://www.npmjs.com/package/cross-env)| Criação de variável de ambiente

As dependências estão definidas no [package.json](./package.json).

### Estrutura de diretórios

```
api-project/
 ├─ src/
 |   ├─ config
 |   └─ controllers
 |   └─ domain
 |   └─ interfaces
 |   └─ models
 |   └─ repository
 |   └─ services
 |   └─ utils
 ├─ tests/
 |   ├─ e2e*/
 |       ├─ api.test.js
 ├─ docs/
 └─ package.json
```

- :file_folder: [src/](config): Dir com as variáveis  e classes que configuram e inicializam do ambiente (ex.: conexao com banco de dados)
- :file_folder: [src/](controllers): Dir com Controllers responsáveis pelos endpoints
- :file_folder: [src/](domain): Dir com domain entities e lógica de negócio
- :file_folder: [src/](models): Dir com models e schemas
- :file_folder: [src/](repository): Dir com adapters para operaçoes no banco de dados 
- :file_folder: [src/](services): Dir com services que precisem executar alguma regra de negócio
- :file_folder: [src/](utils): Dir com classes e metodos utilitários em geral
- :file_folder: [test/](test): Dir com os testes das rotas e arquivos que auxiliam a automação
- :page_with_curl: [package.json](package.json): Arquivo com informações das dependências do projeto, licença, scripts, autor, etc. Para saber mais [clique aqui](https://docs.npmjs.com/files/package.json)

### Ambiente

## Lint

É boa prática que os arquivos estejam padronizados, seguindo o padrão de estilo do JS.
Para isso é utilizado a lib [Standard](https://www.npmjs.com/package/standard).

Após o término da sua implementação, execute:

`npm run lint:fix`
