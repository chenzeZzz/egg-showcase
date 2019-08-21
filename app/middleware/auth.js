'use strict';

module.exports = options => {
    return async function auth(ctx, next) {
        console.log(' why invoked in unit test======');
        await next()
    };
  };