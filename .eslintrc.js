module.exports = {
  parserOptions : {
    ecmaVersion : 2018,
    sourceType  : 'module'
  },
  env : {
    'browser' : true,
    'node'    : true,
    'es6'     : true
  },
  plugins : [
    'vue',
    'import'
  ],
  extends : [
    'plugin:vue/vue3-recommended',
    'plugin:import/recommended'
  ],
  overrides : [
    {
      'files' : ['*.vue'],
      'rules' : { 'indent' : 'off' }
    }
  ],
  settings : {
    'import/resolver' : {
      'alias' : {
        'map' : [
          ['@', './src'],
          ['@/*', './src/*']
        ]
      }
    }
  },
  rules : {
    'semi'    : ['error', 'always'],
    'quotes'  : ['error', 'single'],
    'max-len' : ['error', {
      'code'           : 120,
      'ignoreStrings'  : true,
      'ignoreComments' : true
    }],
    'newline-per-chained-call' : ['error', { 'ignoreChainWithDepth' : 1 }],
    'indent'                   : [
      'error',
      2,
      { 'SwitchCase' : 1 }
    ],
    'no-undef' : 'error',

    /*
     * SPACING
     */
    'object-curly-spacing' : ['error', 'always'],
    'object-curly-newline' : ['error', {
      'ObjectExpression'  : { 'multiline' : true, 'minProperties' : 5 },
      'ObjectPattern'     : { 'multiline' : true, 'minProperties' : 5 },
      'ImportDeclaration' : 'never',
      'ExportDeclaration' : 'never'
    }],
    'object-property-newline' : ['error', { 'allowAllPropertiesOnSameLine' : true }],
    'array-bracket-spacing'   : ['error', 'never'],
    'comma-spacing'           : ['error', { 'after' : true }],
    'key-spacing'             : ['error', {
      'beforeColon' : true,
      'align'       : 'colon'
    }],
    'space-infix-ops' : ['error', { 'int32Hint' : false }],

    /*
     * VUE
     */
    'vue/script-indent' : ['error', 2, {
      'baseIndent' : 1,
      'switchCase' : 2,
      'ignores'    : []
    }],
    'vue/multi-word-component-names' : 0,
    'vue/max-attributes-per-line'    : ['error', {
      'singleline' : { 'max' : 3 },
      'multiline'  : { 'max' : 2 }
    }]
  }
};
