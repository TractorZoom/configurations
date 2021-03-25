const config = require('./base-config')
config.parser = '@typescript-eslint/parser';
config.extends.push('plugin:@typescript-eslint/recommended');
config.parserOptions.project = './tsconfig.json';
config.rules['@typescript-eslint/interface-name-prefix'] = 'off';
config.rules['@typescript-eslint/no-floating-promises'] = 'error';
config.rules['@typescript-eslint/no-unused-vars'] = ['error', { argsIgnorePattern: '^_' }];
config.rules['@typescript-eslint/explicit-module-boundary-types'] = 'off';
config.rules['@typescript-eslint/no-var-requires'] = 'error';

module.exports = config;
