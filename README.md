# Book Registry Application

This is a fictional book registry application, where you can check existing books, add new and modify existing ones.

# Project architecture and structure

This project is using a feature based folder structure. All modules located in the root of the `src` folder should be considered as `global`. 

The `routes` folder includes all project features, and each feature has its own `operations`, `components` that should be used inside of the given feature.

# Installation

Minimum required version of node is 12.19.0

** In order to run the project, you need to rename the .env.example file to .env and set your environmental variables.**

#### Install dependencies:

```sh
npm install
```

#### Run in development mode:

```sh
npm start
```

#### Run unit and component tests:

```sh
npm test
```

#### Run Cypress test suites in browser

```sh
yarn run cy:open
```

#### Run Cypress test suites in headless mode

```sh
yarn run cy:run
```

**If you experience issues with running Cypress on your machine, please visit the following URL for further help https://docs.cypress.io/guides/guides/continuous-integration.html#Advanced-setup**

**Additional resource on how to enable graphical interfaces on WSL2 environments https://dev.to/nickymeuleman/using-graphical-user-interfaces-like-cypress-in-wsl2-249j**

#### Create a production build:

```sh
npm run build-prod
```

#### Create a development build:

```sh
npm run build-dev
```
#### Running

Open the file `dist/index.html` in your browser
