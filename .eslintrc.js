module.exports = {
  root: true,
  env: {
      node: true, // Node.js 全局变量和 Node.js 作用域。
      es6: true, // 额外支持新的 ES6 全局变量
      browser: true // 在代码中可以放心使用宿主环境给你提供的全局变量
  },
  extends: [
      'plugin:vue/essential',
      '@vue/standard'
  ],
  parserOptions: {
      parser: 'babel-eslint',
      ecmaVersion: 6, // 启用 ES6 语法支持
      sourceType: 'module'
  },
  rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      // 自定义
      'indent': ['error', 4],
      'space-infix-ops': 'error', // 要求操作符周围有空格
      'comma-spacing': 'error', // 逗号后面加空格
      'arrow-spacing': 'error', // 使用 => 前后空格
      'spaced-comment': 'warn', // 注释风格，前后留一个空格
      'no-irregular-whitespace': 'error', // 不能有不规则的空格
      'no-mixed-spaces-and-tabs': 'error', // 不能混用空格和tab
      'no-multiple-empty-lines': 'error', // 不能有多余的空行
      'no-var': 'error', // 不能使用var
      'no-new': 'off',
      'new-cap': 'off', // 不要求构造函数首字母大写
      'eqeqeq': 'error', // 使用全等
      'quotes': [1, 'single'], // 引号类型，使用单引号
      'camelcase': 'off'
  },
  // 对于匹配 overrides.files 且不匹配 overrides.excludedFiles 的 文件，overrides.rules 中的规则会覆盖 rules 中的同名规则。
  overrides: [
      {
          files: [
              '**/__tests__/*.{j,t}s?(x)',
              '**/tests/unit/**/*.spec.{j,t}s?(x)'
          ],
          env: {
              mocha: true
          }
      }
  ]
}
