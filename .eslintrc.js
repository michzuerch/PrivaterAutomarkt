module.exports = {
    root: true,
    parser: "vue-eslint-parser",
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: [
        "plugin:gridsome/recommended",
        "plugin:vue/essential",
        "plugin:prettier/recommended",
        "airbnb-base",
        "@vue/prettier",
        "prettier"
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module"
    },
    plugins: ["gridsome"],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    },
    settings: {
        "import/resolver": {
            alias: {
                map: [["@", "./resources"]],
                extensions: [".js", ".vue"]
            }
        }
    },
    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)"
            ],
            env: {
                jest: true
            }
        }
    ]
};
