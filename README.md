# Hanas

[![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/auctumnus/hanas-server?style=flat-square)](https://snyk.io)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/auctumnus/hanas-server/Node.js%20CI?style=flat-square)](https://github.com/auctumnus/hanas-server/actions?query=workflow%3A"Node.js+CI")
[![better than cws](https://img.shields.io/badge/better%20than-cws-blue?style=flat-square)](https://www.youtube.com/watch?v=xmkifWcTXiI)

Hanas is a webapp and community built for conlanging. It is primarily inspired by the work of [ConWorkShop](https://conworkshop.com). The backend here is built using [NestJS](https://nestjs.com).

## Installation

At the moment, Hanas uses [SQLite3](https://sqlite.org/index.html), so by default, no external database services need to be run, although this will likely change in the future.

Install the Node dependencies by running:

```bash
$ npm install
```

You will also need to supply [AWS S3](https://aws.amazon.com/s3/) credentials, and optionally a [Cloudfront](https://aws.amazon.com/cloudfront/) domain to use. Hanas will likely fit in the free tier, so you shouldn't need to worry about it.

## Configuration

The `.env.defaults` file holds many configuration options that you should explore. If you want to change any of them, then you can either add a .env file or use environment variables. The defaults are usually fine, although you will need to add your S3 credentials.

You may wish to edit the `ormconfig.json` to fit your particular database needs. Note that switching databases entirely will probably require you to install the relevant packages - see [typeorm](https://github.com/typeorm/typeorm) for more information on which databases are supported and which packages should be used.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# run e2e tests
$ npm run test
```

Running tests shouldn't delete the database, but be wary about it.

## API Description

Work in progress. Hanas is likely going to use [Optic](https://github.com/opticdev/optic) for the API spec, but coverage is still far from perfect. See the Optic link for more about how to get the current API spec. Reading the dto folders in each model's folder will give you a good idea of the shape of requests. Some additional information exists at the [wiki](https://github.com/auctumnus/hanas-server/wiki).
