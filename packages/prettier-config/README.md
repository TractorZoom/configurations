# @tractorzoom/prettier-config

Extendable prettier configuration

[![Publish Status](https://github.com/TractorZoom/configurations/workflows/publish/badge.svg)](https://github.com/TractorZoom/configurations/actions)

## How do I use? :thinking:

##### Installation

```bash
npm i --save-dev @tractorzoom/prettier-config
```

##### Usage

Extend configuration in `prettier.config.js`

```js
module.exports = require('@tractorzoom/prettier-config');
```

##### Scripts

Add scripts in `package.json`

```json
{
    "scripts": {
        "prettier:all": "prettier --write './**/*.*'",
        "pretty-quick": "pretty-quick"
    }
}

```