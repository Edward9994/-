# 黑马基础CSS

[TOC]

# day01

##### 1.开发规范

###### （1）整体美观

```css
p {
	color: red;
}//花括号前、冒号后都要空格

```

###### （2）命名规范

头:header	内容:content/container	尾:footer	导航:nav	侧栏:sidebar		栏目:column	页面外围控制整体布局宽度:wrapper										左右中:left right center	登录条:loginbar	标志:logo	广告:banner				页面主体:main	热点:hot	新闻:news	下载:download	子导航:subnav	菜单:menu	子菜单:submenu	搜索:search	友情链接:friendlink				页脚:footer	版权:copyright	滚动:scroll	内容:content	标签页:tab			文章列表:list	提示信息:msg	小技巧:tips	栏目标题:title	加入:joinus	指南:guild	服务:service	注册:regsiter	状态:status	投票:vote				合作伙伴:partner

(二)注释的写法:/* Footer */内容区/* End Footer */

(三)id的命名:
(1)页面结构容器: container	页头:header	内容:content/container				页面主体:main	页尾:footer	导航:nav	侧栏:sidebar	栏目:column			页面外围控制整体布局宽度:wrapper	左右中:left right cente

(2)导航导航:nav	主导航:mainbav	子导航:subnav	顶导航:topnav			边导航:sidebar	左导航:leftsidebar	右导航:rightsidebar	菜单:menu			子菜单:submenu	标题: title	摘要: summar

(3)功能标志:logo	广告:banner	登陆:login	登录条:loginbar						注册:regsiter	搜索:search	功能区:shop	标题:title	加入:joinus				状态:status	按钮:btn	滚动:scroll	标签页:tab	文章列表:list					提示信息:msg	当前的: current	小技巧:tips	图标: icon	注释:note		指南:guild	服务:service	热点:hot	新闻:news	下载:download				投票:vote	合作伙伴:partner	友情链接:link	版权:copyright

##### 2.字体

```css
字体家族 font-family:;	serif,crusive,fantasy
字体粗细 font-weight:;	normal,bold,400-900
字体样式 font-style:;italic斜体/normal正常

字体连写 font:style weight size family;size、family必须写
//例:font:italic 700 30px/50px "楷体";字体大小/行高

文本居中 text-align:center; tec
文本修饰线 text-decoration:;none/underline/line-through
行高	line-height:1.5;//字体的1.5倍高度
```

# day02

##### 1.快捷选项

```html
select>option*10{$@1998}
//@从零自增，$#从1998自增
```

##### 2.伪类选择器

```
a:hover{}
div:hover a{}
.nav>p   //子代选择器，只选亲儿子
```

##### 3.background

```
background-repeat:;  repeat,no-repeat,repeat-x,repeat-y
background-position:10px 10px;  左右，上下
```

# day03

##### 1.继承

###### （1）继承样式

color、font-size、line-height可以继承，weith\height不能继承

a 标签例外，a自带属性颜色

###### （2）继承权重

| 继承或者* 的贡献值       | 0,0,0,0  |
| ------------------------ | -------- |
| 每个元素（标签）贡献值为 | 0,0,0,1  |
| 每个类，伪类贡献值为     | 0,0,1,0  |
| 每个ID贡献值为           | 0,1,0,0  |
| 每个行内样式贡献值       | 1,0,0,0  |
| 每个!important贡献值     | ∞ 无穷大 |

权重是可以叠加的

 比如的例子：

```
div ul  li   ------>      0,0,0,3

.nav ul li   ------>      0,0,1,2

a:hover      -----—>      0,0,1,1

.nav a       ------>      0,0,1,1   

#nav p       ----->       0,1,0,1
```

# day04

##### 1.清除盒子浮动效果

```css

  .clearfix::after {
            content: "";
            display: block;
            height: 0;
            visibility: hidden;
            clear: both;
        }
.clearfix {
    *zoom:1;
}
```

##### 2.定位、盒子居中

```
盒子居中
left:50%;
margin:-自身盒子的一半
```

###### 3.图片底侧缝隙

```css
div>img
img 是行内块元素，会默认与文字的基线对齐
解决方法：
img {
vertical-align: ;bottom/center/top/baseline
}
```

