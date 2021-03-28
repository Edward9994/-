// 最开始exports,module.exports，指向同一区域
// 第一种情况 各自重新开辟空间：
exports = { a: 100 }
exports.module = { b: 200 }

// 第二种情况 还在同一片区域
exports.a = 100
exports.module.b = 200