# moni-web-ui-kit

This library components and utils are a part of [getmoni.io](https://bit.ly/getmoniio) projects

## Installation

or using yarn:
```bash
yarn add moni-web-ui-kit
```


For using the library, you have to transpile files inside your project, for example using Next.js you can use `next-transpile-modules` package

Add to next.config.js
```js
const withTM = require('next-transpile-modules')(['moni-web-ui-kit']);

module.exports = withTM({});
```

Also need to be installed some types
```bash
yarn add -D @types/qs @types/node
```
