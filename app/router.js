'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const authHandler = app.middleware.auth();

  router.get('/', authHandler, controller.home.index);
};
