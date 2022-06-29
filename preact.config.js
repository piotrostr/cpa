module.exports = (config, env, helpers) => {
  const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
      './src/**/*.css',
      './src/**/*.scss',
    ],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  });
  const postCssLoaders = helpers.getLoadersByName(config, 'postcss-loader');

  postCssLoaders.forEach(({ loader }) => {
    const plugins = loader.options.postcssOptions.plugins;

    plugins.unshift(require('tailwindcss'));

    if (env.production) {
      plugins.push(purgecss);
    }
  });

  return config;
};
