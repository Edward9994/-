# 	Ajax 阶段课程

# 前置准备工作（同学们自行操作）

## Node.js环境安装

1. 登录 https://nodejs.org/zh-cn/download/ 

2. 找到自己对应的操作系统类型，自行下载好NodeJS安装文件
3. 安装自己的电脑上（双击下载的安装包，一路默认安装直到结束即可完成）

![image-20201209112051346](imgs\33.png)

## 启动 Ajax 课程需要的 Server

### 注意事项

**注意：**务必先安装好node环境后才能打开ajax阶段需要的服务器

### 启动服务器

1. 下载好ajax阶段需要的服务器代码。
2. 根据下图蓝色背景选中的地址找到 run.bat文件，双击打开它

**server下载地址：**http://157.122.54.189:9092/upload/ajaxapidoc/ajax_server.zip

server提供的api接口说明文档：http://157.122.54.189:9092/upload/ajaxapidoc/index.html

![image-20201201104640125](imgs\13.png)

### 启动成功

1、提示：看到如下界面就表示打开成功

![image-20201201104849302](imgs\14.png)



2、在浏览器输入 http://127.0.0.1:3001/getHero 就可以访问到服务器中的数据

# Ajax 知识分布 1

## 客户端与服务器基本概念

### 客户端

> 负责访问网络内容的端（例如：电脑、手机），我们称之为客户端
>
> - 例如在电脑浏览器输入 www.jd.com 访问京东服务器获取京东首页后呈现在用户眼前
> - 例如在手机上安装一个京东App就可以访问京东所提供的商品了
> - 客户端通常是通过浏览器或App去与服务器进行通讯的

### 服务器

> 负责生产网络内容的电脑，我们称之为服务器
>
> - 京东服务器 负责生产客户端访问了www.jd.com 以后看到的所有网页内容包括：html，css，javascript，图片，文字，视频，音频等
> - http://127.0.0.1:3001/getHeroSkin 对应的服务器可以为我们提供JSON格式的王者英雄信息数据
> - 服务器通常被客户端请求后，它就会响应相应的内容给客户端

## 服务器的作用总结

### 服务器的作用

服务器的作用就是提供如下两种内容给客户端使用：

- 提供网页资源

  ```css
  通过 url 访问得到的是一个拥有图片，颜色，音频，视频等资源的网页 ，例如访问 www.jd.com  得到的网页资源
  ```

- 提供数据资源 (我们学习Ajax只关注和这种服务器的交互)

  ```css
  通过 url 访问得到的是数据，例如：访问 http://127.0.0.1:3001/getHeroSkin 得到的是JSON数据
  ```

- 互联网的组成全球由许许多多的客户端和服务器共同联网就组成了互联网

  ![1](imgs\1.png)



## 客户端与服务器的交互步骤

![2](imgs\2.png)

![image-20201201153903072](imgs\15.png)

 ## 服务器资源的两种请求方式

- Get请求

> Get请求用来做什么的？
>
> - 我们通常约定客户端向服务器要资源就使用Get请求
> - 例如：在浏览器中输入URL后发出的请求都是Get请求，$.get(url) 发出的ajax请求都是get请求

- Post请求

> Post请求用来做什么的？
>
> - 我们通常约定客户端将数据提交给服务器就使用Post请求
>
> - 例如：在浏览器中的登录页面上输入用户名、密码后点击登录按钮，发出的请求一定是Post请求
>
>   $.post(url,data)发出的请求都是post请求

## 什么是Ajax

> Ajax 即“**A**synchronous **J**avascript **A**nd **X**ML”（异步 JavaScript 和 XML）的缩写，意思就是用JavaScript执行异步网络请求。
>
> 通俗解释：在网页上利用JavaScript操作浏览器的**XMLHttpRequest**对象来与服务器进行数据交互的方式就是Ajax

## Ajax的作用 

- 通过**XMLHttpRequest**对象与服务器进行少量数据交换，Ajax 可以使网页在不重新刷新的情况下实现局部更新数据

- 通过PPT 动画演示Ajax局部更新效果

  ![image-20201130001323008](imgs\8.png)

## Ajax应用场景举例 

- 用户注册时通过Ajax请求服务器检测用户名是否可用  http://demo.dtcms.net/register.html

<img src="imgs\9.png" alt="image-20201130103041619"  />

- 前后端完全分离开发的项目，前端所有数据都是用Ajax来与服务器进行交互

  - 演示地址：http://ihrm-java.itheima.net/#/dashboard

    重点：通过这个项目给同学们讲清楚一个项目开发的各个岗位构成：

    - 产品人员负责设计系统功能
    - UI/UE工程师负责设计系统界面图片
    - 前端工程师负责将系统界面图片转换成网页
    - 后端工程师负责给前端工程师提供系统每个页面要显示的数据和数据接口说明文档

## Ajax初体验

1. 找到老师发给大家的 “**服务器与AJAX**” 文件夹，根据下图蓝色背景选中的地址找到 run.bat文件，双击打开它

    ![image-20201201104640125](imgs\13.png)

    提示：看到如下界面就表示打开成功

    ![image-20201201104849302](imgs\14.png)   

2. 新建一个myFirstAjax.html页面后，生成html基本结构

3. 在myFirstAjax.html 中通过script标签中导入 jQuery.js文件

4. 在jQuery.js下新建一个script标签，编写如下代码即可完成一次ajax请求并获取到王者荣耀英雄数据

    ```javascript
    $.get('http://127.0.0.1:3001/getHeroSkin',null,function(resData){
         console.log(resData)
      });
    ```

5. 在浏览器的Console面板中可以看到请求到的数据

   ![image-20201201100437778](imgs\12.png)

6. 同学们看到此会有很多疑问

   1. 第4步中的数据从哪里来的？

      ```css
      答案：数据是从"http://127.0.0.1:3001/getHeroSkin" 地址中来，我们可以从"浏览器调试工具查看Ajax的请求和响应"这一章节通过调试工具来跟踪查看到数据
      ```

   2.  上面代码中我如何知道填写的是 http://127.0.0.1:3001/getHeroSkin 而不是其他地址

      ```css
      答案：可以通过阅读" http：//127.0.0.1:3001/getHeroSkin 从哪里来？"章节来得到答案
      ```

   3.  http://127.0.0.1:3001/getHeroSkin  为什么就能访问到了？

      ```css
      答案：可以通过阅读"http://127.0.0.1:3001/getHeroSkin  为什么就能访问到了？" 章节来得到答案
      ```

      

## 浏览器调试工具查看Ajax的请求和响应

- 在浏览器中按F12调出调试面板后，按照如下图片中的三个步骤就可以查看到ajax请求成功的数据

![image-20201130223432898](imgs\10.png)

![image-20201130224305896](imgs\11.png)



##  http：//127.0.0.1:3001/getHeroSkin 从哪里来？

- 类似于http://127.0.0.1:3001/getHeroSkin 这种地址我们统称为 “**api接口**”

- "**api接口**"的使用说明通常是由**后端工程师**（java,php,python,.net,node.js）通过一个文档来提供给**前端工程师**的，这个文档我们称之为"**api接口说明文档**"

- 前端工程师通过阅读"**api接口说明文档**"就知道如何通过Ajax来与此接口进行数据交互了
  - **api接口**本质上是一个URL，我们先要认识URL的组成才能读懂"**api接口说明文档**"

## URL及其组成

> 统一资源定位系统（uniform resource locator;URL）是用来标记网络上一个资源唯一存放位置，浏览器通过URL就可以成功访问到该资源

- 常见的URL举例

  - http://www.itcast.cn/subject/about/index.html
  - http://157.122.54.189:9092/nc/course/courseDetial/getSectionQAByPage/3?pageIndex=3&pageSize=1

- URL组成

  - 客户端与服务器的**通讯协议**
  - 存放资源的**服务器名称**，可以是域名:端口，也可以是IP地址:端口的形式存在
  - 资源在服务器的存放**路径**
  - 查询服务器资源的**参数**

  ![](imgs\3p.png)

## Api接口文档组成

> Api接口文档主要是用来描述如下三部分：
>
> ​     1、描述Api接口地址字符串是什么，例如： http://127.0.0.1:3001/getHeroSkin 
>
> ​	 2、描述Api接口地址传入的参数说明，例如：http://127.0.0.1:3001/getHeroSkin?heroName=白起  
>
>       中的 **?heroName=白起** 参数部分
>
> ​     3、描述Api接口地址响应数据代表的意思，方便前端工程师处理数据

- **Api文档举例说明：获取英雄皮肤数据Api文档**

> 请求部分说明

