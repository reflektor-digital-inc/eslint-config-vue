# eslint-config-vue

This is the ESLint configuration for Vue projects at Reflektor Digital.

## What's inside this config?

- [`eslint`](https://www.npmjs.com/package/eslint)
- [`eslint-import-resolver-alias`](https://www.npmjs.com/package/eslint-import-resolver-alias)
- [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import)
- [`eslint-plugin-vue`](https://www.npmjs.com/package/eslint-plugin-vue)

## Installation

```
yarn add @reflektor/eslint-config-vue
```

ESLint only exports the configuration from this package and not the dependencies. Hence, in order to use this config, **we'll also need to install the dependencies separately**.

```
yarn add eslint eslint-import-resolver-alias eslint-plugin-import eslint-plugin-vue
```

## Usage

Once the package and dependencies are installed, we can apply this ESLint config into our project.

```js
// .eslintrc.js

module.exports = {
  // ...
  extends : [
    // ...
    '@reflektor/vue'
  ]
};
```

## License

[MIT License](./LICENSE.md)