const config = require('./base-config');

module.exports = {
    ...config,
    plugins: ['react'],
    extends: [...config.plugins, 'plugin:react/recommended'],
    parserOptions: {
        ...config.parserOptions,
        ecmaFeatures: { jsx: true }
    },
    rules: {
        ...config.rules,
        'react/no-unescaped-entities': 'warn',
        'react/jsx-sort-props': ["error", { "reservedFirst": false }],
        "react/jsx-props-no-spreading": "off",
        "react/destructuring-assignment": "off",
    }
}
