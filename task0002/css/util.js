// /*task2.1*/
// var a =[];
// var b = null;
// var c = function(){};


// function test() {
// 	// body...
// 	return 0;
// }
// //判断arr是否为一个数组，返回一个bool值
// function isArray(arr) {
//     if(arr instanceof Array){
//     	alert(arr instanceof Array);

//     }


// }
// //判断fn是否为一个函数，返回bool值
// function isFunction(fn){
// 	// alert(typeof fn == 'function');
//     alert(fn instanceof Function);

// }
// isArray(a);
// isArray(b);
// isFunction(c);



/*task2.2*/
// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
// function cloneObject(src) {
//    var result;
//    var oClass=isClass(src);
//    if(oClass==="Object"){
//     console.log("src is Object1");
//     result={};
// }else if(oClass==="Array"){
//  console.log("src is Array");
//  result=[];
// }else{
//  console.log("src is other");
//  return src;
// }
// for(var key  in src){
//     var copy=src[key];
//     console.log("After entering for,src["+key+"] is "+src[key]);
//     if(isClass(copy)=="Object"){
//         console.log("now "+ src[key]+ " is Object");
//            result[key]=arguments.callee(copy);//递归调用
//        }else if(isClass(copy)=="Array"){
//          console.log("now "+ src[key]+ " is Array");
//          result[key]=arguments.callee(copy);
//      }else{
//         result[key]=src[key];
//     }
// }
//    return result;
// }
// function isClass(o){
//     if(o===null) return "Null";
//     if(o===undefined) return "Undefined";
//     return Object.prototype.toString.call(o).slice(8,-1);//slice截取字符串['object XXXX'],把XXXX截出来。

// }

// 测试用例：
// var srcObj = {
//     a: 1,
//     b: {
//         b1: ["hello", "hi"],
//         b2: "JavaScript"
//     }
// };
// var abObj = srcObj;
// var tarObj = cloneObject(srcObj);

// srcObj.a = 2;
// srcObj.b.b1[0] = "Hello";

// console.log(abObj.a);
// console.log(abObj.b.b1[0]);

// console.log(tarObj.a);      // 1
// console.log(tarObj.b.b1[0]);    // "hello"


/*task2.3*/
// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
// function uniqArray(arr) {
    // your imvar plement
    // var n = []; //一个新的临时数组
    // for(var i = 0; i < arr.length; i++) //遍历当前数组
    // {
    //     //如果当前数组的第i已经保存进了临时数组，那么跳过，
    //     //否则把当前项push到临时数组里面
    //     if (n.indexOf(arr[i]) == -1) {
    //         n.push(arr[i]);
    //     }
    // }
    // return n;

    //方法二：
    // var n = [arr[0]]; //结果数组
    // for(var i = 1; i < arr.length; i++) //从第二项开始遍历
    // {
    //     //如果当前数组的第i项在当前数组中第一次出现的位置不是i，
    //     //那么表示第i项是重复的，忽略掉。否则存入结果数组
    //     if (arr.indexOf(arr[i]) == i) {
    //         n.push(arr[i]);
    //     }
    // }
    // return n;
    //方法三
    //1.创建一个新的数组存放结果
    //2.创建一个空对象
    //3.or循环时，每次取出一个元素与对象进行对比，如果这个元素不重复，则把它存放到结果数组中，
    //同时把这个元素的内容作为对象的一个属性，并赋值为1，存入到第2步建立的对象中。
    //至于如何对比，就是每次从原数组中取出一个元素，然后到对象中去访问这个属性，如果能访问到值，则说明重复。
//     var res = [];
//     var json = {};
//     for(var i = 0; i < arr.length; i++){
//       if(!json[arr[i]]){
//          res.push(arr[i]);
//          json[arr[i]] = 1;
//      }
//  }
//  return res;
// }

// // 使用示例
// var a = [1, 3, 5, 7, 5, 3];
// var b = uniqArray(a);
// console.log(b); // [1, 3, 5, 7]

//实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
// function simpleTrim(str) {
//     // your implement
//  function isEmpty(c) {
//         return /\s/.test(c);
//     }

//     for (var i = 0, l = str.length; i < l; i++) {
//         if (!isEmpty(str.charAt(i))) {
//             break;
//         }
//     }

//     for (var j = str.length; j > 0; j--) {
//         if (!isEmpty(str.charAt(j - 1))) {
//             break;
//         }
//     }

//     if (i > j) {
//         return '';
//     }

//     return str.substring(i, j);
// }
// var str = '   hi!  ';
// str = simpleTrim(str);
// console.log(str); // 'hi!'

// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
// function trim(str) {
//   your implement
//  var result ="";
//  result = str.replace(/^s+|s+$/g,""); //使用正则进行字符串替换
//  return result;
// }

// // 使用示例
// var str = '   hi!  ';
// str = trim(str);
// console.log(str); // 'hi!'

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
// function each(arr, fn) {
//      for (var i = 0, l = arr.length; i < l; i++) {
//         fn(arr[i], i);
//     }

// }

// 其中fn函数可以接受两个参数：item和index

// 使用示例
// var arr = ['java', 'c', 'php', 'html'];
// function output(item) {
//     console.log(item)
// }
// each(arr, output);  // java, c, php, html
//获取一个对象里面第一层元素的数量，返回一个整数
// function getObjectLength(obj) {


//   var count = 0;
//   for (var i in obj) {
//    if (obj.hasOwnProperty(i)) {
//     count++;
// }
// }
//  return count;
// }


// 使用示例
// var obj = {
//     a: 1,
//     b: 2,
//     c: {
//         c1: 3,
//         c2: 4
//     }
// };
// console.log(getObjectLength(obj)); // 3


//学习正则表达式，在util.js完成以下代码
// 判断是否为邮箱地址
// function isEmail(emailStr) {
//     // your implement
//     var result;
//     var checkEamil = /^[0-9a-zA-Z]+@{1}[0-9a-zA-Z]+(\.com){1}$/;
//     result = checkEamil.test(emailStr);
//     return result;
// }

// 判断是否为手机号
// function isMobilePhone(phone) {
//     var result;
//     var checkPhone = /^[0-9]{11}$/;
//     result = checkPhone.test(phone);
//     return result;
// }
// console.log(isEmail("chaos2171053@gmail.com"));
// console.log(isEmail("14:33"));
// console.log(isMobilePhone("12345678910"));
// console.log(isMobilePhone("12345678910789789798"));

/*task3.1*/