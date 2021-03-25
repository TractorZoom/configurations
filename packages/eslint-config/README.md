# @tractorzoom/eslint-config

Extendable eslint configuration

[![Publish Status](https://github.com/TractorZoom/configurations/workflows/publish/badge.svg)](https://github.com/TractorZoom/configurations/actions)

##### Installation

```bash
npm i --save-dev @tractorzoom/eslint-config
```

##### Usage

Extend configuration in `.eslintrc.js`


```js
// If vanilla js project
module.exports = require('@tractorzoom/eslint-config').baseConfig;

// If typescript project
module.exports = require('@tractorzoom/eslint-config').tsConfig;

// If react project
module.exports = require('@tractorzoom/eslint-config').reactConfig;
```

##### Scripts

Add script to `package.json` to utilize [eslint](https://eslint.org/).

Script takes in 1 param for a base directory to start linting. Can pass in optional params for file extensions if you want to lint typescript files as well.

```json
{
    "scripts": {
        "lint": "eslint --ext .ts,.js ./src"
    }
}

```
