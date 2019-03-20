'use strict';

// const path = require('path');

// module.exports = app => {
//   // mount `app/rpc/**` to `ctx.rpc.xx`
//   const rpcPaths = app.loader.getLoadUnits().map(unit => path.join(unit.path, 'app/rpc'));
//   app.loader.loadToContext(rpcPaths, 'rpc');
// };

// or class mode
// module.exports = class {
//   constructor(app) {
//     this.app = app;
//   }

//   configDidLoad() {
//     // 所有的配置已经加载完毕，可以用来加载应用自定义的文件，初始化自定义的服务
//     // mount `app/rpc/**` to `ctx.rpc.xx`
//     const rpcPaths = this.app.loader.getLoadUnits().map(unit => path.join(unit.path, 'app/rpc'));
//     this.app.loader.loadToContext(rpcPaths, 'rpc');
//   }
// };