[请求方式：](#parameter-examples-Just_For_Fun-getHeroSkin-0_0_0-0)GET

[请求路径：](#parameter-examples-Just_For_Fun-getHeroSkin-0_0_0-0)/getHeroSkin       不同的路径表示返回不同的数据

[Api接口完整请求地址：](#parameter-examples-Just_For_Fun-getHeroSkin-0_0_0-0)$.get()方法中url参数值就是填写这种类型的完整地址

```url
http://127.0.0.1:3001/getHeroSkin
```

[请求参数说明：](#parameter-examples-Just_For_Fun-getHeroSkin-0_0_0-0)

| 字段     | 类型   | 描述                                                         |
| :------- | :----- | :----------------------------------------------------------- |
| heroName | String | 此参数可选，表示接口可以接受英雄名参数来查找对应的英雄的数据<br />举例：http://127.0.0.1:3001/getHeroSkin?heroName=白起 |

[带参数请求样例：](#parameter-examples-Just_For_Fun-getHeroSkin-0_0_0-0)

```json
/getHeroSkin?heroName=白起
```

[带参数请求完整样例：](#parameter-examples-Just_For_Fun-getHeroSkin-0_0_0-0)

```css
http://127.0.0.1:3001/getHeroSkin?heroName=白起
```

> 响应部分说明

[响应数据格式: 通常是JSON格式](#parameter-examples-Just_For_Fun-getHeroSkin-0_0_0-0)

[响应数据样例:](#parameter-examples-Just_For_Fun-getHeroSkin-0_0_0-0)

```json
{
    "code":200,
    "des":"请求成功",
    "data":{
        "id":12,
        "cname":"阿轲",
        "skin_name":"信念之刃|爱心护理|暗夜猫娘|致命风华|节奏热浪"
    }
}
```

[响应数据中每个属性含义说明:](#parameter-examples-Just_For_Fun-getHeroSkin-0_0_0-0)

| 字段      | 类型   | 描述         |
| :-------- | :----- | :----------- |
| code      | Number | 响应状态码   |
| des       | String | 响应描述     |
| data      | Object | 响应数据对象 |
| id        | String | 英雄 ID      |
| cname     | String | 英雄名       |
| skin_name | String | 英雄皮肤     |

## http：//127.0.0.1:3001/getHeroSkin  为什么就能访问到了？

- 必须要开启一个叫做web服务器的软件来对外提供数据服务才能访问到http://127.0.0.1:3001/getHeroSkin

- 在Ajax初体验一节中要同学们打开的那个软件就叫做web服务器，如下图

  ![image-20201201104849302](imgs\14.png)

- web服务器的职责：负责运行后端工程师（像java,php,python,.net,nodejs工程师我们统称后端工程师）编写好的代码来为api接口（比如：http://127.0.0.1:3001/getHeroSkin）提供数据的一种软件

## jQuery中的Ajax方法汇总

### $.get()方法(语法熟练掌握)

- 作用：该方法是利用Ajax发送Get请求**获取服务器上的数据**
- 语法和参数

| 语法格式                                         |
| :----------------------------------------------- |
| $.get(**url**, *[data]*, *[callback]*, *[type]*) |

| 参数名称 |   参数类型    | 是否必选 | 参数说明                                                     |
| :------: | :-----------: | :------: | ------------------------------------------------------------ |
|   url    | string 字符串 |   必填   | 要请求的资源地址，我们通常叫做**Api接口**<br />例如：http://127.0.0.1:3001/getHeroSkin<br />此地址通常是由Java，PHP，Python，.Net等后端工程师提供也<br />可以由前端工程师编写NodeJS代码来实现 |
|   data   |  object 对象  |   选填   | 请求资源时，根据接口文档来决定是否需要携带参数<br />1、如果需要携带参数，格式举例:{id:100},{page:1,size:10}<br />2、如果不需要携带参数，可以不填写，或者填写null |
| callback | function 函数 |   选填   | 请求成功回调函数，我们可以通过此函数参数获得服务器响应数据<br /> 例如：function(resdata){ resdata即为服务器响应的数据 }<br />虽然是选填，但真正开发过程中99%都需要填写此函数 |
|   type   | string 字符串 |   选填   | 服务器返回数据格式，我们用得最多的是json格式，少量使用xml<br />真正开发过程中此参数99%都省略 |

- 使用示例

  > 发送不带参数的Get请求 ，典型特征：$.get() 第二个参数填写null，或者不填写

  
  
  ```javascript
  // 第二个参数填写null更好理解，初学者建议使用这种方式
  $.get('http://127.0.0.1:3001/getHeroSkin',null,function(resData){
       console.log(resData);
    });
  
  
  /*
  第二个参数不填写写法，这里注意，function类型的参数会被jQuery当做是第三个参数使用
  所以以下代码表示不带参数
  */
  $.get('http://127.0.0.1:3001/getHeroSkin',function(resData){
     console.log(resData);
    })
    
  ```
  
  > 发送带参数的Get请求，典型特征：第二个参数传入了{属性名:属性值} 这样格式的一个对象
  
  ```javascript
   $.get('http://127.0.0.1:3001/getHeroSkin',{heroName:'白起'},function(resData){
       console.log(resData);
      });
  ```
  
    

### $.post()方法(语法熟练掌握)

- 作用：该方法是利用Ajax发送Post请求**将数据提交给服务器**

- 语法和参数


| 语法格式                                          |
| ------------------------------------------------- |
| $.post(**url**, *[data]*, *[callback]*, *[type]*) |

| 参数名称 |   参数类型    | 是否必填 | 参数说明                                                     |
| :------: | :-----------: | :------: | ------------------------------------------------------------ |
|   url    | string 字符串 |   必填   | 要请求的资源地址，我们通常叫做**Api接口**<br />例如：http://127.0.0.1:3001/addHeroSkin<br />此地址通常是由Java，PHP，Python，.Net等后端工程师提供也<br />可以由前端工程师编写NodeJS代码来实现 |
|   data   |  object 对象  |   选填   | 待发送给服务器的数据，格式{key:value,key1,value1} <br />或者 key=value&key1=value1 都可以<br />如果没有数据提交可以填写null，或者不填写 |
| callback | function 函数 |   选填   | 请求成功回调函数<br />我们可以通过此函数参数获得服务器响应数据<br /> 例如：function(resdata){ resdata即为服务器响应的数据 }<br />虽然是选填，但真正开发过程中99%都需要填写此函数 |
|   type   | string 字符串 |   选填   | 服务器返回数据格式，我们用得最多的是json格式，少量使用xml<br />真正开发过程中此参数99%都省略 |




- 使用示例

  > 发送Post请求，将程咬金的英雄数据提交给http://127.0.0.1:3001/addHeroSkin

  ```javascript
  // 将{cname:'程咬金',skin_name:'爱与正义、华尔街大亨'} 数据发送给http://127.0.0.1:3001/addHeroSkin 地址实现添加一个皮肤
  $.post('http://127.0.0.1:3001/addHeroSkin',{cname:'程咬金',skin_name:'爱与正义、华尔街大亨'},function(resdata){
        console.log(resdata);
   })
  ```

  

### $.ajax()方法(语法熟练掌握)

- 作用：该方法既能发送Get请求，也能发送Post请求，比\$.get()和\$.post()更加灵活，功能更加丰富
- 语法和参数

```js
// 基本语法格式 
$.ajax({
  url:'  ',     //请求URL地址                             
  type:'  ',   //请求方式 Get 或 Post
  data:{  } ,  // 本次请求要携带的参数
  success:function(resData){ }     //请求成功后的回调函数
})
```


- 使用示例

  > 发送带参数的Get请求，典型特征：第二个参数传入了{属性名:属性值} 这样格式的一个对象

  ```javascript
  $.ajax({
      url:'http://127.0.0.1:3001/getHeroSkin', // 请求api接口地址
      type:'GET',  // 表示发送get请求
      data:{heroName:'白起'}, // 表示查询英雄名称为“白起”的数据
      success:function(resData){ // 请求成功的数据存放在resData中
          console.log(resData);
      }
  })
  ```

  

  > 发送Post请求，将李白的英雄数据提交给http://127.0.0.1:3001/addHeroSkin

  ```javascript
  $.ajax({
      url:'http://127.0.0.1:3001/addHeroSkin', // 请求api接口地址
      type:'POST',  // 表示发送post请求
      data:{cname:'李白',skin_name:'青莲剑仙'}, // 表示将此数据提交给url对应的接口地址
      success:function(resData){ // 请求成功的数据存放在resData中
          console.log(resData);
      }
  })
  ```




# 练习-get和post分别至少做出一个

## 获取英雄皮肤数据案例 -Get请求不带参数

- 效果
  

![image-20201201171745286](imgs\16.png)

- 本案例使用的api接口文档地址，在复制到浏览器即可查看：`http://157.122.54.189:9092/upload/ajaxapidoc/index.html#api-01-Ajax初体验-getHeroSkin` 

- 实现代码

  ```html
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          .warp {
              width: 300px;
              height: 300px;
              border: solid 1px #000;
              border-radius: 5px;
              margin: 20px auto;
          }
  
          .title {
              width: 300px;
              height: 30px;
              border-top-left-radius: 5px;
              border-top-right-radius: 5px;
              text-align: center;
              padding-top: 5px;
              padding-bottom: 5px;
              background-color: #0094ff;
              color: white;
          }
          .res ul{
              margin: 0;
              padding: 5px;
          }
          .res li{
             list-style: none;
             text-indent: 24px;
             margin-top: 10px;
          }
        
      </style>
  </head>
  <body>
      <div class="warp">
          <div class="title">
              <button id="getbtn"> 获取英雄皮肤</button>
          </div>
          <div class="res">
              <ul>
                  <span>名称:</span><li id="cname">&nbsp;</li>
                  <hr>
                  <span>皮肤:</span><li id="skin_name">&nbsp;</li>
              </ul>
          </div>
      </div>
  <script src="https://www.jq22.com/jquery/jquery-1.10.2.js"></script>
      <script>
          $(function () {
              // 给id为getbtn的按钮注册click点击事件
              $('#getbtn').click(function () {
                  // 通过ajax的get请求，获取英雄数据
                  $.get('http://127.0.0.1:3001/getHeroSkin',null,function(resData){
                      // 将请求到的英雄名称显示在id为cname的li标签中
                     $('#cname').html(resData.data.cname);
                       // 将请求到的英雄皮肤显示在id为skin_name的li标签中
                     $('#skin_name').html(resData.data.skin_name);
                  });
              })
          })
    </script>
  </body>
  </html>
  ```
  
  

## 获取指定英雄皮肤数据案例-Get请求带参数

  - 效果

    ![image-20201201173428230](imgs\17.png)

  - 本案例使用的api接口文档地址：`http://157.122.54.189:9092/upload/ajaxapidoc/index.html#api-01-Ajax初体验-getHeroSkin` 在浏览器输入即可查看，重点查看 `请求参数` 的说明

  - 代码


~~~html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .warp {
            width: 400px;
            height: 300px;
            border: solid 1px #000;
            border-radius: 5px;
            margin: 20px auto;
        }
        .title {
            width: 400px;
            height: 30px;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            text-align: center;
            padding-top: 5px;
            padding-bottom: 5px;
            background-color: #0094ff;
            color: white;
        }
        .res ul{
            margin: 0;
            padding: 5px;
        }
        .res li{
           list-style: none;
           text-indent: 24px;
           margin-top: 10px;
        }
      
    </style>
</head>

<body>

    <div class="warp">
        <div class="title">
            英雄名:<input type="text" id="heroName" style="width:200px" placeholder="输入你想查看的英雄名，如：白起">
            <button id="getbtn"> 获取指定英雄皮肤</button>
        </div>
        <div class="res">
            <ul>
                <span>名称:</span><li id="cname">&nbsp;</li>
                <hr>
                <span>皮肤:</span><li id="skin_name">&nbsp;</li>
            </ul>
        </div>
    </div>
  <script src="https://www.jq22.com/jquery/jquery-1.10.2.js"></script>
  <script>
      $(function () {
           // 给id为getbtn的按钮注册click点击事件
          $('#getbtn').click(function () {
   			   // 获取页面上用户在id为heroName文本框中输入的英雄名称
              const hname = $('#heroName').val();
              //如果用户没有输入则提示
              if(!hname){
                  alert('请输入英雄名称');
                  return;//不再执行return之后的代码，也就是下面的$.get不会执行
              }    
              // 通过ajax的get请求，获取指定英雄数据
              $.get('http://127.0.0.1:3001/getHeroSkin',{heroName:hname},function(resData){
                  // 将请求到的英雄名称显示在id为cname的li标签中
                 $('#cname').html(resData.data.cname);
                   // 将请求到的英雄皮肤显示在id为skin_name的li标签中
                 $('#skin_name').html(resData.data.skin_name);
              });    
          })
      })
    </script>
   </body>
    </html> 

~~~


## 添加英雄皮肤案例-练习Post请求

- 案例效果

  ![image-20201201175344789](imgs\18.png)

- 本案例使用的api接口文档地址：`http://157.122.54.189:9092/upload/ajaxapidoc/index.html#api-01-Ajax初体验-addHeroSkin`在浏览器打开该链接即可查看

- 代码


   ```html
  <!DOCTYPE html>
  <html>
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          .warp {
              width: 300px;
              height: 300px;
              border: solid 1px #000;
              border-radius: 5px;
              margin: 20px auto;
          }
  
          .title {
              width: 300px;
              height: 30px;
              border-top-left-radius: 5px;
              border-top-right-radius: 5px;
              text-align: center;
              padding-top: 5px;
              padding-bottom: 5px;
              background-color: #0094ff;
              color: white;
          }
  
          .res ul {
              margin: 0;
              padding: 0;
          }
  
          .res li {
              list-style: none;
              text-indent: 24px;
              margin-top: 10px;
              padding-top: 10px;
              text-align: center;
          }
      </style>
  </head>
  
  <body>
  
      <div class="warp">
          <div class="title">
              添加英雄皮肤数据
          </div>
          <div class="res">
              <ul>
                  <li>
                      <span>名称: </span><input type="text" id="cname" />
                  </li>
                  <li>
                      <span>皮肤: </span><input type="text" id="skin_name" />
                  </li>
                  <li>
                      <button id="submit" style="width: 100px;">提交</button>
                  </li>
              </ul>
          </div>
      </div>
  
  
      <script src="https://libs.baidu.com/jquery/1.8.3/jquery.min.js"></script>
      <script>
          $(function () {
              // 给submit注册click点击事件
              $('#submit').click(function () {
  			// 准备要发送给服务器的英雄数据
                const heroData = {
                  cname:$('#cname').val(),
                  skin_name:$('#skin_name').val()
                }
                // 发送post请求，将heroData对象中的英雄数据提交给http://127.0.0.1:3001/addHeroSkin
                $.post('http://127.0.0.1:3001/addHeroSkin',heroData,function(resData){
                    // 提示用户服务器处理的结果是成功还是失败
                    alert(resData.msg);
                })
              })
          })
      </script>
  </body>
  
  </html>
   ```

## jQuery中的serialize()方法 - 了解即可

- 为什么要使用serialize()方法

我们在使用 $.post()方法时，通常需要获取页面上用户输入的数据，例如：“添加英雄皮肤案例-练习Post请求” 时我们是通过定义一个heroData 对象，里边的cname和skin_name属性值都是通过jQuery去获取页面上文本框中的值，这种方式的弊端在于有时候我们做的业务比较复杂，页面中需要获取值的个数会相当多，这时如果还是一个个通过jQuery方法获取的话，我们写的代码就会相当复杂，如果使用jQuery中的serialize()方法配合form标签就能一次性自动获取到所有处在<form></form>中的带有name属性的元素值 

```js
const heroData = {
    cname:$('#cname').val(),  // 通过 $('#cname').val() 获取页面上用户输入的 英雄名称
    skin_name:$('#skin_name').val()  // 通过 $('#skin_name').val() 获取页面上用户输入的 英雄皮肤名称
}

//上面代码的写法，如果页面上有一百个值需要获取，我们要写100行这样的代码，相当麻烦，所以我们需要使用jQuery中的serialize()方法来快速获取页面上的元素
```

- 利用serialize()方法获取form表单中带有name属性元素的值步骤
  - 1、在html页面上将需要获取值所有元素设置一个name属性
    
    - 举例：`<input type="text" name="cname" />`  文本框元素添加了一个 **name="cname"**的属性
    
  - 2、将这些元素全部包裹到`<form id="form元素id"></form>`中，并且给form标签设置一个id属性，比如：form1
    
    - 举例：
    
    ```html
    <form id="form1">
        <input type="text" name="cname" value="baiqi" />
        <input type="text" name="skin_name" value="gouzi">
    </form>
    ```
    
  - 3、使用 `$('#form元素id').serialize()` 就可以自动的把在form标签中的所有带有name属性的元素以 key=value的格式输出成字符串，多个中间用&链接
    
    - 举例：`$('#form1').serialize()`获取到的结果字符串为：`cname=baiqi&skin_name=gouzi`

### 使用serialize()方法改造添加英雄皮肤案例-练习Post请求

- 本案例使用的api接口文档地址：`http://157.122.54.189:9092/upload/ajaxdoc/index.html#api-01-Ajax初体验-addHeroSkin` 在浏览器打开该链接即可查看

- 关键代码

  - 1、将名称和皮肤对应的两个文本框加上name属性，并把它们放到`<form></form>`中

    ```html
    <form id="form1">
        <div class="res">
            <ul>
                <li>
                    <span>名称: </span> <input type="text"  name="cname"/>
                </li>
                <li>
                    <span>皮肤: </span> <input type="text"  name="skin_name" />
                </li>
                <li>
                    <button id="submit" style="width: 100px;">提交</button>
                </li>
            </ul>
        </div>
    </form>
    ```
    
  - 2、ajax请求时，使用 `$('#form1').serialize()` 获取form表单中的带有name属性的值

    ```javascript
   const heroData = $('#form1').serialize();
    ```
  
  - 3、因为 `<button id="submit" style="width: 100px;">提交</button>` 也在form表单标签中，所以当点击此按钮时会触发form表单的提交从而导致浏览器重新刷新后

- 完整代码，注意找里边的 步骤1，步骤2，步骤3注释查看关键代码


  ```html
  <!DOCTYPE html>
  <html>
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          .warp {
              width: 300px;
              height: 300px;
              border: solid 1px #000;
              border-radius: 5px;
              margin: 20px auto;
          }
  
          .title {
              width: 300px;
              height: 30px;
              border-top-left-radius: 5px;
              border-top-right-radius: 5px;
              text-align: center;
              padding-top: 5px;
              padding-bottom: 5px;
              background-color: #0094ff;
              color: white;
          }
  
          .res ul {
              margin: 0;
              padding: 0;
          }
  
          .res li {
              list-style: none;
              text-indent: 24px;
              margin-top: 10px;
              padding-top: 10px;
              text-align: center;
          }
      </style>
  </head>
  
  <body>
  
      <div class="warp">
          <div class="title">
              添加英雄皮肤数据
          </div>
         <!-- 步骤2：使用form表单标签包裹住所有带有name的input标签 -->
          <form id="form1">
              <div class="res">
                  <ul>
                      <li>
                             <!-- 步骤1：将input标签加上name属性,值填写为 cname -->
                          <span>名称: </span><input type="text" name="cname" required="required" />
                      </li>
                      <li>
                            <!-- 步骤1：将input标签加上name属性,值填写为skin_name -->
                          <span>皮肤: </span><input type="text" name="skin_name" required="required" />
                      </li>
                      <li>
                          <button id="submit" style="width: 100px;">提交</button>
                      </li>
                  </ul>
              </div>
          </form>
      </div>
  
  
      <script src="https://www.jq22.com/jquery/jquery-1.10.2.js"></script>
      <script>
          $(function () {
            //给id为form1的表单注册submit事件  
              $('#form1').submit(function (e) {
                  e.preventDefault();
                  //步骤3：通过$('#form1').serialize() 获取id为form1表单标签中的所有带有name属性的元素值
                  // 注意：form表单标签中的元素可以是 input,select,checkbox,radio等
                  const heroData = $('#form1').serialize();
                  $.post('http://127.0.0.1:3001/addHeroSkin', heroData, function (resData) {
                      alert(resData.msg);
                  })
              })
          })
      </script>
  </body>
  
  </html>
  ```



# Ajax知识分布2

## 综合案例-英雄管理系统

### 案例整体效果演示

![heromgr](imgs\heromgr.gif)

## 英雄管理系统业务分解

### 前置准备

做以下业务之前，请先找到老师发给大家的 “**服务器与AJAX**” 文件夹，根据下图蓝色背景选中的地址找到 run.bat文件，双击打开它，才能被ajax请求到数据

![image-20201201104640125](imgs\13.png)

### 英雄列表数据实现两个效果

| 实现功能描述：1、实现英雄信息表格显示     2、输入英雄名，点击搜索按钮查询出匹配的英雄数据 |
| ------------------------------------------------------------ |
| 效果:![list](imgs\19.png)                                    |
| **此业务涉及到Api接口说明文档：**                            |
| `http://157.122.54.189:9092/upload/ajaxdoc/index.html#api-02-英雄信息管理-getHeroList` |
|                                                              |


#### 功能1:实现英雄信息表格显示（不带搜索条件）

##### 功能效果演示

![list](imgs\hreo-list1.gif)

##### 静态结构

> 创建index.html页面，将如下静态结构代码拷贝其中

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>英雄列表</title>
    <link rel="stylesheet" href="../libs/bootstrap/css/bootstrap.css">
    <style>
        .container {
            width: 900px;
            min-height: 600px;
            margin: 20px auto;
        }
        .table img {
            width: 40px;
            height: 40px;
        }
        .table td,
        .table th {
            text-align: center;
        }
        .table td:last-child {
            width: 200px;
        }
        .heroName {
            width: 200px;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- 1、英雄列表静态结构- 开始 -->
        <div class="panel panel-primary">
            <!-- Default panel contents -->
            <div class="panel-heading">英雄列表管理</div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="input-group">
                            <input type="text" class="form-control" id="heroName" placeholder="请输入要搜索的英雄名称">                            <span class="input-group-btn">
                                <button type="button" id="search" class="btn btn-default">搜索</button>
                            </span>
                        </div>
                    </div>
                    <div class="col-md-3 col-md-offset-3">
                        <button type="button" class="btn btn-lg btn-success" data-toggle="modal"
                            data-target="#myModal">添加英雄</button>
                    </div>
                </div>
            </div>
            <!-- Table -->
            <table class="table">
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>英雄名</th>
                        <th>英雄性别</th>
                        <th>英雄头像</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody id="heroList">
                    <tr>
                        <td>1</td>
                        <td>程咬金</td>
                        <td>男</td>
                        <td><img src="http://127.0.0.1:3001/assets/logo.png" alt="默认"></td>
                        <td>
                            <button type="button" class="btn btn-sm btn-warning">上传头像</button>
                            <button type="button" class="btn btn-sm btn-danger">删除</button>
                        </td>
                    </tr>                   
                </tbody>
            </table>
        </div>
        <!-- 1、英雄列表静态结构- 结束 -->
        
        <!-- 2、添加英雄静态结构- 开始 -->
       	<!-- 2、添加英雄静态结构- 结束 -->
        
        <!-- 3、上传英雄头像静态结构- 开始 -->
       	<!-- 3、上传英雄头像静态结构- 结束 -->
    </div>
</body>
</html>
```

#####  jQuery入口函数

> 在jQuery入口函数`$(function () {})` 中调用getList(); 来实现在浏览器打开index.html页面后即可执行getList()方法

```html
//1.0 导入jquery库
<script src="https://www.jq22.com/jquery/jquery-1.10.2.js"></script>
<script>
    $(function () {
        // 所有逻辑JS代码在jQuery入口函数中进行编写
        //1.0 实现在浏览器打开index.html页面后即可执行此方法
        getList();
    });
    
    // 定义getList方法，实现两个逻辑
    function getList(){
        // 1、通过 $.get()方法完成http://127.0.0.1:3001/getHeroList 地址的请求，获取到服务器的英雄JSON数据
        // 2、处理英雄JSON数据，将其转换成表格显示在网页中
    }
</script>
```

##### getList()方法逻辑编写

> getList()方法要完成的JS代码功能有：
>
> 1、通过 $.get()方法完成http://127.0.0.1:3001/getHeroList 地址的请求，获取到服务器的英雄JSON数据
>
> 2、处理英雄JSON数据，将其转换成表格显示在网页中

```javascript
function getList() {
  // 1.0 通过 $.get()方法完成http://127.0.0.1:3001/getHeroList 地址的请求，获取到服务器的英雄JSON数据后会自动保存到resData中
    $.get('http://127.0.0.1:3001/getHeroList', null, function (resData) {
        //1.0.1、判断服务器响应code，如果是500则表示服务器处理失败了，把处理结果resData.msg通过alert提示给用户
        if (resData.code == 500) {
            alert(resData.msg);
            return;
        }
		
        //2.0 处理英雄JSON数据，将其转换成表格显示在网页中
        //2.0.1 定义resHtml变量用来保存所有英雄数据的 tr标签结构
        let resHtml = '';
        // 2.0.2 遍历resData.data数组，将每一个英雄通过tr、td结构拼接成表格的一行数据
        resData.data.forEach(item => {
            resHtml += `
                <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.gender}</td>
                <td><img src="${item.img}" alt="默认"></td>
                <td>
                <button type="button" class="btn btn-sm btn-warning">上传头像</button>
                <button type="button" class="btn btn-sm btn-danger">删除</button>
                </td>
                </tr>
                `;
        })
		// 2.0.3 将resHtml的表格结构字符串覆盖到id为heroList的tbody中
        $('#heroList').html(resHtml);
    })
}
```



##### 结果查看和调试排错

> 在浏览器中打开index.html，即可看到英雄列表数据，如果没有看到英雄列表数据从如下两个方面去排查问题：
>
> 1、在浏览器上按F12打开调试工具，选择NetWork标签，选择xhr过滤标签后按F5刷新页面，如果没有看到任何请求，则表示getList()方法中的发送ajax请求代码有问题，或者jquery的入口函数 $(function(){})中没有调用getList()方法

![image-20201204180237372](imgs\20.png)

> 2、如果有发出ajax请求，也有数据回来，那么看getList()方法中的resData.data.forEach()这段代码中的js逻辑，如果有问题也会显示不出数据，认证检查之

![image-20201204180336035](imgs\21.png)



#### 功能2:输入英雄名，点击搜索按钮查询出匹配的英雄数据

##### 功能效果演示

![image-20201204180850696](imgs\hreo-search.gif)

##### 静态结构

> 继续打开在做功能1实现的index.html，静态结构已经在里边写好了，找到里边的文本框和搜索按钮即可

![image-20201204180850696](imgs\22.png)



#####  jQuery入口函数

> 找到index.html代码，在jQuery入口函数`$(function () {})` 中 给id为search搜索按钮注册click事件

```javascript
$(function () {
    // 获取英雄列表
    getList();

    // 2.0 给搜索按钮增加click事件
    $('#search').click(function(){
        // 2.0.1 获取id为heroName的文本框中的英雄名称，该文本框内容是用户自行输入的
        let heroName = $('#heroName').val();
        //2.0.2 调用getList()方法并把英雄名称当做参数传入进去
        getList(heroName)
    })
});
```



##### 改造getList()方法

> 改造点为2个：
>
> 1、给getList增加一个形参
>
> 2、将$.get()方法改为带参数的ajax请求

```javascript
// 1.0 获取带条件的英雄列表
 // 改造点1: 给getList增加一个形参pHeroName
function getList(pHeroName) {
  // 改造点2: $.get()第二个参数变为：{heroName:pHeroName},回调函数的逻辑不变化
    $.get('http://127.0.0.1:3001/getHeroList', {heroName:pHeroName}, function (resData) {
		//1.0.1、判断服务器响应code，如果是500则表示服务器处理失败了，把处理结果resData.msg通过alert提示给用户
        if (resData.code == 500) {
            alert(resData.msg);
            return;
        }
		
        //2.0 处理英雄JSON数据，将其转换成表格显示在网页中
        //2.0.1 定义resHtml变量用来保存所有英雄数据的 tr标签结构
        let resHtml = '';
        // 2.0.2 遍历resData.data数组，将每一个英雄通过tr、td结构拼接成表格的一行数据
        resData.data.forEach(item => {
            resHtml += `
                <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.gender}</td>
                <td><img src="${item.img}" alt="默认"></td>
                <td>
                <button type="button" class="btn btn-sm btn-warning">上传头像</button>
                <button type="button" class="btn btn-sm btn-danger">删除</button>
                </td>
                </tr>
                `;
        })
		// 2.0.3 将resHtml的表格结构字符串覆盖到id为heroList的tbody中
        $('#heroList').html(resHtml);
    })
}
```

##### 结果验证

> 在浏览器中打开index.html，在搜索框中输入白起后点击搜索按钮后 表格中只显示白起这个英雄的数据，其他英雄不显示即为成功

###  添加英雄效果 




![img](imgs\hero-add.gif)


#### 静态结构

 将下面代码框静态结构拷贝到 index.html的

 `<!-- 2、新增英雄静态布局-开始 -->`

`<!-- 2、新增英雄静态布局-结束 -->`

 中间后，修改添加英雄按钮为如下样式：

 `<button type="button" class="btn btn-lg btn-success" data-toggle="modal" data-target="#myModal">添加英雄</button>`

 主要是增加 data-toggle="modal"  data-target="#myModal"  两个属性用来配合bootstrap-3.3.4.js 打开模态框


```html
<!-- 2、新增英雄静态布局-开始 -->
<div class="modal fade" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">添加英雄</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" id="addHeroForm">
                    <div class="form-group">
                        <label for="inputEmail3" class="col-sm-2 control-label">英雄名</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name="name" required="required"
                                   placeholder="输入英雄名...">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword3" class="col-sm-2 control-label">英雄性别</label>
                        <div class="col-sm-10">

                            <div class="form-group">
                                <div class="col-sm-10">
                                    <select name="gender" id="inputgender" class="form-control"
                                            required="required">
                                        <option value="">-- Select One --</option>
                                        <option value="男">男</option>
                                        <option value="女">女</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" id="addHero" class="btn btn-success">提交</button>
                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">

            </div>
        </div>
    </div>
</div>
<!-- 2、新增英雄静态布局-结束 -->
```

#### 导入bootStrap.js文件

> 在index.html中导入bootstrap.js

```javascript
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
// 注意：一定要先导入jquery后导入bootstrap-3.3.4.js,因为bootstrap-3.3.4.js依赖于1.9版本以上的jquery库
<script src="https://www.jq22.com/jquery/bootstrap-3.3.4.js"></script>
```

#### 添加英雄接口文档说明

浏览器中打开 `http://157.122.54.189:9092/upload/ajaxdoc/index.html#api-02-英雄信息管理-addHero`即可查看添加英雄Api接口说明

#### 实现添加英雄逻辑

> 在index.html中的 `$(function(){})`中增加如下代码

```javascript
//  给form表单注册submit事件
$('#addHeroForm').submit(function (e) {
    // 阻止form表单默认行为，方式页面自己刷新导致数据丢失
    e.preventDefault();
    // 利用serialize()获取表单中的数据
    let heroBody = $('#addHeroForm').serialize();
    // 为了数据完整性，保留img属性，值为空
    heroBody.img = '';
    // 执行新增数据请求
    $.post('http://127.0.0.1:3001/addHero', heroBody, function (resData) {
        // 处理服务器异常提示
        if (resData.code == 500) {
            alert(resData.msg);
            return;
        }

        alert('添加成功');
        // 重新获取所有英雄数据
        getList();
        // 关闭bootstrap中的模态窗口
        $('#myModal').modal('hide');
        // 重置表单数据
        document.querySelector('#addHeroForm').reset();
    })
})
```

#### 结果验证

> 在浏览器中打开index.html，操作效果与前面动图保持一直表示成功

### 3. 删除英雄效果

#### 功能效果演示

![del](imgs\hero-delete.gif)

#### 给删除按钮添加onclick事件

> 在index.html中找到 删除按钮html结构:`<button type="button" class="btn btn-sm btn-danger">删除</button>`
>
> 给其添加onclick事件，当用户点击删除按钮就会触发delHero方法，并把英雄id通过${item.id}传入进去，代码如下：

```html
<button type="button" onclick="delHero(${item.id})" class="btn btn-sm btn-danger">删除</button>

<!-- 注意其中${item.id} 在浏览器中运行的最终代码会变为英雄的真正id，例如程咬金这条数据上的删除按钮：
 <button type="button" onclick="delHero(2)" class="btn btn-sm btn-danger">删除</button>  -->
```

#### 删除英雄接口文档说明

浏览器中打开 `http://157.122.54.189:9092/upload/ajaxdoc/index.html#api-02-英雄信息管理-delHeroById`即可查看删除英雄Api接口说明

#### 实现delHero方法逻辑

> 在index.html中的 `$(function(){})`中增加如下代码

```javascript
 // 3.0 删除英雄
function delHero(paramsid) {
    $.get('http://127.0.0.1:3001/delHeroById', { id: paramsid }, function (resData) {
        if (resData.code != 200) {
            alert(resData.msg);
            return;
        }

        alert('删除成功');
        // 重新刷写一下列表，将删除的数据在页面中清除
        getList();
    })
}
```

### 4. 上传英雄头像

#### 功能效果演示

![hup](imgs\hreo-upload.gif)



#### 静态结构

> 将以下静态结构拷贝到 index.html的
>
> `<!-- 3、上传头像静态布局-开始 -->`
>
> ` <!-- 3、上传头像静态布局-结束 -->`
>
> 中间

```html
<!-- 3、上传头像静态布局-开始 -->
<div class="modal fade" id="uploadModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">上传头像</h4>
            </div>
            <div class="modal-body">
                <input type="file" id="file_name">
            </div>
            <div class="modal-body">
                <button type="button" id="btnupload" class="btn btn-primary">提交</button>
                <button type="button" data-dismiss="modal" class="btn btn-default">取消</button>
            </div>
            <div class="modal-footer">
            </div>
        </div>
    </div>
</div>
<!-- 3、上传头像静态布局-结束 -->
```

#### 修改列表页上上传头像按钮

> 作用:  给每一条英雄数据中的 `上传按钮` 注册点击事件

```html
//将列表页上上传头像按钮中的按钮添加点击事件：onclick="showUpladModal(${item.id})"
<button type="button" onclick="showUpladModal(${item.id})" class="btn btn-sm btn-warning">上传头像</button>
<!-- 注意其中${item.id} 在浏览器中运行的最终代码会变为英雄的真正id，例如程咬金这条数据上的删除按钮：
<button type="button" onclick="showUpladModal(${2})" class="btn btn-sm btn-warning">上传头像</button> -->
```

#### 定义showUpladModal方法

> 作用：在showUpladModal方法中打开文件上传窗口

```javascript
// 4.0 打开上传窗口
// 4.0.1 定义一个全局变量用来存放英雄id
const globalHeroID = 0;
function showUpladModal(heroID) {
    // 找到 id 为 uploadModal 的元素调用bootstrap中的modal方法，传入固定值 show 即可打开模态窗口
    $('#uploadModal').modal('show');
    // 点击哪个英雄数据的上传头像按钮，就将该英雄id赋值给全局变量globalHeroID保存起来，方便在当前页面中的其他function中使用
    globalHeroID = heroID;
}
```

#### 给上传窗口中的 `提交`注册click事件

> 作用：在$(function(){})中给提交按钮注册事件，执行文件上传操作

```javascript
$(function(){
  $('#btnupload').click(function () {
     // 1.0 获取用户选择的文件
     const file = document.querySelector('#file_name').files[0];
     // 2.0 如果用户没选择文件,则提示
     if (!file) {
         alert('请选择要上传的头像');
         return;
     }

     // 3.0 因为文件不是文本字符串,所以需要一个formData对象来构造
     const formData = new FormData();
     formData.append('file_data', file);

     // 4.0 将文件上传到服务器
     $.ajax({
         url: 'http://127.0.0.1:3001/uploadFile',
         data: formData,
         method: 'POST',
         contentType: false, // 因为jquery默认请求contentType为x-www-form-urlencoded，它通常处理的是字符串，此处是一个文件所以需要设置false禁止设置
         processData: false, // 此参数jquery默认为true会对传入的data转换为请求字符串，此处是一个文件不需要转化成字符串
         success: function (resData) {
             if (resData.code === 500) {
                 alert(resData.msg);
                 return;
             }
             // console.log(heroID);
             console.log(resData.src);
             $('#file_name').val('');
             if(globalHeroID <=0){
                 alert('英雄ID错误，请检查');
                 return;
             }
             // 获取到头像上传路径以后，需要定义一个新方法updateHero，将此路径更新到英雄数据中去
             updateHero(globalHeroID, resData.src);
         }
     });
 })
})
```

#### updateHero方法更新头像路径

> 作用：上传接口返回图片路径以后，需要在此方法中将路径更新到英雄数据中去

```javascript
function updateHero(heroID, imgpath) {
    // 1.0 根据英雄id获取英雄的id,name,gender老数据
    $.get('http://127.0.0.1:3001/getHeroById', { id: heroID }, function (resData) {
        // 1.0.1 构造一个完整的英雄对象，补齐img头像地址
        let heroBody = {
            id: heroID,
            name: resData.data.name,
            gender: resData.data.gender,
            img: imgpath
        }
        //  2.0 将heroBody英雄数据通过post请求重新更新英雄所有数据
        $.post('http://127.0.0.1:3001/updateHero', heroBody, function (res) {
            if (res.code == 500) {
                alert(res.msg);
                return;
            }
            // 2.0.1 在英雄列表中将英雄头像地址赋值给其对应的img标签，从而在页面正常显示英雄头像
            $('#img' + heroID).attr('src', imgpath);

            // 2.0.2 调用bootstrop的modal方法传入hide 关闭模态窗口 （固定写法）
            $('#uploadModal').modal('hide');
        })
    })
```



## 文件上传

大家所浏览的任何网页上的图片，下载的资源，均需要先由资源拥有者上传到服务器上后才能被上网用户所获得，所以我们在开发一个网站时，利用Ajax进行文件上传是必不可少的一种编码操作，接下来我们一起实现一个文件上传功能的编码。

### 实现效果演示

![upload](imgs\upload.gif)



### 实现步骤

#### 创建 uploadFile.html 文件

> 使用 `<input type="file" id="img">` 来让浏览器读取电脑硬盘中的文件

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
     <p>
      <!-- 1.0 准备 file类型的input 元素，用户通过它可以选择客户端电脑硬盘上的文件到浏览器中 -->
        <input type="file" id="img">
    </p>
    <!-- 2.0 当用户点击此按钮时将 <input type="file" id="img">
        中读取到的文件上传到服务器，所以必须给此按钮注册click实践，js代码在下方实现 -->
    <button id="uploadButton">上传</button><br>
    <hr>
    <!-- 3.0 当服务器响应回来图片的地址JSON数据后，将图片地址设置到img的src属性中就能正常显示图片了 -->
    <img src="" alt="" id="imgsrc">  
</body>

</html>
```

#### 编写上传代码

> 文件上传Api接口说明文档：`http://157.122.54.189:9092/upload/ajaxdoc/index.html#api-03-上传-uploadFile`

```html
 <!-- 1.0 导入jquery -->
    <script src="https://www.jq22.com/jquery/jquery-1.10.2.js"></script>
    <script>
        $(function () {
            // 2.0 给id为uploadButton的按钮注册点击事件
            $('#uploadButton').click(function () {
                // 2.0.1 获取上传的文件
                const file = document.querySelector('#img').files[0];
                // 2.0.2 判断是否选择了文件
                if (!file) {
                    return alert('请选择一个文件');
                }

                // 2.0.3 上传操作
                // 2.0.3.1 构造一个FormData对象，因为文件不是字符串，所以需要FormData来构造(上传的固定代码)
                const formData = new FormData();
                //  2.0.3.2 添加文件到formData(上传的固定代码)
                // 注意:其中file_data要与上传Api文档说明中的参数名称一致
                formData.append('file_data', file);
                // 2.0.3.3 将formData通过ajax发送给服务器完成文件上传功能
                $.ajax({
                    url: 'http://127.0.0.1:3001/uploadFile',//地址从api文档中查找
                    method: 'post',//请求方式从api文档中查找
                    contentType: false,//上传文件时此参数默认为false
                    processData: false,//上传文件时此参数默认为false
                    data: formData,//将文件上传给服务器
                    success: function (resData)  //  服务器响应成功后的回调函数，resData存放了服务器响应的JSON数据
                    {
                        /*
                            resData格式：
                            {
                              "code":200,
                              "msg":"上传成功",
                              "src":"http:\127.0.0.1:3001\assets\uploads\m.jpg"
                            }
                        */
                        
                        // 3.0 将图片回显到浏览器中
                        $('#imgsrc').attr('src', resData.src);
                    }
                })
            })
        })
    </script>
```

# Ajax知识分布3

## art-template模板引擎

如果按照 英雄管理系统中的英雄列表那样去渲染数据的话，碰到复杂功能编码就会变得很复杂，并且由于要修改字符串中的内容，没有编辑器提示后期维护，加新功能（例如咱们给上传、删除按钮注册click事件）也变得不方便，所以art-template模板引擎就能解决此问题

### art-template官网

http://aui.github.io/art-template/zh-cn/docs/index.html

### art-template在线地址

> 可以在html页面中 通过  `<script src="https://unpkg.com/art-template/lib/template-web.js"></script>`导入

https://unpkg.com/art-template/lib/template-web.js

### art-template 标准语法

```javascript
{{value}}  // 输出value变量的值
{{data.key}}  // 输出data对象中key属性的值
{{data['key']}} // 输出data对象中key属性的值
{{a ? b : c}} // 三元运算符
{{a || b}}  // 逻辑或运算
{{a + b}}  // 算术运算符
```

### art-template体验

- 1、新建一个html页面，通过script标签导入template-web.js文件

- 2、定义一个符合art-template格式要求的模板（其中id可以自己定义）

- 3、 使用template(模板，数据)方法传入 模板和数据后会生成html字符串后添加到网页中

  ```html
  <!DOCTYPE html>
  <html>
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  
  <body>
      <div id="app">
  
      </div>
      <!-- 1.0 通过script标签导入template-web.js文件 -->
      <script src="https://unpkg.com/art-template/lib/template-web.js"></script>
  
      <!-- 2.0 定义一个符合art-template格式要求的模板（其中id可以自己定义） -->
      <script id="tmp" type="text/html">
          <!-- 3.0.2 输出 tmplate()方法中第二个参数传入对象中的text属性的值 -->
          {{text}}
      </script>
  
      <!-- 3.0 使用template(模板，数据)方法传入 模板和数据后会生成html字符串返回 
      注意参数：
               模板：模板填写 第2步中定义的模板id即可
               数据：可以传入 对象{},数组[]等 均可
      -->
      <script>
          // 3.0.1 调用template方法生成最终html字符串存入到resHtml变量中
          const resHtml = template('tmp', { text: "这是传入给art-template的数据" })
  
          // 3.0.2 找到第2步中的id为tmp模板，在里边填写art-template标准语法输出text变量值        
  
          // 3.0.3 将resHtml中的字符串添加到网页中的id为app的div中
          document.querySelector('#app').innerHTML = resHtml;
      </script>
  </body>
  </html>
  ```

### 循环语法

```javascript
{{each target}}
    {{$index}} {{$value}}
{{/each}}
  
// 说明：target 支持 array(数组) 与 object（对象） 的迭代 
```

- 循环语法-用法举例

  ```html
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <div id="app">
  
      </div>
  
      <!-- 1.0 通过script标签导入template-web.js文件 -->
      <script src="https://unpkg.com/art-template/lib/template-web.js"></script>
  
       <!-- 2.0 定义一个符合art-template格式要求的模板（其中id可以自己定义） -->
       <script id="tmp" type="text/html">
          <!-- 2.0.1 遍历语法，其中list变量要在template()方法第二个参数中存在   -->
          {{each list}}
              {{$index}} {{$value}} <br />
          {{/each}}
      </script>
  
      <!-- 3.0 使用template(模板，数据)方法传入 模板和数据后会生成html字符串返回 
      注意参数：
               模板：模板填写 第2步中定义的模板id即可
               数据：可以传入 对象{},数组[]等 均可
      -->
      <script>
          // 3.0.1 定义对象
         const data = { list:['程咬金','白起'] };
  
          // 3.0.2 调用template方法,传入data对象生成最终html字符串存入到resHtml变量中
          const resHtml = template('tmp', data)
  
          // 3.0.3 将resHtml中的字符串添加到网页中的id为app的div中
          document.querySelector('#app').innerHTML = resHtml;
  
      </script>
  </body>
  </html>
  ```

  

## 使用art-template改造英雄案例列表

- 完整代码

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../libs/bootstrap/css/bootstrap.css">
    <style>
        .container {
            width: 900px;
            min-height: 600px;
            margin: 20px auto;
        }
        .table img {
            width: 40px;
            height: 40px;
        }
        .table td,
        .table th {
            text-align: center;
        }
        .table td:last-child {
            width: 200px;
        }
        .heroName {
            width: 200px;
        }
    </style>
</head>

<body>
    <div class="container">
        <!-- 1、英雄列表- 开始 -->
        <div class="panel panel-primary">
            <!-- Default panel contents -->
            <div class="panel-heading">英雄列表管理</div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="input-group">
                            <input type="text" class="form-control" id="heroName" placeholder="请输入要搜索的英雄名称">
                            <span class="input-group-btn">
                                <button type="button" class="btn btn-default">搜索</button>
                            </span>
                        </div>
                    </div>
                    <div class="col-md-3 col-md-offset-3">
                        <button type="button" class="btn btn-lg btn-success" data-toggle="modal"
                            data-target="#myModal">添加英雄</button>
                    </div>
                </div>
            </div>
            <!-- Table -->
            <table class="table">
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>英雄名</th>
                        <th>英雄性别</th>
                        <th>英雄头像</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody id="tbody">                   
                </tbody>
            </table>
        </div>
        <!-- 1、英雄列表- 结束 -->
    </div>
    <script src="../libs/jquery/jquery.js"></script>
    <script src="../libs/art-template/template-web.js"></script>
   <!-- 1.0 定义英雄列表数据显示模板-使用循环语法 -->
    <script id="tmp" type="text/html">
    {{each data}}
    <tr>
        <td>{{$value.id}}</td>
        <td>{{$value.name}}</td>
        <td>{{$value.gender}}</td>
        <td><img src="{{$value.img}}"></td>
        <td>
            <button type="button" class="btn btn-sm btn-warning">上传头像</button>
            <button type="button" class="btn btn-sm btn-danger">删除</button>
        </td>
    </tr>
    {{/each}}
      
    </script>
    <script>
        $(function () {
            getList();
        })

        function getList() {
            // 1.0 通过 $.get()方法完成http://127.0.0.1:3001/getHeroList 地址的请求，获取到服务器的英雄JSON数据后会自动保存到resData中
            $.get('http://127.0.0.1:3001/getHeroList', null, function (resData) {
                //1.0.1、判断服务器响应code，如果是500则表示服务器处理失败了，把处理结果resData.msg通过alert提示给用户
                if (resData.code == 500) {
                    alert(resData.msg);
                    return;
                }

                //2.0 调用art-template模板中的 template方法传入resData.data
                /*
                resData格式：
                {
                    "code": 200,
                    "msg": "请求成功",
                    "data": [
                            {
                            "name": "程咬金",
                            "gender": "男",
                            "img": "http://127.0.0.1:3001/assets/uploads/222.jpg",
                            "id": 2
                            }
                    ]
                }
                */
                const resHtml = template('tmp', resData)

                // 2.0.3 将resHtml的表格结构字符串覆盖到id为heroList的tbody中
                $('#tbody').html(resHtml);
            })
        }
    </script>
</body>

</html>
```



## Ajax本质：XMLHttpRequest对象

### XMLHttpRequest对象的作用

> XMLHttpRequest对象 简称 xhr，最低可以兼容到IE7
>
> 浏览器兼容性查看：`https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest`

之前我们使用jQuery中的  `$.get(),$.post(),$.ajax()`方法内部本质上都是使用**XMLHttpRequest**对象与服务器来进行通讯的。也就是我们说的Ajax的本质其实就是利用**XMLHttpRequest**对象与服务器进行数据交互。

 所以我们这一节主要是深挖一下如何通过**XMLHttpRequest**对象与服务器通讯，掌握其固定的写法步骤。面试涉及到Ajax的问题时必问

### xhr发送Get请求基本步骤

> 实现效果：利用XMLHttpRequest对象实现Ajax请求http://127.0.0.1:3001/getHeroSkin，获取所有英雄皮肤数据
>
> Api接口文档：`http://157.122.54.189:9092/upload/ajaxdoc/index.html#api-01-Ajax初体验-getHeroSkin`

```javascript
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        // 1.0 创建xhr对象
        const xhr = new XMLHttpRequest();

        // 2.0 设置请求参数
        /*
            第一个参数: Get
            第二个参数：请求的URL
        */
        xhr.open('Get', 'http://127.0.0.1:3001/getHeroSkin');

        // 3.0 发送请求
        xhr.send();

        // 4.0 接收服务器响应回来的数据
        xhr.onload = function () {
            console.log(typeof xhr.responseText); // string类型
            console.log(xhr.responseText);  // 服务器响应回来的JSON数据字符串
        }
    </script>
</body>
</html>
```



### xhr发送带参数的Get请求

> 实现业务效果：利用XMLHttpRequest对象实现Ajax请求http://127.0.0.1:3001/getHeroSkin，利用`?heroName=白起`参数告诉服务器只需要返回白起的皮肤数据即可
>
> **核心代码:  xhr.open('Get', '`http://127.0.0.1:3001/getHeroSkin?heroName=白起`'); 中的 `?heroName=白起`就是参数**
>
> 了解多个参数格式: `?page=0&size=10`，方便读懂api说明文档

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        // 1.0 创建xhr对象
        const xhr = new XMLHttpRequest();

        // 2.0 设置请求相关参数
        /*
            第一个参数: Get,Post
            第二个参数：请求的URL,?heroName=白起就是参数
        */
        xhr.open('Get', 'http://127.0.0.1:3001/getHeroSkin?heroName=白起');

        // 3.0 发送请求
        xhr.send();

        // 4.0 接收服务器响应回来的数据
        xhr.onload = function () {
            console.log(typeof xhr.responseText); // string类型
            console.log(xhr.responseText);  // 服务器响应回来的JSON数据字符串
        }
    </script>
</body>
</html>
```



### URL的参数说明

> 定义：URL参数(也叫查询字符串)指的是在URL地址后面通过**`？`**号加上的用于发送给服务器的字符串
>
> 格式：将英文的**`？`**添加到URL末尾，然后在**`？`**后面加上 **参数名=参数值**这种格式的字符串，如果想要添加多个参数的话，请使用**`&`**相连，如： `参数名=参数值&参数名=参数值`
>
> 举例：
>
> 1、不带参数的URL
>
> ​	`http://127.0.0.1:3001/getHeroSkin`
>
> 2、带一个参数的URL
>
> `http://127.0.0.1:3001/getHeroSkin?heroName=白起`
>
> 3、带多个参数的URL
>
> `http://127.0.0.1:3001/getHeroSkin?id=3&heroName=白起`

### URL编码

> URL编码的作用：为了保证发送给服务器的URL及其参数不会被服务器解析错误，URL地址中，只允许出现英文相关的字母，数字，\- _ . ~  4个特殊字符以及所有的保留字符，如果出现了中文，则会对中文进行URL编码
>
> 什么是URL编码：使用`%加英文和数字`去表示中文等**`非英文字符`**

```html
http://127.0.0.1:3001/getHeroSkin?heroName=白起
// 经过URL编码以后，参数中的 中文字符 “白起” 被编码成了 %E7%99%BD%E8%B5%B7
http://127.0.0.1:3001/getHeroSkin?heroName=%E7%99%BD%E8%B5%B7
```

**JavaScript如何对URL进行编码和解码？**

> 在发送Ajax请求的时候浏览器会自动对URL进行编码，但有些时候需要开发人员手动对URL进行编码

- **encodeURI**() 对URL编码

  > 语法：encodeURI(需要编码的URL字符串);

- **decodeURI()**对URL进行解码

  > 语法：decodeURI(编码后的URL字符串);

- 举例

  ```javascript
    <script>
          const url = 'http://127.0.0.1:3001/getHeroSkin?heroName=白起';
  
          // 利用encodeURI()函数对URL进行编码
          const urlEncode = encodeURI(url);
          // 输出结果：http：http://127.0.0.1:3001/getHeroSkin?heroName=%E7%99%BD%E8%B5%B7
          console.log(urlEncode) 
  
          // 将URL编码后的url字符串解码出正常的URL     
          const urlDecode = decodeURI(urlEncode);
             // 输出结果：http://127.0.0.1:3001/getHeroSkin?heroName=白起
          console.log(urlDecode);
  
      </script>
  ```

### JSON

> JSON 的英文全称是 **J**ava**S**cript **O**bject **N**otation（JavaScript对象表示法），是一种简单的数据存储格式
>
> 通俗来讲:`JSON就是JavaScript对象或数组的字符串表示法`  是一种轻量级的数据交换格式，在Ajax请求中，服务器响应回来的数据格式通常是JSON为主。

#### JSON字符串如何表示一个JS对象

> 对象结构在JSON字符串描述中是以{} 来表示的
>
> 数据为 {key:value,key:value,....}的键值对结构，其中**key**必须用英文双引号包裹起来，**value** 可以是数字，字符串，布尔值，null，数组，对象6种类型，不能包含undefined和function其中如果是**字符串类型**必须使用英文双引号包括起来。

举例：用JSON字符串描述一个对象

```javascript
// JSON字符串描述，注意：不支持undefined和function
// 描述简单对象
`
{
    "name":"刘备",
    "age":3000,
    "isman":true    
} `
// 描述复杂对象
 `
{   
    "brother":["关于","张飞"],
    "child":{
        "name":"刘婵",
        "age":2980
    }
}
`
// 描述简单和复杂对象
 `
{
    "name":"刘备",
    "age":3000,
    "isman":true,
    "brother":["关于","张飞"],
    "child":{
        "name":"刘婵",
        "age":2980
    }
}
`
```

#### JSON字符串如何表示一个JS数组

> 数组结构在JSON字符串描述中是以[] 来表示的
>
> 数据为["刘备",3000,true,null,["张飞","关于"],{name:"刘婵",age:2980}]
>
> 数组中的数据类型为**数字，字符串，布尔值，null，数组，对象**这6种类型

```javascript
// JSON字符串表示一个数组
`["张飞","关羽"]`
`["刘备",3000,true,null]`
`["刘备",{"name":"刘婵","age":2980}]`
`["刘备",["张飞","关羽"]]`
`["刘备",3000,true,null,["张飞","关羽"],{"name":"刘婵","age":2980}]`
```

#### JavaScript中的JSON对象

> JSON本质上是JS对象或数组的一种字符串表示，我们可以使用JSON对象来对二者进行互相转换
>
> - 可以使用JSON对象中的parse()方法来将JSON字符串转换为JS对象或数组
>
> - 使用JSON对象中的stringify()方法来将JS对象或数组转换成JSON字符串

- JSON的序列化

  > 定义：JSON.parse()方法实现将JSON字符串转换为JS对象或数组

```javascript
const arr = [["张飞","关于"]];
const arrJson = JSON.stringify(arr);
console.log(arrJson);
```

- JSON反序列化

  > 定义：JSON.stringify()方法实现将JS对象或数组转换成JSON字符串

```javascript
 const obj = {
            name:'刘备',
            age:3000,
            isman:true,
            brother:['关于','张飞'],
            child:{
                name:'刘婵',
                age:2980
            }
        }

const objJson = JSON.stringify(obj);
console.log(objJson);
```

### JavaScript中的JSON对象应用示例



### xhr发送POST请求

> api接口文档：`http://157.122.54.189:9092/upload/ajaxdoc/index.html#api-01-Ajax初体验-addHeroSkin`

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // 1.0 创建xhr对象
        const xhr = new XMLHttpRequest();

        // 2.0 设置请求参数
        /*
            第一个参数: Post
            第二个参数：请求的URL            
        */
        xhr.open('POST', 'http://127.0.0.1:3001/addHeroSkin');

        // 3.0 设置Content-Type类型为application/x-www-form-urlencoded（固定写法）
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')

        // 4.0 发送请求
        // 4.0.1 根据api接口文档定义好参数字符串,其中 cname和skin_name是api文档中定义的，值用户自己给
        const heroParams = 'cname=程咬金&skin_name=爱与正义';
        // 4.0.2 将参数字符串发送给服务器
        xhr.send(heroParams);

        // 5.0 接收服务器响应回来的数据
        xhr.onload = function () {
            console.log(typeof xhr.responseText); // string类型
            console.log(xhr.responseText);  // 服务器响应回来的JSON数据字符串
        }
    </script>
</body>
</html>
```



## 封装自己的ajax方法

### 调用自定义ajax代码

```javascript
<script src="http.js"></script>
<script>
    // 发送get请求查找白起英雄皮肤数据
    ajax({
    	   type:'get',
    	   url:'http：http://127.0.0.1:3001/getHeroSkin',
    	   data:{heroName:'白起'},
           success:function(resData){ 
               console.log(resData); 
           }
		})

   // 发送post请求，添加程咬金皮肤数据
 ajax({
         type: 'post',
         url: 'http://127.0.0.1:3001/addHeroSkin',
         data: { cname: '程咬金', skin_name: '爱与正义' },
         success: function (resData) {
             console.log(resData);
         }
     })
</script>
```

### 自定义Ajax方法封装

#### 准备参数对象转字符串方法

> get请求和post请求将参数发送给服务器格式都是：key=value&key1=value1的方式，在自定义方法中要求用户传入一个js对象 {key:value,key1:value}，所以在自定义ajax方法内部需要将js对象格式的参数转换成参数字符串格式需要自己定义一个方法去实现。

```javascript
/*
将js对象转成url参数字符串
paramsObj参数格式举例：{heroName:'白起'}
*/
function objectToParamsString(paramsObj) {
    let arr = [];
    for (const key in paramsObj) {
        arr.push(`${key}=${paramsObj[key]}`);
    }
    return arr.join('&');
}

/*
    调用举例：objectToParamsString({id:3,heroName:'白起'}) 
    结果：id=3&heroName=白起
*/ 
```

#### 定义ajax方法

> 重要思路：1、充分考虑XMLHttpRequest对象进行get和post请求时的相同代码和不同代码
>
> 2、参数提取到一个对象中   
>
> 3、通过不同参数的传入做不同代码的执行，有三个地方需要做判断
>
> 	- 设置xhr.open()的时候，如果是get请求并且options.data有值则要通过objectToParamsString(options.data)将参数对象转换成字符串后添加到URL参数中
> 	- 如果是post请求，则要加上固定代码： xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
> 	- 在xhr.send()时，如果是post类型并且options.data有值则要通过objectToParamsString(options.data)将参数对象转换成字符串后，将此字符串作为xhr.send(dataString)的 参数发送给服务器
>
> 创建http.js，编写代码如下：

```javascript
// 1.0 定义ajax函数能同时满足get和post的请求
/*
 options：{
           type: 请求方式，get或者post
           url: 请求的服务器url地址,
           data:请求参数：{heroName:'白起'},
           success:function(resData){ console.log(resData); } //请求成功回调函数
        }
*/
function ajax(options) {
    // 1.0 如果请求方式没有传，默认使用GET
    if (!options.type) {
        options.type = 'GET';
    }

    // url属性必须有值
    if (!options.url) {
        console.log('请设置ajax要请求的url地址');
        return;
    }

    // 2.0 定义xhr对象
    let xhr = new XMLHttpRequest();

    // 3.0 设置ajax请求参数
    // 3.0.1 如果有请求参数，则在options.url后边增加参数
    if (options.data && options.type.toUpperCase() == 'GET') {
        let paramsStr = objectToParamsString(options.data);
        xhr.open(options.type, options.url + '?' + paramsStr);
    } else {
        xhr.open(options.type, options.url);
    }

    /*
    4.0 判断options.type类型，get请求做处理，post请求增加
      Content-Type类型为application/x-www-form-urlencoded
    */
    if (options.type.toUpperCase() == 'POST') {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }

    // 5.0 发送ajax请求
    // 5.0.1 如果是post请求，send()方法要带参数，get请求不带参数
    if (options.type.toUpperCase() == 'POST') {
        if (options.data) {
            let paramsStr = objectToParamsString(options.data);
            xhr.send(paramsStr);
        }
    } else {
        xhr.send();
    }

    // 6.0 接手请求成功的回调函数
    xhr.onload = function () {
        let resString = xhr.responseText;
        let resData = JSON.parse(resString);
        options.success(resData);
    }
}

/*
将js对象转成url参数字符串
paramsObj参数格式举例：{heroName:'白起'}
*/
function objectToParamsString(paramsObj) {
    let arr = [];
    for (const key in paramsObj) {
        arr.push(`${key}=${paramsObj[key]}`);
    }
    return arr.join('&');
}
```



## JSONP跨域

### 什么是同源

> 在编程中所谓**同源**是指：同时满足**`协议相同、域名相同、端口相同`**的两个URL我们就认为它们同源
>
> 举例：我们有一个url： http://www.test.com:8080/pages/index.html
>
> 与之同源的url：
>
> http://www.test.com:8080/api/getlist
>
> 与之不同源的url：
>
> file:///C:/pages/index.html 不同源 (协议不同)
>
> https://www.test.com:8080/pages/index.html (协议不同)
>
>  http://www.abc.com:8080/pages/index.html (域名不同)
>
> http://www.test.com/pages/index.html (端口不同，不填写端口默认是80)

### 什么是同源策略

> 1995年，同源策略由 Netscape 公司引入浏览器。目前，所有浏览器都实行这个策略。
>
> **`同源政策的目的`**：是为了保证用户信息的安全，防止恶意的网站窃取数据。现在如果非同源，在以下方面将受到限制：
>
> 1. Cookie、LocalStorage 等无法读取
> 2. DOM 无法获得
> 3. AJAX 请求在浏览器端有跨域限制

### 什么是跨域

> **跨域**与同源相反：只要在**`协议相同、域名相同、端口相同`**三个条件中有任何一个不满足的两个URL我们就认为它们会形成跨域
>
> 在编程中，形成跨域的两个网页之间相互访问数据时会被浏览器的同源策略做屏蔽，会出现访问不成功的问题。
>
> **值得注意的是**：网页中的 `<script src=""></script>` 和 `<img src="" />` 请求其他不同源地址是不会被浏览器的同源策略拦截的
>
> 但是我们在进行Ajax编程的时候跨域数据访问是经常碰到的，所以在Ajax编程过程中如何解决跨域问题是必须要掌握的。

### 跨域错误提示演示

```javascript
<script src="../libs/jquery/jquery.js"></script>
    <script>
        $(function () {
            /*
             http://127.0.0.1:3001/getStudentsJSONP.js 是一个有跨域限制的网址
             以下常规的ajax请求方式会被浏览器的同源策略进行跨域限制，所以会出现请求数据不成功问题
             并且查看浏览器的console面板，会有一串报错信息：
             Access to XMLHttpRequest at 'http://127.0.0.1:3001/getStudentsJSONP.js' from origin 'null' has
              been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the 
              requested resource.
            */ 
            $.ajax({
                type: 'GET',
                url: 'http://127.0.0.1:3001/getStudentsJSONP.js',
                success: function (resData) {
                    console.log(resData)
                }
            })
        })
    </script>
```

- 错误信息截图

  ![image-20201207124139046](imgs\24.png)

### 实现跨域数据请求的两种方式

#### **CORS方式**

CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）

新式浏览器都支持该功能，IE浏览器不能低于IE10

CORS需要服务器支持，由后台程序员在服务器做CORS设置即可，整个通信过程都是浏览器自动完成的，不需要前端工程师做任何介入

![image-20201208092817118](imgs\25.png)



#### **JSONP方式**

JSONP所有浏览器均可以使用包括IE6

它只支持GET跨域请求，不支持POST跨域请求

JSOPN需要服务器的支持

面试官在考察跨域知识的时候总喜欢问到它

### jQuery发送JSONP请求

- 支持jsonp请求的url地址：http://127.0.0.1:3001/getStudentsJSONP.js

- Api说明文档：`http://157.122.54.189:9092/upload/ajaxdoc/index.html#api-04-其他接口-getStudentsJsonP`

- jQuery 发送JSONP请求代码

  ```javascript
   <script src="../libs/jquery/jquery.js"></script>
      <script>
          $(function () {
              $.ajax({
                  type: 'GET',
                  url: 'http://127.0.0.1:3001/getStudentsJSONP.js',                       
                  dataType: 'jsonp', // 指定dataType类型为jsonp
                  success: function (resData) {
                      console.log(resData);
                  }
              })
          })
      </script>
  ```

  

### JSONP实现原理

> JSONP实现思想：网页通过添加一个`<script>`元素，向服务器请求JSON数据，这种做法不受同源策略限制，服务器收到请求后，将数据放在一个指定名字的回调函数里传回来。

- 通过上面jQuery发送JSONP请求时的两个现象来探究JSONP的实现原理

  ![image-20201208101946293](imgs\27.png)


## 知识补充

### jQuery请求XML格式数据

#### 什么是XML

> XML：可扩展标记语言是一种简单的数据存储语言，JSON出现之前，客户端与服务器的数据交互都是使用XML来进行的，所以在Ajax请求中，比较老的服务器响应回来的数据格式有可能是XML

#### XML格式举例

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<root>
	<items>
		<item>
			<id>4</id>
			<name>jodan</name>
			<age>21</age>
			<gender>男</gender>
			<zhuanye>ruby</zhuanye>
			<address>白云区</address>
		</item>
	</items>
</root>
```

#### jQuery中请求和处理XML格式数据

> 提示：重点掌握通过jquery获取响应回来的数据方式

- 接口：http://127.0.0.1:3001/getUserNameXML 返回的数据是XML格式的
- 请求ajax请求如下

```javascript
// http://127.0.0.1:3001/getUserNameXML 接口会返回xml数据
$.get('http://127.0.0.1:3001/getUserNameXML', null, function (resData) {
    console.log(resData);
    /**
        resData是一个dom对象（jquery已经将xml转换成了dom对象）:
             <?xml version="1.0" encoding="UTF-8" standalone="no" ?>
                        <root>
                            <items>
                                <item>
                                    <id>5</id>
                                    <name>jack</name>
                                    <age>22</age>
                                    <gender>男</gender>
                                    <zhuanye>java</zhuanye>
                                    <address>增城市</address>
                                </item>
                            </items>
                        </root>
                 */
    // 使用jquery中的find方法查找resData对象中的address节点数据（重点掌握）
    const address = $(resData).find('address').text();         
    alert(address)
})
```

### jQuery Ajax请求loading效果

> 如果网速较慢或者服务器响应较慢的情况下，我们通过ajax请求数据就会变得比较慢，从而会出现页面中的静态资源出现了，但是数据还没有出现的情况，所以我们需要在请求过程中增加loading效果来提示用户ajax正在加载数据中，增强用户体验

- 关键代码

  ```javascript
  $.ajax({
      beforeSend:function(xhr){}  // ajax发出请求前 弹出正在加载中
      complete:function(xhr){} // ajax请求完成后，关闭正在加载中提示
  })
  
  ```

- 效果代码演示

  ```html
  <!DOCTYPE html>
  <html>
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          .loading{
              width: 400px;
              margin: 10px auto;            
          }
          .loading img{
              vertical-align: middle;
          }
  
          .none {
              display: none;
          }
          #res{
              border: 1px solid red;
              height: 20px;
          }
      </style>
  </head>
  
  <body>    
      <!-- 展示ajax请求成功的结果 -->
      <div id="res"></div>
  
      <!-- 定义正在加载中面板，默认添加了none 隐藏它 -->
      <div class="loading none">
          <img src="./timg.gif" style="width: 100px;height:100px;">
          正在加载中.....
      </div>
  
      <script src="../libs/jquery/jquery.js"></script>
      <script>
          $(function () {
              $.ajax({
                  type:'get',
                  url:'http://127.0.0.1:3001/getStudentsJSONDelay',
                  // 1.0 Ajax请求发出之前触发此函数的执行
                  beforeSend:function(xhr) {
                      // 1.0.1 显示正在加载中提示面板
                      $('.loading').removeClass('none');
                  },
                  // 2.0 ajax请求响应完毕以后触发此函数的执行
                  complete:function(xhr){
                      // 2.0.1 关闭正在加载中提示面板
                      $('.loading').addClass('none');
                  },
                  // 3.0 服务器响应成功以后执行
                  success:function(resData){                
                     $('#res').html(resData.des);
                  }
              })
          })
      </script>
  </body>
  
  </html>
  ```





### XMLHttpRequest Level  2 新特性

> **老版本的XMLHttpRequest对象有以下几个缺点**:
>
> 	- 只支持文本数据的传送，无法用来读取和上传二进制文件
> 	- 传送和接收数据时，没有进度信息，只能提示有没有完成
> 	- IE10以下的浏览器不支持跨域资源共享（CORS）
>
> **新版本的XMLHttpRequest对象，针对老版本的缺点，做出了大幅改进:**
>
> - 可以设置Ajax请求超时(timeout)，超过请求时限自动终止请求，节约浏览器性能
> - 可以发送FormData对象格式的数据，典型应用是做上传文件操作
> - 可以获得数据传输的进度信息，例如上传进度提示
> - 支持跨域资源共享（CORS）

#### 设置请求超时

> 如果服务器响应非常慢，会影响咱们Ajax请求的性能，我们可以通过设置timeout

```javascript
<script>
        const xhr = new XMLHttpRequest();
        xhr.open('get','http://127.0.0.1:3001/getStudentsJSONDelay');
        //表示超过1000毫秒（等于1秒）服务器还未响应回来，则中断ajax请求
        //而http://127.0.0.1:3001/getStudentsJSONDelay 接口需要5秒以后才会返回，所以这次ajax请求肯定会被中断
        xhr.timeout = 1000; 
        xhr.send();
        xhr.onload = function(resData){
            console.log(resData);
        }
    </script>
```

#### 发送formData数据（上传）

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!-- 1.0 准备一个file类型的input元素，用于读取电脑磁盘文件 -->
    <input type="file" id="img">
    <!-- 2.0 点击上传按钮，执行上传文件操作 -->
    <button id="bt_upimg">上传</button>

    <script>
        window.onload = function () {
            // 获取上传按钮对象
            const bt_upimg = document.querySelector('#bt_upimg');
            // 给上传按钮注册click事件
            bt_upimg.onclick = function () {

                const xhr = new XMLHttpRequest();
                xhr.open('post', 'http://127.0.0.1:3001/uploadFile');
                // 读取文件
                const file = document.querySelector('#img').files[0];
                // 将文件追加到formData对象中
                const formData = new FormData();
                formData.append('file_data', file);
                // 执行ajax发送将包含有文件内容的formData对象发送给服务器
                xhr.send(formData);
                // 请求响应处理
                xhr.onload = function () {
                    console.log(xhr.responseText);
                }
            }
        }

    </script>
</body>

</html>
```

#### 文件上传进度

- 获取进度核心代码

  ```javascript
  // 获取上传文件的进度信息
  xhr.upload.onprogress = function (progressEvent) {
      //lengthComputable 表示文件是否可以计算，true表示可计算，false不可计算
      if (progressEvent.lengthComputable) {
          // 获取文件总长度：progressEvent.total
          let total = progressEvent.total;
  
          // 获取当前已经上传的长度
          let loaded = progressEvent.loaded;
  
          // 计算进度值，范围：0 ~ 1 之间的值
          let currentLength = loaded / total;
      }
  }
  ```

  

- 完整代码

  ```html
  <!DOCTYPE html>
  <html>
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="../../libs/bootstrap/css/bootstrap.css">
      <style>
          .progress {
              width: 300px;
          }
          .progress .sr-only {
              color: red;
              position: relative;
          }
      </style>
  </head>
  
  <body>
      <!-- 1.0 准备一个file类型的input元素，用于读取电脑磁盘文件 -->
      <input type="file" id="img">
      <!-- 2.0 点击上传按钮，执行上传文件操作 -->
      <button id="bt_upimg">上传</button>
      <!-- 3.0 设置进度条 -->
      <div class="progress">
          <div class="progress-bar progress-bar-success progress-bar-striped" 
          role="progressbar" style="width:0px ;">
              <span class="sr-only">0%</span>
          </div>
      </div>
  
      <script src="../../libs/jquery/jquery.js"></script>
      <script>
          $(function () {
              $('#bt_upimg').click(function () {
                  const xhr = new XMLHttpRequest();
                  xhr.open('post', 'http://127.0.0.1:3001/uploadFile');
                  // 获取上传文件的进度信息
                  xhr.upload.onprogress = function (progressEvent) {
                      //lengthComputable 表示文件是否可以计算，true表示可计算，false不可计算
                      if (progressEvent.lengthComputable) {
                          // 获取文件总长度：progressEvent.total
                          let total = progressEvent.total;
  
                          // 获取当前已经上传的长度
                          let loaded = progressEvent.loaded;
  
                          // 计算进度值，范围：0 ~ 1 之间的值
                          let currentLength = loaded / total;
  
                          // 设置进度百分比
                          $('.sr-only').html(currentLength * 100 + '%');
                          
                          // 设置进度条宽度比例，进度条总长度为300 * 进度值currentLength
                          $('.progress-bar').css('width',currentLength * 300 +'px');
                      }
                  }
                  // 读取文件
                  const file = document.querySelector('#img').files[0];              
                  // 将文件追加到formData对象中
                  const formData = new FormData();
                  formData.append('file_data', file);
                  // 执行ajax发送将包含有文件内容的formData对象发送给服务器
                  xhr.send(formData);
                  // 请求响应处理
                  xhr.onload = function () {
                      console.log(xhr.responseText);
                  }
              })
          })
      </script>
  </body>
  
  </html>
  ```

  

### 前端优化-防抖

#### 什么是防抖

> 当持续触发相同事件时，如果设定的时间到来之前，又一次触发了事件，就重新开始延时，如果设定的时间到来之后都没有再次触发事件，则执行最后一次事件

![image-20201208182957249](imgs\28.png)

#### 实现验证用户名是否可用案例

- jQuery的keydown事件来实现验证用户名代码（有性能问题版本）

  ```html
  <body>
      <div>
          用户名： <input type="text" id="username">
          <span class="checktip"></span>
      </div>    
      <script src="../libs/jquery/jquery.js"></script>
      <script>
          $(function(){
              // 1.0 定义检查用户名是否存在的ajax请求方法
              function checkUserName() {
                  const uname = $('#username').val();
                  $.get('http://127.0.0.1:3001/validate', { userName: uname }, function (resData) {
                      $('.checktip').html(resData.msg);
                  })
              }
  
              // 2.0 给文本框注册keydown事件
              // 思考出现的问题：用户每按一下键盘都会发送一个ajax请求出去，这样很浪费性能
              $('#username').keydown(function() {
                  checkUserName();
              })
          })
      </script>
  </body>
  ```

- jQuery的keydown事件来实现验证用户名代码（性能优化-防抖版本）

  ```html
  <body>
      <div>
          用户名： <input type="text" id="username">
          <span class="checktip"></span>
      </div>
      <script src="../libs/jquery/jquery.js"></script>
      <script>
          $(function () {
              // 1.0 定义检查用户名是否存在的ajax请求方法
              function checkUserName() {
                  const uname = $('#username').val();
                  $.get('http://127.0.0.1:3001/validate', { userName: uname }, function (resData) {
                      $('.checktip').html(resData.msg);
                  })
              }
              // 2.0 定义timer用来存储setTimeout定时器对象
              let timer = null;
              // 3.0 定义防抖函数，保证在执行时间500毫秒内多次执行fangdou()方法的话，永远只执行一次
              function fangdou() {
                  if (timer !== null) {
                      clearTimeout(timer);
                  }
                  timer = setTimeout(() => {
                      checkUserName();
                  }, 500);
              }
              // 2.0 给文本框注册keydown事件
              // 思考出现的问题：用户每按一下键盘都会发送一个ajax请求出去，这样很浪费性能
              $('#username').keydown(function () {
                  //答案：调用防抖函数fangdou();来保证频繁调用fangdou()时，只发出一次ajax请求
                  fangdou();
              })
          })
      </script>
  </body>
  ```

  

#### 前端优化-节流

> 在一定时间内不管触发多少次相同的事件，都只执行第一次的事件

- 天使随鼠标移动案例（节流版）

  ```html
  <!DOCTYPE html>
  <html>
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          #angel {
              position: absolute;
          }
      </style>
  </head>
  <body>
      <!-- 0 准备一个图片 -->
      <img id="angel" src="./angle.gif" alt="">
  
      <script src="../libs/jquery/jquery.js"></script>
      <script>
          $(function () {
              // 1.0 定义变量
              let timer = null;
              $(document).mousemove(function (e) {
                  // 2.0 如果timer不为空，则表示当前有一个setTimeout的回调函数等待执行，就不再设置新的setTimeout
                  if (timer) return;
                  // 3.0 如果timer为空，则设置一个setTimeout，30毫秒以后执行
                  timer = setTimeout(() => {
                      $('#angel').css('left', e.pageX - 100 + 'px').css('top', e.pageY - 100 + 'px');
                      console.log('angel');
                      // 4.0 执行完毕以后，timer置空，表示下个时间段可以设置新的setTimeout处理逻辑
                      timer = null;
                  }, 30);
  
              })
          })
      </script>
  </body>
  </html>
  ```




## HTTP响应状态码

>  Http状态码由三个十进制数字组成
>
> 第一个十进制数字定义了状态码类型
>
> 后面两个数字对状态码进行了二级分类

- 以下是HTTP5中类型状态码代表的含义

![image-20201216161522497](imgs\34.png)



## 常见响应状态码说明

### 2**成功相关的响应状态码

> 2**的状态码表示服务器已经成功处理了请求，常见的状态码为200

![image-20201208222404698](imgs\30.png)

### 3**重定向相关的响应状态码

> 3**的状态码，表示服务器要求客户端进行新的URL重定向，需要客户端进一步请求新URL才能完成资源的请求
>
> 常见的状态码有：

![image-20201216162121428](imgs\35.png)

### 4**客户端错误相关的响应状态码

> 4**的状态码，表示客户端的请求有非法内容导致本次请求失败，常见的状态码有：

![image-20201208223451935](imgs\31.png)



### 5**服务器端错误相关的响应状态码

> 5**的状态码，表示服务器在处理客户端请求时出现了错误，常见的状态码有：

![image-20201208223620078](imgs\32.png)



