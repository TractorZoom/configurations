# @tractorzoom/semantic-release-config

Extendable semantic release configuration

[![Publish Status](https://github.com/TractorZoom/configurations/workflows/publish/badge.svg)](https://github.com/TractorZoom/configurations/actions)

Add badge to your repo's readme
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

```
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
```

## How do I use? :thinking:

##### Installation

```bash
npm i --save-dev @tractorzoom/semantic-release-config
```

##### Usage

Extend configuration in `release.config.js`

```js
module.exports = {
    extends: ['@tractorzoom/semantic-release-config']
};
```
