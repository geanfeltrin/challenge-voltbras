<h4 align="center">
	🐱‍🚀 Desafio Backend Voltbras
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#user-content-️-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> •
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-autores">Autor</a> •
 <a href="#user-content--licença">Licença</a> •
 <a href="#user-content-versões-do-readme">Versão Inglês</a>
</p>

## 💻 Sobre o projeto

🐱‍🚀 Essa é uma aplicação backend feita com graphql para resolver um problema de quais planetas a Voltbras poderá instalar seus novos postos de carregamento para otimizar os serviços de recargas.

Mais detalhes sobre o processo de desenvolvimento acesse o link: https://bit.ly/2GQmtPE

Para isso:

- utilize a API da Arcsecond, o que te possibilita buscar os planetas fora do sistema solar!(mais especificamente batendo em GET /exoplanets/)

- só mostre os planetas com gravidade alta, os dados não mostram exatamente qual gravidade o planeta tem, mas a - Voltbras fez os cálculos e os planetas ideais(com gravidade alta),
  são aproximadamente os mesmos que têm sua massa(exoplanet.mass.value) maior que 25 M_jup (exoplanet.mass.unit)

A Voltbras é a primeira empresa a oferecer um software de gestão de postos de veículos elétricos.

## ⚙️ Funcionalidades

- [x] Listagem dos planetas adequados
- [x] Cadastro de uma estação

---

## 🚀 Como executar o projeto

💡 Instale a versão do nodejs maior ou igual a 12.9.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com/) caso você queira executar por ele.
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🧭 Rodando a aplicação

```bash

# Clone este repositório
$ git clone https://github.com/geanfeltrin/challenge-voltbras.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd challenge-voltbras

```

## Rodando de forma comum

```bash
# Crie um arquivo .env na raiz do projeto
# Linux ou MAC:
$ touch .env
# Windows:
$ echo > .env
# copie os dados do arquivo .env.example e cole no .env
# preencha as informações da sua conexão com o banco de dados
# você deve alterar o POSTGRESQL_USER e POSTGRESQL_PASSWORD e POSTGRESQL_PORT
# colocando igual a configuração do banco de dados.
# No arquivo .env.example tera 2 variaveis database_url descomente a referente ao localhost.
# será igual a essa:
# "DATABASE_URL=postgresql://POSTGRESQL_USER:POSTGRESQL_PASSWORD@localhost:POSTGRESQL_PORT/challenge_voltbras?schema=public&sslmode=prefer".

# Após configurar o arquivo .env instale as dependências
$ yarn ou npm run install

# Caso você não tenha criado um banco execute o comando
$ yarn create:db ou npm run create:db

# Execute as migrations
$ yarn migrate:up ou npm run migrate:up

# Feito tudo isso inicie a aplicação
$ yarn dev

# A aplicação será aberta na porta:4000 - acesse http://localhost:4000

```

## Rodando com docker

```bash

# Crie um arquivo .env na raiz do projeto
# Linux ou MAC:
$ touch .env
# Windows:
$ echo > .env
# copie os dados do arquivo .env.example e cole no .env
# preencha as informações da sua conexão com o banco de dados
# você deve alterar o POSTGRESQL_USER e POSTGRESQL_PASSWORD e POSTGRESQL_PORT
# colocando igual a configuração do banco de dados.
# No arquivo .env.example tera 2 variaveis database_url descomente a referente ao docker.
# será igual a essa:
# "DATABASE_URL=postgresql://POSTGRESQL_USER:POSTGRESQL_PASSWORD@postgres:POSTGRESQL_PORT/challenge_voltbras?schema=public&sslmode=prefer".

# Após configurar o arquivo .env execute o comando
$ yarn docker:build

# Aguarde o docker rodar o build, esse processo leva um tempo.

# Em seguida, execute o comando para rodar as migrations
$ yarn docker:migrate

# A aplicação será aberta na porta:4000 - acesse http://localhost:4000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Backend** ([NodeJS])(https://nodejs.org/)([Apollographql])(https://www.apollographql.com/docs/)

- **[Apollographql](https://www.apollographql.com/docs/)**
- **[Prisma](https://www.prisma.io/)**
- **[GraphQl](https://graphql.org/)**
- **[Typescript](https://www.typescriptlang.org/)**
- **[Postgres](https://www.postgresql.org/)**
- **[Jest](https://jestjs.io/)**

## 🦸 Autores

<a href="https://github.com/geanfeltrin">
 <img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/32302438?s=460&u=16efbd85b761114e0effe20244bddd2d19f230f8&v=4" width="100px;" alt=""/>
 <br />
  <sub>
    <b>Gean Feltrin - Web Developer</b>
  </sub>
</a>
 <br />

[![Twitter Badge](https://img.shields.io/badge/-@Geanfeltrin1-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/tgmarinho)](https://twitter.com/Geanfeltrin1) [![Linkedin Badge](https://img.shields.io/badge/-Gean-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/geanfeltrin/)](https://www.linkedin.com/in/geanfeltrin/)
[![Gmail Badge](https://img.shields.io/badge/-geanfeltrin75@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:geanfeltrin75@gmail.com)](mailto:geanfeltrin75@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Gean Feltrin 👋🏽 [Entre em contato!](https://www.linkedin.com/in/geanfeltrin/)

---

## Versões do README

[Português 🇧🇷](./README-PT.md) | [Inglês 🇺🇸](./README.md)
