# @tractorzoom/commitizen-config

Extendable commitizen configuration

[![Publish Status](https://github.com/TractorZoom/configurations/workflows/publish/badge.svg)](https://github.com/TractorZoom/configurations/actions)

Add badge to your repo's readme
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

```
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
```

## How do I use? :thinking:

##### Installation

```bash
npm i --save-dev @tractorzoom/commitizen-config
```

##### Configuration

Add `.czrc` file

```json
{
    "path": "cz-conventional-changelog"
}
```

##### Scripts

Add scripts to `package.json`.

```json
{
    "scripts": {
        "commit": "git-cz"
    }
}

```

Run `npm run commit` and follow the prompts to commit your code.
