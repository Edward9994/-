function add(x, y, z) {
    return x + y + z
}
function sub(x, y, z) {
    return x - y - z
}

// exports是module.exports的别名
// 导出模块
// 方法一
exports.add = add
exports.sub = sub


// 方法二
module.exports = {
    add: add,
    sub: sub
}