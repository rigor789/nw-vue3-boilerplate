const webpack = require("@nativescript/webpack");

module.exports = (env) => {
  webpack.init(env);

  // Learn how to customize:
  // https://docs.nativescript.org/webpack
  webpack.chainWebpack((config) => {
    const platform = webpack.Utils.platform.getPlatformName();
    const extensions = config.resolve.extensions.values();
    config.resolve.extensions.clear();
    extensions.forEach((ext) => {
      config.resolve.extensions.add(ext);
      if (ext.includes(platform)) {
        config.resolve.extensions.add(ext.replace(platform, 'native'));
      }
    });
  });

  return webpack.resolveConfig();
};

