<p align="center">
  <h3 align="center">Green Acesso Challenge</h3>
  <p align="center">
    Backend para aplicação de Portaria e Financeiro
  </p>
  <p align="center">
    <a href="https://www.typescriptlang.org/">
      <img src="https://img.shields.io/badge/MADE%20WITH-TypeScript-007acc?style=for-the-badge&labelColor=35495d" alt="Built with TypeScript">
    </a>
    <a href="https://nodejs.org/">
      <img src="https://img.shields.io/badge/Node-7ac024?style=for-the-badge&labelColor=35495d" alt="Built with NodeJS">
    </a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Índice

-   [Índice](#Ídice)
-   [Introdução](#Introdução)
-   [Começando](#Começando)
    -   [Pré-requisitos](#Pré-requisitos)
    -   [Instalação Uso](#Instalação-E-Uso)
        -   [Uso Via NPM](#Uso-Via-NPM)
        -   [Instalacao de Dependencias](#Instalacao-de-Dependencias)
        -   [Uso da API](#Uso-da-API)

<!-- ABOUT THE PROJECT -->

## Introdução

Esse projeto, foi feito utilizando NodeJs e TypeScript, Postgresql.
Bibliotecas para auxiliar na produção do projeto.
A arquitetura utilizada foi CleanArch.

## Começando

Certifique-se de criar um arquivo .env igual o arquivo .env-example.

#### Pré-requisitos

`npm` e `node 18.12.1` instalado(os) em sua máquina.

#### Instalação-E-Uso

Clone o repositório

```sh
git clone `https://github.com/tiagocsl/desafio-green-acesso.git`
cd desafio-green-acesso
```

##### Uso-Via-NPM

Install npm dependencies

```sh
npm i
```

Buildar App

```sh
npm run build
```

Inicilizar App

```sh
npm run start
```

Modo DEV

```sh
npm run dev
```

##### Instalacao-de-Dependencias

Caso queira usar o Postgre via docker, utilize a seguinte sequencia de comandos:

```sh
docker pull postgres
```

```sh
docker run -d -p 5433:5432 --name "NOME-DO-CONTAINER" -e POSTGRES_USER="NOME-DO-POSTUSER" -e POSTGRES_PASSWORD="SENHA-DB" --mount src=db-green,dst=/var/lib/postgresql/data postgres
```

Caso queira usar o PgAdmin via docker, utilize a seguinte sequencia de comandos:

```sh
docker pull dpage/pgadmin4
```

```sh
docker run -p 80:80 -e PGADMIN_DEFAULT_EMAIL=user@domain.com -e PGADMIN_DEFAULT_PASSWORD="12345" -d dpage/pgadmin4
```

Para acessar o pgadmin, acesse localhost:80

Caso tenha problemas para acessar o servidor do Postgres pelo PgAdmin, utilize o comando `docker ps`,
ira mostrar os containers ativos.
Após isso, digite o comando `docker inspect ~ID~`, no lugar de ID, digite os 5 primeiros digitos do id do container do Postgres. Então, procure o IP que o container está rodando, utilze esse IP no campo `HOST` durante a conexão com o Postgres.

##### Uso-da-API

A API estará disponível em `localhost:3000`.
O endpoint base para usufruto da API, `/api`, ou seja, `localhost:3000/api`.
