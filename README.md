# @nasa-gcn/rcfiles

This package provides shared ESLint, Prettier, and lint-staged configs for https://gcn.nasa.gov projects.

To use, install in your project by running this command:

    $ npm install --save-dev @nasa-gcn/rcfiles

Then, create three files with the following contents inside your project:

- eslint.config.mjs

      export { default } from '@nasa-gcn/rcfiles/eslint.config.js'

- lint-staged.config.mjs

      export { default } from '@nasa-gcn/rcfiles/lint-staged.config.js'

- prettier.config.mjs

      export { default } from '@nasa-gcn/rcfiles/prettier.config.js'
