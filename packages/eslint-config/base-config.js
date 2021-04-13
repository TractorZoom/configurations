module.exports = {
    extends: ['plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        'sort-imports': ['error', { memberSyntaxSortOrder: ['multiple', 'single', 'all', 'none'] }],
        'sort-keys': 'error',
        'newline-after-var': ['error', 'always'],
        'newline-before-return': 'error',
        'no-param-reassign': 'off',
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        ],
    },
};
