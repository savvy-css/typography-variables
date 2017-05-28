/* eslint-env node */

module.exports = function (ctx) {
  const { file: { basename: CURRENT_FILE_BASE_NAME } } = ctx;

  return {
    plugins: {
      // ⚠️ Order matters! PostCSS will run plugins in the order listed.
      stylelint: {},

      'postcss-import': {},

      'postcss-cssnext': {
        features: {
          customProperties: {
            preserve: CURRENT_FILE_BASE_NAME !== 'index.css'
          }
        }
      },

      // 🔑 Set `process.env.NODE_ENV` to "production" to create
      // a minified production build
      cssnano: ctx.env === 'production' ? {} : false,

      'postcss-reporter': {}
    }
  };
};
