const config = require('./base-config')
config.plugins = ['react'];
config.extends.push('plugin:react/recommended');
config.parserOptions.ecmaFeatures = { jsx: true };
config.rules['react/no-unescaped-entities'] = 'warn';

module.exports = config;
