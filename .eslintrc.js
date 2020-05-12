module.exports = {
  root: true, // 作用的目录是根目录
  parserOptions: {
    sourceType: 'module', // 按照模块的方式解析
    ecmaVersion: 2017
  },
  extends: [
    // 'eslint:recommended',
    // https://www.npmjs.com/package/eslint-plugin-import
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
    // https://eslint.vuejs.org/user-guide/#installation
    'plugin:vue/vue3-recommended',
    // 'standard'
  ],
  plugins: [
    'vue',
    'import'
  ],
  env: {
    browser: true, // 开发环境配置表示可以使用浏览器的方法
    node: true, //
    es6: true
  },
  rules: {
    // 自定义的规则
    "linebreak-style": [0 ,"error", "windows"],
    "indent": ['warn', 2],
    // "import/no-unresolved": [2, {commonjs: true, amd: true}],
    "import/named": 0,
    "import/namespace": 0,
    "import/default": 0,
    "import/export": 0,
    "vue/attributes-order": 0,
    "vue/max-attributes-per-line": 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/multiline-html-element-content-newline": 0,
    "vue/component-tags-order": 0,
    "vue/html-closing-bracket-spacing": 0,
    "vue/order-in-components": 0,
    "vue/no-deprecated-slot-attribute": 0,
    "vue/require-prop-types": 0
  }
}
