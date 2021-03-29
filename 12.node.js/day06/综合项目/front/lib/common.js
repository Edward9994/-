// 这个文件用于添加在整个项目中需要使用到的公共的功能

let itcast = {
    // 动态的添加项目中需要的功能函数
    getArguments:function(str){ //?id=2&name=jack
        let obj = {}
        // 1.去除？
        str = str.substring(1) // id=2&name=jack
        // 2.将str以&符合进行分隔
        let arr = str.split('&') // ["id=2","name=jack"]
        // 3.循环，并以=做为分隔符对数组中的元素再次分隔，将分隔的结构一个做为键，一个做为值
        for(let i=0;i<arr.length;i++){
            // 第一次：id=2
            let temp = arr[i].split('=') // ["id",2]
            // 生成对象
            obj[temp[0]] = temp[1]
        }
        return obj
    }
}