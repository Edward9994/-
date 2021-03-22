$(function () {
    initArtCateList();
    //初始化文章类别
    function initArtCateList() {
        $.ajax({
            type: 'get',
            url: '/my/article/cates',
            success: (res) => {
                let htmlStr = template('tpl_cates_list', res);
                $('tbody').html(htmlStr)
                // console.log(res.data);
            }
        })
    }
    // 添加文章类别
    let indexAdd = null;
    let layer = layui.layer;
    $('#btn_add_cate').click(function () {
        indexAdd = layer.open({
            area: ['500px', '250px'],
            type: 1,
            title: '添加文字分类',
            content: $('#dialog_add').html()
        });
    })
    // 通过代理的形式，为 form-add 表单绑定 submit 事件
    // 因为form是模板，后面加载的，所以要代理才能绑定事件
    $('body').on('submit', '#form-add', function (e) {
        e.preventDefault()
        $.ajax({
            method: 'POST',
            url: '/my/article/addcates',
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('新增分类失败！')
                }
                initArtCateList()
                layer.msg('新增分类成功！')
                // 根据索引，关闭对应的弹出层
                layer.close(indexAdd)
            }
        })
    })
    // 点击删除文章类别
    $('tbody').on('click', '#btn_delete', function () {
        var id = $(this).attr('data-id')
        // 提示用户是否要删除
        layer.confirm('确认删除?', { icon: 3, title: '提示' }, function (index) {
            $.ajax({
                method: 'GET',
                url: '/my/article/deletecate/' + id,
                success: function (res) {
                    if (res.status !== 0) {
                        return layer.msg('删除分类失败！')
                    }
                    layer.msg('删除分类成功！')
                    layer.close(index)
                    initArtCateList()
                }
            })
        })
    })
    //点击编辑文字类别
    var indexEdit = null
    $('tbody').on('click', '#btn_edit', function () {
        // 弹出一个修改文章分类信息的层
        indexEdit = layer.open({
            type: 1,
            area: ['500px', '250px'],
            title: '修改文章分类',
            content: $('#dialog_edit').html()
        });
        var id = $(this).attr('data-id')
        // 发起请求获取对应分类的数据
        $.ajax({
            method: 'GET',
            url: '/my/article/cates/' + id,
            success: function (res) {
                layui.form.val('form-edit', res.data)
            }
        })
    })
    // 确认修改
    $('body').on('submit', '#form-edit', function (e) {
        e.preventDefault()
        $.ajax({
            method: 'POST',
            url: '/my/article/updatecate',
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('更新分类数据失败！')
                }
                layer.msg('更新分类数据成功！')
                layer.close(indexEdit)
                initArtCateList()
            }
        })
    })
})