module.exports = {
  plugins: ['sonarjs'],
  rules: {
    /* Errors */
    'sonarjs/max-switch-cases': ['error', 30],
    'sonarjs/no-all-duplicated-branches': ['error'],
    'sonarjs/no-collapsible-if': ['error'],
    'sonarjs/no-collection-size-mischeck': ['error'],
    'sonarjs/no-duplicated-branches': ['error'],
    'sonarjs/no-element-overwrite': ['error'],
    'sonarjs/no-extra-arguments': ['error'],
    'sonarjs/no-identical-conditions': ['error'],
    'sonarjs/no-identical-expressions': ['error'],
    'sonarjs/no-identical-functions': ['error'],
    'sonarjs/no-inverted-boolean-check': ['error'],
    'sonarjs/no-one-iteration-loop': ['error'],
    'sonarjs/no-redundant-boolean': ['error'],
    'sonarjs/no-redundant-jump': ['error'],
    'sonarjs/no-same-line-conditional': ['error'],
    'sonarjs/no-small-switch': ['error'],
    'sonarjs/no-unused-collection': ['error'],
    'sonarjs/no-use-of-empty-return-value': ['error'],
    'sonarjs/no-useless-catch': ['error'],
    'sonarjs/prefer-object-literal': ['error'],
    'sonarjs/prefer-single-boolean-return': ['error'],
    /* Warnings */
    'sonarjs/no-duplicate-string': ['warn', 3],
    /* Disabled */
    'sonarjs/cognitive-complexity': ['off'],
    'sonarjs/prefer-immediate-return': ['off'],
    'sonarjs/prefer-while': ['off'],
  },
};
