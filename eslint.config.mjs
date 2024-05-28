import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    languageOptions: { globals: globals.node },
    rules: {
      eqeqeq: "error",
      "no-console": "warn",
      "no-unused-vars": "warn",
      "prefer-const": "warn",
      "no-unused-expressions": "error",
      "no-undef": "error",
    },
    
    ignores: [".config/*", "**/node_modules/", ".git/", "/dist"],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
