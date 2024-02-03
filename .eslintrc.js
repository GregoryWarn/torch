
module.exports = {
    root: true,
    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended"
    ],
    rules: {},
    env: {
        "browser": true,
        "es2020": true,
    },
    globals: {
        $: "readable",
        CONST: "readable",
        Dialog: "readable",
        Hooks: "readable",
        canvas: "readable",
        game: "readable",
        ui: "readable",
        quench: "readable",
    },
    overrides: [
        {
            "files": [".eslintrc.js", "webpack.config.js"],
            parserOptions: {
                sourceType: "script"
            },
            env: {
                browser: false,
                node: true
            }
        }
    ]
};