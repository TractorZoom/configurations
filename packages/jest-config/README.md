# @tractorzoom/jest-config

Extendable jest configuration

[![Publish Status](https://github.com/TractorZoom/configurations/workflows/publish/badge.svg)](https://github.com/TractorZoom/configurations/actions)

Add badge to your repo's readme
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

```
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)
```

## How do I use? :thinking:

##### Installation

```bash
npm i --save-dev @tractorzoom/jest-config
```

##### Usage

Extend configuration in `jest.config.js`

```js
module.exports = require('@tractorzoom/jest-config');
```

##### Scripts

Add scripts to `package.json` to utilize [jest](https://github.com/facebook/jest).

```json
{
    "scripts": {
        "test": "jest",
        "test:contract": "jest --testPathPattern=__tests__/contract/",
        "test:unit": "jest --testPathPattern=__tests__/unit/"
    }
}

```
