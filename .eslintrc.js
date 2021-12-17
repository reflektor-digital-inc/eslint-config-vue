module.exports = {
  parserOptions : {
    ecmaVersion : 2020,
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
  rules : {
    /*
     * BASE
     */
    'semi'    : ['error', 'always'],
    'quotes'  : ['error', 'single', { 'allowTemplateLiterals' : true }],
    'max-len' : ['error', {
      'code'           : 120,
      'ignoreStrings'  : true,
      'ignoreComments' : true
    }],
    'newline-per-chained-call' : ['error', { 'ignoreChainWithDepth' : 2 }],
    'eqeqeq'                   : ['error', 'smart'],
    'comma-dangle'             : [
      'error', {
        'arrays'  : 'never',
        'objects' : 'only-multiline',
        'imports' : 'never',
        'exports' : 'never'
      }
    ],
    'multiline-ternary' : ['error', 'always-multiline'],
    'prefer-const'      : [
      'error', {
        'destructuring'          : 'any',
        'ignoreReadBeforeAssign' : false
      }
    ],
    'no-undef'           : 'error',
    'no-unused-vars'     : 'warn',
    'no-console'         : 'error',
    'no-trailing-spaces' : [
      'error', { 'skipBlankLines' : true }
    ],
    'no-unreachable'           : 'error',
    'no-var'                   : 'error',
    'no-mixed-spaces-and-tabs' : ['error', 'smart-tabs'],
    'no-debugger'              : 'error',
    'no-empty'                 : 'error',
    'no-empty-function'        : [
      'error', { 'allow' : ['arrowFunctions'] }
    ],

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
    'semi-spacing'            : ['error', { 'after' : true }
    ],
    'key-spacing' : ['error', {
      'beforeColon' : true,
      'align'       : 'colon'
    }],
    'space-infix-ops'         : ['error', { 'int32Hint' : false }],
    'no-multiple-empty-lines' : ['error', { 'max' : 1 }],
    'indent'                  : [
      'error',
      2,
      { 'SwitchCase' : 1 }
    ],
    'func-call-spacing' : ['error', 'never'],
    'curly'             : ['off', 'multi-or-nest', 'consistent'],
    'keyword-spacing'   : ['error', {
      'before' : true,
      'after'  : true
    }],
    'arrow-spacing' : ['error', {
      'before' : true,
      'after'  : true
    }],

    /*
     * ESLINT-PLUGIN-IMPORT
     */
    'import/no-unresolved'        : [2, { 'ignore' : ['vue-router'] }],
    'import/no-duplicates'        : 'error',
    'import/first'                : 'error',
    'import/newline-after-import' : ['error', { 'count' : 1 }],
    'import/order'                : [
      'error', {
        'groups' : [
          ['builtin', 'external'],
          ['internal'],
          ['unknown'],
          ['parent', 'sibling'],
          'index'
        ],
        'newlines-between' : 'never'
      }
    ],
    'import/default' : 'warn',

    /*
     * VUE
     */
    'vue/script-indent' : ['error', 2, {
      'baseIndent' : 1,
      'switchCase' : 2,
      'ignores'    : []
    }],
    'vue/html-indent' : [
      'error', 2, {
        'attribute'                 : 1,
        'baseIndent'                : 1,
        'closeBracket'              : 0,
        'alignAttributesVertically' : false,
        'ignores'                   : []
      }
    ],
    'vue/multi-word-component-names' : 0,
    'vue/max-attributes-per-line'    : ['error', {
      'singleline' : { 'max' : 2 },
      'multiline'  : { 'max' : 1 }
    }],
    'vue/html-closing-bracket-newline' : [
      'error', {
        'singleline' : 'never',
        'multiline'  : 'always'
      }
    ],
    'vue/html-closing-bracket-spacing' : [
      'error', {
        'startTag'       : 'never',
        'endTag'         : 'never',
        'selfClosingTag' : 'always'
      }
    ],
    'vue/v-on-function-call'             : ['error', 'never'],
    'vue/mustache-interpolation-spacing' : ['error', 'always'],
    'vue/no-multi-spaces'                : [
      'error', { 'ignoreProperties' : false }
    ],
    'vue/component-name-in-template-casing' : ['error', 'PascalCase', {
      'registeredComponentsOnly' : false,
      'ignores'                  : [
        'router-view',
        'router-link',
        'transition',
        'transition-group',
        'keep-alive',
        'component',
        'template',
        'slot',
        'nuxt',
        'nuxt-child',
        'nuxt-link',
        'client-only'
      ]
    }]
  },
  'overrides' : [
    {
      'files' : ['*.vue'],
      'rules' : { 'indent' : 'off' }
    },
    {
      'files' : ['server/**/*.js'],
      'rules' : { 'no-console' : ['error', { 'allow' : ['info', 'warn', 'error'] }] }
    }
  ],
  'globals'  : { 'defineProps' : true },
  'settings' : {
    'import/resolver' : {
      'alias' : {
        'map' : [
          ['@', './src'],
          ['@/*', './src/*']
        ]
      }
    }
  }
};
