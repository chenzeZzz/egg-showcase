'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {
  it('should assert', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('should GET /', () => {
    app.get('/', async (ctx, next) => {
      console.log('hack app.get ====')
      await next();
    }, app.controller.home.index);
    app.router.get('/', async (ctx, next) => {
      console.log('hack app.router.get ====')
      await next();
    }, app.controller.home.index);
    return app.httpRequest()
      .get('/')
      .expect('hi, egg')
      .expect(200);
  });
});
