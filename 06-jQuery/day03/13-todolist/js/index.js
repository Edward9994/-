$(function () {

    // 先修改本地数据，再渲染页面

    // 添加功能
    // 删除功能
    // 保存功能

    // 函数封装：
    // 获取 getData();
    // 保存 setData();
    // 渲染 load();

    load();
    // 添加功能
    $('#title').on('keydown', function (event) {
        if (event.keyCode != 13) {
            return;
        }
        if ($(this).val().trim() == '') {
            alert('内容不能为空')
            $(this).focus().val('');
            return;
        }
        //    调用getData()函数，获取本地数据，保存到arr
        let arr = getData();
      //将文本内容添加到arr
        arr.push({
            title: $(this).val().trim(),
            done:false
        })
        // arr保存到本地
        setData(arr);
        // 页面渲染
        load();
        $(this).focus().val("");
    })

//删除 事件委托
    $('ol,ul').on('click', 'a',function () {
        let index = $(this).attr('data-index');
        let arr = getData();
        arr.splice(index, 1);
        setData(arr);
        load();
    })
    
    //修改
    $('ol,ul').on('click', 'input', function () {
        let arr = getData();
        let index = $(this).siblings('a').attr('data-index');
        arr[index].done = $(this).prop('checked');
        setData(arr);
        load();
    })


        // 获取本地数据
        function getData() {
            let str = localStorage.getItem('data');
            //本地如果无数据则为null，返回一个数组
            if (str == null) {
                return [];
            } else {
                return JSON.parse(str);
            }
        }

        //数据保存到本地
        function setData(arr) {
            return localStorage.setItem('data', JSON.stringify(arr));
    }
    
    
    //数据渲染
    function load() {
        // 取出本地数据，渲染到页面
        let arr = getData();
        
          $('ol,ul').empty();
        $.each(arr, function (i, n) {
          
            if (!n.done) {
                $('ol').prepend(`
            <li>
                        <input type="checkbox">
                        <p>${n.title}</p>
                        <a  data-index =${i}></a>
                    </li>
            `)
            } else {
                 $('ul').prepend(`
            <li>
                        <input type="checkbox" checked>
                        <p>${n.title}</p>
                        <a data-index =${i}></a>
                    </li>
            `)
           }
        
        })
    }
})