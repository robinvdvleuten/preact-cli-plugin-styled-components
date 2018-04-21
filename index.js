module.exports = function (config, env) {
  const babel = config.module.loaders.filter(loader => loader.loader === 'babel-loader')[0].options;

  babel.plugins.push([require.resolve('babel-plugin-styled-components'), {
    displayName: !env.isProd,
    ssr: env.ssr
  }]);
};
