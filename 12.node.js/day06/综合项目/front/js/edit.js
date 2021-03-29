$(function(){
    // 获取当前传入的id号
    let cid = itcast.getArguments(location.search).id
    // 根据id查询当前英雄的详细信息
    $.ajax({
        url:'/getHeroById?id='+cid,
        headers: {
            authorization: window.localStorage.getItem('token')
        },
        success:function(res){
            console.log(res)
            // 而是进行数据的展示
            let html = template('heroTemp',res.data)
            $('tbody').html(html)
        }
    })


    // 实现文件上传
    // 一选择好文件就开始进行上传操作
    $('tbody').on('change','#img',function(){
        // 获取当前的图片对象
        // files只提供了原生访问的方式
        // 前面[0]是jq转js原生，后面的[0]是获取文件列表中的第一个文件对象
        let myfile = $('#img')[0].files[0]
        // 使用formdata收集图片数据
        let formdata = new FormData()
        // 追加参数到formdata
        formdata.append('img',myfile)

        // ajax实现文件上传的请求
        $.ajax({
            type:'post',
            url:'/uploadFile',
            data:formdata,
            headers: {
                authorization: window.localStorage.getItem('token')
              },
            processData:false, // 告诉ajax不要进行数据的处理，formdata自己来处理
            contentType:false, // 造成ajax不要对数据编码，formdata自己来编码
            success:function(res){
                console.log(res)
                if(res.code == 200){
                    // 实现图片预览
                    $('#photo').attr('src','/uploads/'+res.img)
                    // 将图片名称存储到指定的隐藏域
                    $('.userimg').val(res.img)
                }
            }
        })
    })

    // 动态生成的元素的事件绑定要使用事件委托
    $('tbody').on('click','#sub',function(){
        $.ajax({
            type:'post',
            url:'/updateHero',
            data:$('form').serialize(),
            headers: {
                authorization: window.localStorage.getItem('token')
              },
            success:function(res){
                console.log(res)
                if(res.code == 200){
                    alert(res.msg)
                    location.href='./index.html'
                }
            }
        })
    })
})