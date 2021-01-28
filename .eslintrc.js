module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    env: {
        node: true,
        es2021: true,
    },
    extends: [
        'plugin:gridsome/recommended',
        'plugin:vue/essential',
        'plugin:prettier/recommended',
        'airbnb-base',
        '@vue/prettier',
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['gridsome'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
    ],
}
