/* eslint-env node */

const path = require('path');

module.exports = function (/* ctx */) {
  return {
    plugins: {
      stylelint: {
        configFile: path.join(__dirname, '../stylelint.config.js')
      },

      'postcss-import': {},
      'postcss-cssnext': {},

      'postcss-reporter': {
        clearAllMessages: true,
        throwError: true,
        plugins: [
          'stylelint'
        ]
      }
    }
  };
};
