import trivagoPrettierPluginSortImports from '@trivago/prettier-plugin-sort-imports'

/** @type {import("prettier").Config} */
export default {
  plugins: [trivagoPrettierPluginSortImports],
  importOrder: [
    '^[@a-zA-Z].*(?<!(?:css|gif|json|png|svg))$',
    '^[.~/].*(?<!(?:css|gif|json|png|svg))$',
    '',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
}
