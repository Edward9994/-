
// 导入模块，不用后缀名
const myModule = require('./02-自定义模块')
console.log(myModule);
// 模块是个对象，对象是使用
console.log(myModule.add(1, 1, 1));
console.log(myModule.sub(1, 1, 1))