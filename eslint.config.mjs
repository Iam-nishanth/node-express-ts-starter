import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
 {
    languageOptions: { globals: globals.browser },
    rules: {
      "no-console": "warn",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "js": "never",
          "mjs": "never",
          "jsx": "never",
          "ts": "never",
          "tsx": "never"
        }
      ]
    },
    overrides: [
      {
        files: ["tests/*"],
        env: {
          "jest": true
        }
      }
    ]
 },
 pluginJs.configs.recommended,
 ...tseslint.configs.recommended,
];