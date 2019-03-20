/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1556156913732_2632';

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
      '.tpl': 'nunjucks',
    },
  };

  config.security = {
    // only for test purpose
    csrf: {
      enable: false,
    },
  };

  // add your middleware config here
  config.middleware = [];

  // custom spec
  config.customLoader = {
    enum: {
      directory: 'app/enum',
      inject: 'app',
    },
    rpc: {
      directory: 'app/rpc',
      inject: 'ctx',
      loadunit: true,
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
