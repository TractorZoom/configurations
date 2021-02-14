# @tractorzoom/prettier-config

Extendable prettier configuration

[![Publish Status](https://github.com/TractorZoom/configurations/workflows/publish/badge.svg)](https://github.com/TractorZoom/configurations/actions)

Add badge to your repo's readme
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

```
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
```

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