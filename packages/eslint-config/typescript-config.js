const config = require('./base-config')

module.exports = {
    ...config,
    parser: '@typescript-eslint/parser',
    extends: [...config.extends, 'plugin:@typescript-eslint/recommended'],
    parserOptions: {
        ...config.parserOptions,
        project: './tsconfig.json'
    },
    plugins: ["typescript-sort-keys"],
    rules: {
        ...config.rules,
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-var-requires': 'error',
        "typescript-sort-keys/interface": "error",
        "typescript-sort-keys/string-enum": "error"
    }
}
