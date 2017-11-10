# preact-cli-plugin-styled-components

Adds the [styled-components](https://www.styled-components.com/) Babel plugin to Preact CLI.

[![NPM version](https://img.shields.io/npm/v/preact-cli-plugin-styled-components.svg)](https://www.npmjs.com/package/preact-cli-plugin-styled-components)
[![Build Status](https://travis-ci.org/robinvdvleuten/preact-cli-plugin-styled-components.svg?branch=master)](https://travis-ci.org/robinvdvleuten/preact-cli-plugin-styled-components)

## Installation

```
$ npm install --save-dev preact-cli-plugin-styled-components
```

And include in your project by creating a `preact.config.js`:

```js
const styled = require('preact-cli-plugin-styled-components');

export default function (config, env, helpers) {
  styled(config, env, helpers);
}
```

## License

MIT © [Robin van der Vleuten](https://www.robinvdvleuten.nl)
