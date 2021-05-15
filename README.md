
<p align="center">
  <img src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/masterclass.png" height="150" width="150" alt="logo" />
</p>

<h3 align="center">
   NodeJs Api com testes E2E e principios Solid <br> :alien:
</h3>

<div align="center">

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

![Testes de API](https://github.com/PauloGoncalvesBH/sample-supertest/workflows/Testes%20de%20API/badge.svg)

</div>

# [Api Saude](http://bit.ly/nodeapisaude)

* Deployed no Digital Ocean


**Uma API para manutenção de laboratórios e exames feita em NodeJS + [Supertest](https://www.npmjs.com/package/supertest) e [Mocha](https://www.npmjs.com/package/mocha)**

- [Instalação e execução](#instalação-e-execução)
  - [Pré-requisitos](#pré-requisitos)
  - [Sobre o projeto](#o-que-tem-nesse-projeto)
  - [Executando o projeto](#executando-o-projeto)
- [Testes de API](#testes-de-api)
  - [Pré-requisito](#pré-requisito)
  - [Executando os testes](#executando-os-testes)
  - [Resultado](#resultado)
- [Arquitetura utilizada](#arquitetura-utilizada)
  - [Dependências utilizadas](#dependências-utilizadas)
  - [Estrutura de diretórios](#estrutura-de-diretórios)
  - [license](#license)
- [Lint](#lint)

---

## Instalação e execução

### Pré-requisitos

- [Git](https://git-scm.com/download/) 
- [Node.js](https://nodejs.org/en/download/)
- Docker
- Docker compose

### O que tem nesse projeto

O objetivo desse projeto é construir uma API para manutenção de laboratórios e exames. O que tem até agora:

| features | status |
|--|--|
| API RESTful NodeJS | ✅ |
| CRUD Exames | ✅ |
| CRUD Laboratórios | ✅ |
| Associar um exame a um laboratório | ✅ |
| Desassociar um exame a um laboratório | ✅ |
| Busca laboratório por nome de exame | ✅ |
| Documentaçao da Api com swagger & JSDOCS | ✅ |
| Api configurada com Docker & docker-compose | ✅ |    
| Api publicada no Digital ocean | ✅ |    
| Script de deploy da Api  | ✅ |    

TODO: Adicionar a possibilidade de executar cadastro, atualização e remoção em lote. Atualmente estou com um Mac de apenas 128gb de ssd e não consigo espaço suficiente para subir muitos containers docker. Visto que a solução que desejo implantar essa feature é com [background jobs usando Redis & Bull](https://github.com/quixote15/masterclass-bgjobs.git).
## Executando o projeto

Todos os comandos abaixo são feitos no terminal

### Executando localmente
**1** - Faça um clone do repositório e acesse o diretório criado pelo clone.

```sh
git clone https://github.com/quixote15/nodejs-api-saude.git && cd nodejs-api-saude
```

**2** - Com o Node v14+ já instalado em sua máquida, execute:

```sh
npm run start
```

Ao rodar o ambiente localmente, é necessário ter node instalado, gerenciar e verifica problemas de versões de dependencias, ter uma instancia de um banco MongoDb rodando e configurar as variáveis de ambiente no arquivo `.env`

### Executando com Docker 

**1** - Faça um clone do repositório e acesse o diretório criado pelo clone.

```sh
git clone https://github.com/quixote15/nodejs-api-saude.git && cd nodejs-api-saude
```

**2** - Com o docker e docker Compose já instalado em sua máquida, execute:

```sh
docker-compose up
```

Após isso é só aguardar o docker subir os container e pronto. A api estará disponível em `localhost:3000`.

Caso você não tenha o docker e docker-compose instalado pode utilizar o seguinte script para salvar alguns minutos ou até horas:

```curl https://raw.githubusercontent.com/quixote15/deploy-scripts/master/install-api-saude.sh | sh```

**install-api-saude.sh** faz o seguinte:

- Instala o **Docker**
- Instala o **Docker Compose**
- Instala o **NodeJS**
- Instala o **npm**
- Clona o projeto [Api Saude NodeJS](https://github.com/quixote15/nodejs-api-saude.git)

O script acima é util quando existem mais de um ambiente de deployment ou 
compartilhamento entre diversas pessoas no time. Garante compatibilidade e agilidade no setup. O código fonte de está [aqui](https://raw.githubusercontent.com/quixote15/deploy-scripts). 

### Testes de API

Os testes foram realizados em utiliando TDD e foram principalmente teste end-to-end.

#### Executando os testes

Para executar os testes localmente (_http://localhost:3000_) é preciso subir o ambiente local utilizando NPM ou Docker.
Após isso execute:

```sh
npm test
```

Para gerar o relatório de cobertura de testes execute:

```sh
npm test:cov
```

#### Resultado

O resultado dos testes são apresentados no terminal e em report HTML gerado com [NYC](https://www.npmjs.com/package/nyc).

<img src=https://github.com/quixote15/nodejs-api-saude/blob/main/assets/tests.png height="400">

## Arquitetura utilizada

Para essa api foi utilizada a arquitetura MVC que divide a aplicaçao em três partes. O Model, a View e o Controller. Além disso, principios S.O.L.I.D estão presentes em todo projeto visando reduzir a complexidade do código, o acoplamento entre classes, separar responsabilidades e definir muito bem as relações entre elas.

O S.O.L.I.D é um acrônimo que representa cinco princípios da programação orientada a objetos e design de código teorizado por Robert C. Martin.

[S]ingle Responsibility Principle (Princípio da Responsabilidade Única)
[O]pen/Closed Principle (Princípio do Aberto/Fechado)
[L]iskov Substitution Principle (Princípio da Substituição de Liskov)
[I]nterface Segregation Principle (Princípio da Segregação de Interfaces)
[D]ependency Inversion Principle (Princípio da Inversão de Dependências)

Além disso, explorei alguns design parterns como o Builder, factory e o Generic repository.

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

- :file_folder: [src/config](src/config): Dir com as variáveis  e classes que configuram e inicializam do ambiente (ex.: conexao com banco de dados)
- :file_folder: [src/controllers](src/controllers): Dir com Controllers responsáveis pelos endpoints
- :file_folder: [src/domain](src/domain): Dir com domain entities e lógica de negócio
- :file_folder: [src/models](src/models): Dir com models e schemas
- :file_folder: [src/repository](src/repository): Dir com adapters para operaçoes no banco de dados 
- :file_folder: [src/services](src/services): Dir com services que precisem executar alguma regra de negócio
- :file_folder: [src/utils](src/utils): Dir com classes e metodos utilitários em geral
- :file_folder: [tests/](tests): Dir com os testes das rotas e arquivos que auxiliam a automação
- :page_with_curl: [package.json](package.json): Arquivo com informações das dependências do projeto, licença, scripts, autor, etc. Para saber mais [clique aqui](https://docs.npmjs.com/files/package.json)

# License

[MIT License ](https://github.com/barbosamaatheus/english-talking-api/blob/master/LICENSE) ©

