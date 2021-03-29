# @tractorzoom/webpack-config

Extendable webpack configuration

[![Publish Status](https://github.com/TractorZoom/configurations/workflows/publish/badge.svg)](https://github.com/TractorZoom/configurations/actions)

##### Installation

```bash
npm i --save-dev @tractorzoom/webpack-config
```

##### Usage

Extend configuration in `webpack.config.js`


```js
// First build your handlers object (name to path map)
const handlers = {
    hello: './src/handlers/hello.ts'
}

module.exports = require('@tractorzoom/webpack-config')(handlers)
```

##### Scripts

Add build and clean scripts to `package.json` to build your webpack bundles.

```json
{
    "scripts": {
        "build": "npm run clean && webpack",
        "clean": "rimraf build"
    }
}

```

##### Other Configurations

You may need to update your cloudformation template

```yaml
Globals:
    Function:
        Runtime: nodejs12.x

# old
Handler: src/handlers/hello.handler

# new
Globals:
    Function:
        CodeUri: build/
        Runtime: nodejs12.x

Handler: hello.handler
```

If you are deploying with SAM, you will need to update your CI

```yaml
# old
-   name: SAM build
    uses: TractorZoom/sam-cli-action@master
    with:
    sam_command: 'build'

# new
-   name: Build
    run: |
        npm ci
        npm run build
```
