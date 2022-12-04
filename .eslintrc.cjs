/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'semi': [2, 'never'], // 分号, never -> 不使用分号, always -> 使用分号
    'quotes': [2, 'single'], // 引号, single -> 单引号, double -> 双引号
  }
}
