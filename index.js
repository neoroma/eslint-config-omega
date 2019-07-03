module.exports = {
  'env': {
    'node': true,
    'jest': true,
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'extends': [
    'eslint:recommended',
    'standard',
  ],
  'plugins': [
    'react-hooks',
  ],
  'rules': {
    'arrow-parens': [
      'error',
      'as-needed',
    ],
    'space-before-function-paren': [
      'error',
      {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always',
      },
    ],
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 'off',
    'indent': [
      2,
      2,
      {
        'SwitchCase': 1,
      },
    ],
    'newline-per-chained-call': 0,
    'no-unexpected-multiline': 'error',
    'semi': [
      'error',
      'never',
    ],
    'no-console': 1,
    'no-use-before-define': 0,
    'prefer-template': 2,
    'class-methods-use-this': 0,
    'require-yield': 0,
    'import/no-webpack-loader-syntax': 0,
    'max-len': [
      'error',
      120,
    ],
    'arrow-body-style': [
      'error',
      'as-needed',
    ],
    'import/extensions': 'off',
    'no-case-declarations': 'off',
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'react/forbid-prop-types': 'off',
    'comma-dangle': 'off',
    'padded-blocks': 'off',
    'no-confusing-arrow': 'off',
    'object-curly-newline': 'off',
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'max-lines': [
      'error',
      {
        'skipBlankLines': true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
