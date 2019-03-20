'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {

  it('should assert', async () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // await ctx.service.xx();
  });

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, egg')
      .expect(200);
  });

  it('should load rpc', async () => {
    const ctx = app.mockContext();
    const result = await ctx.rpc.test.sayHi('tz');
    assert(result === 'hi, tz');
  });

  it('should load enum', async () => {
    assert(app.enum.error.ERR_AUTH.msg === 'not perm');
  });
});
