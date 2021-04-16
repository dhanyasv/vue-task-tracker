module.exports = {
  root: false,
  env: {
    node: false
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "indent": "off",
    "key-spacing" : "off",
    "eol-last" : "off",
    "no-trailing-spaces" : "off",
    "no-unused-vars" : "off",
    "no-useless-return" : "off",
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
