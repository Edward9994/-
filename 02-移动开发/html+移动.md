



[TOC]



### 品优购静态网页

#### day01-h5

###### 1.h5新增语义标签

```css
header,footer,nav,article,section,aside
```

###### 2.伪类选择器

```css
：nth-child(n) {}  //even=2n，odd=2n+1，-n+2=从第2个倒着数
:nth-of-type(n) {}   //同类型
:first-child {}
:last-child {}
```

###### 3.伪元素

```css
.box::before {
	content:'李狗蛋';
    float:left;
    w50+h20px;
}或 ::after
1.伪元素默认为行内元素,display:block;
2.单标签没有伪元素
3.权重1
4.js无法获取伪元素
5.与.box 是父子关系
6.必须包含content属性

.box:hovor::after {}
```



#### day02-品优购通用模块

###### 1.命名规范

```css
shortcut > w > {fr,fl}> ul > li >
行高继承：可以直接给shortcut行高，使得li上下局中
fr插入'|'：空白li,伪类选择器2n给属性
图标文字对齐：vertical-align: middle;

header w > {logo(h1) , header_center(search,nav) , shopcar}
logo:用背景图片,h1标签裹住提高权重(隐藏字体：font-size=0;或text-indent:-200px)
header_center:先随便给个宽高，margin到具体位置，再定义里面小盒子内容，再把大盒子宽高去掉
或者？给input宽高浮动,margin到具体位置,这样就不用给父盒子宽高了
shopcar:border-radius:7px 7px 7px 0;//左上角顺时针开始

main_nav > w >{(dl>(dt>dd)),nav,banner,aside(news,live_nav,onsale)}
text-spave:now



footer > w > {slogan(.icon,h3,p),help,links,address}
精灵图icon:背景图片,浮动,h3、p会自动环绕

```

###### 2.品优购通用模块心得

1.模块要给高度，不然容易坍塌。

2.先限制中盒子宽高并浮动位子，小盒子浮动会在中盒子里面

3.标准流盒子独占一行，一浮动全部浮动

#### day03-品优购list

###### 1.浮动盒子的父亲清除浮动，解决坍塌

###### 2.iconfont字体图标引入

```cs
1.unicode
	@font-face{}
    .iconfont {}
<span class="iconfont">&#x33;</span>
2.font class
 link  css文件//在线引入http：加网址
class="iconfont icon-huojiang"
//每一个类名都要加 iconfont(字体家族定义)
3.引入js文件,可以有颜色
```

###### 3.外边距塌陷

```css
1.overflower:hidden;
2.flow:left;
3.padding:2px;
```



### 移动端

#### day04-动画、页面布局

###### 1.video 、sourse

```css
<video  controls>
	<source src="./snow.mp3"> 
 	<source src="./large.mp4"> 
</video>
```



###### 2.圣杯布局、 calc

flex、position、float	

```css
①position+padding
②float+calc
③flex //中间块flex：1;左右两边的设死宽度盒子会自动上去

width:calc(100% - 200px - 20%);//运算符两边加空格
calculate:计算	
```



###### 3.transition

```css

transiton-property:backgroud-color,border-radius;//单、多个
transiton-duration:3s,5s;//单多个

transiton:all 4s ;//整体全部
transiton:background-color 3s,border-radius 5px;//分定义
```



###### 4.transform(translate rotate  transform-origin scale)

```css
transform:translate(-50%,-50%);//移动自身的一半
transition:all 3s;//运动时间
transform-origin:top left;//选择中心点
transform:rotate(180deg) scale(2,2) translate(1px,2px);//旋转180°;X、Y轴放大2倍;右1px、下2px
translate:scale(1px,1px,1px)

translate和margin差异
①margin挤开相邻元素，translate不会
②margin 百分比相对于父亲,translate 百分比相对于自身
③大的位置效果用定位，小的微调部分使用margin、translate
```

#### day05-动画

###### 1.animation

```css
/* animation: name duration timing-function delay iteration-count direction fill-mode; */
-name 
-duration 时间
-timing-function:linear or steps(n);匀速 跳帧
-dalay 播放延迟
-iteration-count：;infinite无限
-direction：alternate or reverse;翻转
-fill-mode:forwards or backwards or both;最后一帧定格
-play-state:paused or running;暂停播放

animation: move 0.5s steps(8) 1s infinite forwards;
/* animation: name duration timing-function delay iteration-count direction fill-mode; */


```



###### 2.3d旋转

左手准则：①判断旋转方向，拇指正轴，四指旋转方向    ②正轴面向自己，顺时针方向就是旋转方向

盒子旋转后，X、Y、Z轴也会跟着改变

透视：perspetive:px;

开启容器内3D环境：transform-style



#### day06-移动屏幕适配

###### 1.视口

布局视口：pc端980px布局到移动端

视觉视口：移动端屏幕大小

理想视口：pc端html：移动端屏幕大小=1：1

###### 2.视口定义

```html
<meta name="viewport" content="width=device-width, user-scalable=no,initial-scale=1.0,maxnum-sacle=1.0,minimum-scale=1.0">
width=device-width 
initial-scale = 1.0
user-scalable = no
maximum = 1.0
```

###### 3.图片适配屏幕物理像素点

```html
//图片标签
<img src = ./imges/1.png 1x, ./imges/2.png 2x>

//背景图片
div {
	background-image:-webkit-image-set(url(./images/1.png) 1x, url(./images/2.png) 2x)
}

```

###### 4.背景缩放、继承

```css
background-size:10px 10px;// 连写加'/'
color:inherit;//可用于a继承颜色

```

#### day07-移动端布局

###### 1.流式布局（百分比布局）

```css
p {
    overflow:hidden;
	display:-webkit-box;
	-webkit-box-orient:vertical;
	-webkit-line-clamp:2;
}//2行,超出....显示
```

###### 2.flex布局

```css
子盒子主轴方向上的对齐方式：justify-content:;flex-start flex-end center space-between space-around space-evenly
主轴方向:flex-direction:;row row-reverse column column-reverse
是否换行:flex-wrap:;nowrap wrap
单行子盒子在侧轴上的对齐方式:align-items:;flex-start flex-end center stretch
多行子盒子在侧轴上的对齐方式:align-content:;flex-start flex-end center space-between space-around stretch
flex:;数字越大份额越大
order:;数字越小约靠前
```

#### day08-屏幕适配vw、rem、less

###### rem、vm

```css
rem:root em
导入flexibl.js
/* 根html 为 12px */
html {
   font-size: 12px;
}
/* 此时 div 的字体大小就是 24px */     
div {
    font-size: 2rem;
}


手机屏幕/设计稿= 手机中的div/设计稿中的div
手机中的div = （手机屏幕/设计稿） *设计稿中的div
@ratio:10rem / 750;
@ratio:100vw / 750;
@media screen and (width:800px){
    body{}
}
```



###### less

```less
//变量
@width: 10px;
@height: @width + 10px;
#header {
  width: @width;
  height: @height;
}

//混合（Mixins）
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
.post a {
  color: red;
  .bordered();
}
//嵌套
```

#### day09-https://v3.bootcss.com/css/

##### 删格系统

```css
通过js创建h5语义化标签,实现低版本兼容：
let header=document.createElement('header')

lg>1200>md>992>sm>768>xs

版本:container(宽度会变)
全屏：container-fluid

大屏沿用小屏，小屏不能沿用大屏

col-lg-1 col-md-2//列嵌套
col-lg-offset-1//位偏移

自带颜色类：success白 primary蓝 warning黄 danger红 info浅蓝

小屏隐藏：hidden-sm

```

#### day10-移动端结课