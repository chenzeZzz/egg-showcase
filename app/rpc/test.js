'use strict';

module.exports = class TestRpc {
  async sayHi(name) {
    return `hi, ${name}`;
  }
};
