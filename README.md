# fastify-webpack-dev-middleware

A fastify webpack dev middleware

## Install
npm:
```
npm install fastify-webpack-dev-server --save
```
yarn:
```
yarn add fastify-webpack-dev-server --save
```

## Usage
```javascript
const fastify = require('fastify')()

fastify.register(require('fastify-webpack-dev-middleware'), {
    config: {
        // entry,
        // output
        // ...
    },
    options: {
        // filename,
        // path
    }
})
```