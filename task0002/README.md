# HTML、CSS基础

**任务编号**：`TASK 0001`

## 任务目的
任务1-6：完成[百度前端学院2015春季班](https://github.com/chaos2171053/ife/tree/master/2015_spring/task/task0002)前六个小节任务。 <br>
练习1-5：基于[设计稿](design/)中的设计图及标志实现页面，里面的内容、图片、配色均可自定义。
## 遇到的问题及解决办法
###1. 值类型和引用类型的区别，及其判断方法。
- 值类型：
		undefined，boolean，number，string，null.

- 引用类型：
		对象、数组、函数
值类型相当于A把一份考试复习资料复制给了B，B在资料上涂改都不影响A的资料内容。交换后你我互不相干。
引用类型相当于A告诉B教室里有一份且只有一份资料，不能拿去复印，要复习必须去教室看，但是A复制了一把钥匙给B，A和B都可以去教室看，A和B都可能修改资料上的内容。

判断方法：
1. typeof判断是否是基本类型；
typeof操作符是确定一个变量是字符串、数值、布尔值、undefined的最佳方法，但是typeof对于null的判断返回object，对function 和Array返回function，有很大的局限。

2. instanceof？
var a = []; 
console.log(a instanceof Array) //ture ;
console.log(a instanceof Object) //ture;
同样有局限性。

3.Object.prototype.toString.call()
var toString = Object.prototype.toString;

toString.call(new Date); // [object Date]
toString.call(new String); // [object String]
toString.call(Math); // [object Math]

//Since JavaScript 1.8.5
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]



[参考资料1](http://www.jb51.net/article/25610.htm)
[参考资料2](http://blog.csdn.net/qq_27090183/article/details/50823429)


###2.做任务2深度克隆时要对srcObj类型进行判断，首先它是个对象，然后对它的每个属性值的类型判断，a是数字，b1是数组，b2是字符串。一开始只判断了src是个对象而忽略了对里面属性的判断。
圆角框的实质是由不同margin值的容器堆砌而成。

参考资料：
[css2.0HTMl标签模拟圆角](http://www.imooc.com/video/1766)
[纯CSS圆角框](http://www.cnblogs.com/binyong/archive/2009/11/30/1613376.html) 

###3.做任务simpleTrim函数去掉一个字符串，头部和尾部的空白字符时，把字符串push到数组，使用join（）把数组转换成数组。
[ js数组与字符串的相互转化](http://blog.csdn.net/xuewuzhijing10/article/details/8766349)
- background-color: 属性为元素设置一种纯色。这种颜色会填充元素的内容、内边距和边框区域，扩展到元素边框的外边界（但不包括外边距）。如果边框有透明部分（如虚线边框），会透过这些透明部分显示出背景色。
元素背景的范围
	
- background:background 简写属性在一个声明中设置所有的背景属性。

可以设置如下属性：

background-color <br>
background-position <br>
background-size <br>
background-repeat <br>
background-origin <br>
background-clip <br>
background-attachment <br>
background-image <br>

如果不设置其中的某个值，也不会出问题，比如 background:#ff0000 url('smiley.gif'); 也是允许的。

通常建议使用这个属性，而不是分别使用单个属性，因为这个属性在较老的浏览器中能够得到更好的支持，而且需要键入的字母也更少。

###4.圣杯布局的实现过程思路
主要通过浮动、负边距、相对定位实现。
	
几个注意的点：<br>
1. 中间部分需要根据浏览器宽度的变化而变化，所以要用100%； <br>
2. 以左边为例，设置向左浮动 float:left，浮动距离为margin-left:-150px；因为负到窗口没有位置了，只能上挪，上挪窗口宽度可以到最左边。 <br>
3. 左右设置浮动后，中间会被挡住，所以给包裹层设置padding； <br>
4. 设置padding会导致左右栏也缩进来，故采用相对定位，把左右栏挪出去。 <br>
5. 为了保证窗口不能缩太小无法展示左右，可以给包裹层加上 min-width。 <br>
6. 把main放在最前面先渲染。 <br>

[参考资料](http://www.cnblogs.com/tinyphp/p/4742922.html)
###5.圣杯布局和双飞翼布局的区别
- 双飞翼通过设置margin-left和margin-right为左右栏腾出位置。<br>
- 圣杯布局和双飞翼布局基本上是一致的，都是两边固定宽度，中间自适应的三栏布局，其中，中间栏放到文档流前面，保证先行渲染。解决方案大体相同，都是三栏全部float:left浮动，区别在于解决中间栏div的内容不被遮挡上，圣杯布局是中间栏在添加相对定位，并配合left和right属性，效果上表现为三栏是单独分开的（如果可以看到空隙的话），而双飞翼布局是在中间栏的div中嵌套一个div，内容写在嵌套的div里，然后对嵌套的div设置margin-left和margin-right，效果上表现为左右两栏在中间栏的上面，中间栏还是100%宽度，只不过中间栏的内容通过margin的值显示在中间。

###6.清除浮动和闭合浮动的区别
1. 清除浮动：clear：left | right | both | none；

2. 闭合浮动：使浮动元素闭合，从而减少浮动带来的影响。

###7.position属性
absolute:如果一个元素绝对定位后，其参照物是以离自身最近元素是否设置了相对定位，如果有设置将以离自己最近元素定位，如果没有将往其祖先元素寻找相对定位元素，一直找到html为止。
	
relative:元素设置了relative时，是相对于元素本身位置进行定位。

如果父元素定位为相对定位，子元素为绝对定位后，子元素就位于父窗口左上角。利用这个，可是实现主页-头部导航栏的logo定位。

###8.计算规则
1. 在进行普通流中的块级非替换元素的高度计算时，浮动子元素不参与计算。

2. 在计算生成了 block formatting context 的元素的高度时，其浮动子元素应该参与计算。

3. 两个相邻的普通流中的块框在垂直位置的空白边会发生折叠现象。也就是处于同一个BFC中的两个垂直窗口的margin会重叠。

4. 生成 block formatting context 的元素不会和在流中的子元素发生空白边折叠。
###9.导航ul如何水平摆放
解决方法:对li设置左浮动。	

###10.CSS设置DIV背景色渐变显示
[参考资料](http://jingyan.baidu.com/article/8065f87fed4a3f233124989c.html)

###11.在index.html中，三个article的高度由于内容长度不同，导致高度不一样。
解决方法:设置其父元素的margin-bottom和padding-bottom一样。

###12.如何绘制圆角
- Chrome与Safari 写法例如：-webkit-border-radius:5px;
- Firefox 写法例如:-moz-border-radius:5px;
- IE10以上写法例如：-ms-border-radius:5px;
- Opera写法例如：-o-border-radius:5px;
- 不加前缀是给所有浏览器的border-radius:5px;

###13.text-align的用法
原本以为text-align只是文本对齐，发现其实它除了对使文本对齐外，还可以使img标签等一些内联对象对齐。<br>
text-align：center和margin：0 auto的区别:<br>
- text-align:center 设置文本或img标签等内联对象居中对齐。
- margin：0 auto 设置块元素居中对齐。

###14.font-size:0可以清除display:inline-block元素换行符间隙
[参考资料](http://www.jb51.net/css/100638.html)

