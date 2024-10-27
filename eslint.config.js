import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

export default [
  { files: ["**/*.{js,mjs,cjs,vue}"] },
  { 
    languageOptions: { 
      globals: { 
        ...globals.browser,
        ...globals.jest   // Додає підтримку глобальних змінних Jest
      } 
    }
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
];
