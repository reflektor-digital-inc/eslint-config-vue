# eslint-config-vue

This is the ESLint configuration for Vue projects at Reflektor Digital.

## What's inside this config?

- [`eslint`](https://www.npmjs.com/package/eslint)
- [`eslint-import-resolver-alias`](https://www.npmjs.com/package/eslint-import-resolver-alias)
- [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import)
- [`eslint-plugin-vue`](https://www.npmjs.com/package/eslint-plugin-vue)

## Installation

```
yarn add @reflektor/eslint-config-vue -D
```

ESLint only exports the configuration from this package and not the dependencies. Hence, in order to use this config, **we'll also need to install the dependencies separately**.

```
yarn add eslint eslint-import-resolver-alias eslint-plugin-import eslint-plugin-vue -D
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

## Guidelines

- [Code of Conduct](./docs/CODE_OF_CONDUCT.md)
- [Contributing](./docs/CONTRIBUTING.md)
- [Code Review](./docs/CODE_REVIEW.md)
- [Git Standards](./docs/GIT_STANDARDS.md)
- [Pull Request Template](./docs/PULL_REQUEST_TEMPLATE.md)

## License

[MIT License](./LICENSE.md)