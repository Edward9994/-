
const express = require('express')
const app = express()

app.get('/admin/category/search', (req, res) => {
    // express框架会自动收集get方式从url地址中传递的查询字符串参数解析为对象，并自动保存在req.query属性e中
    // 1解析出前端请求接口时传入id
    const { id } = req.query
    // 2.查询规则，找到这个id对应的文章类别
    if (!id) {
        // 链式写法
        res.status(404).json({ code: 400, msg: '大姐id呢？' })
        return
    }
    const data = {
        code: 200,
        msg: '获取成功',
        data: [{ id: 2, name: '爱旅行', slug: '热爱旅行' }]
    }
    // 反对数据
    res.json(data)
    res.end('ok')

})

// 启动这个服务器
app.listen(8080, () => {
    console.log('服务器正在运行')
})