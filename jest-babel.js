/* eslint-disable @typescript-eslint/no-var-requires */
const babelJest = require('babel-jest');

module.exports = babelJest.default.createTransformer({
  plugins: [
    require.resolve('babel-plugin-import-remove-resource-query'),
  ],
});
