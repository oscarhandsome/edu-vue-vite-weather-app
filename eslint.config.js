// import js from "@eslint/js";
// import globals from "globals";
// import pluginVue from "eslint-plugin-vue";
// import { defineConfig } from "eslint/config";

// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs,vue}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
//   pluginVue.configs["flat/essential"],
// ]);

import vue from "eslint-plugin-vue";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  ...vue.configs["flat/recommended"],
  prettier,
  {
    files: ["**/*.vue", "**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "vue/multi-word-component-names": "off", // РћС‚РєР»СЋС‡Р°РµРј С‚СЂРµР±РѕРІР°РЅРёРµ РґР»РёРЅРЅС‹С… РёРјРµРЅ
      "vue/require-default-prop": "off", // РќРµ С‚СЂРµР±РѕРІР°С‚СЊ РѕР±СЏР·Р°С‚РµР»СЊРЅС‹Рµ default props
    },
  },
];
