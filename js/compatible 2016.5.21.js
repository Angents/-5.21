/*
* [prevent 阻止默认事件]
* @param {[字符串]} event [规定阻止哪个事件的默认动作。这个 event 参数来自事件绑定函数。]
* @data 2016.5.11
* @author F
* @demo 
xxx.onmousedown = function(event){
	var evt = event || window.event; prevent(evt);
}
*/
function prevent(event) {
    var evt = event || window.event;
	if(event.preventDefault) {
		event.preventDefault();//谷歌火狐
	}else {
		event.returnValue = false;//IE
	}
	return event;
}

/*
* [differentRandom 生成不重复的随机数]
* @param {[字符串]} len [要产生的随机数个数]
* @param {[字符串]} x,y [控制范围 y ~ x+y-1(Math.random()*x的范围从0-1包括0)]
* @data 2016.5.11
* @author F
* @demo
var arr = differentRandom(5, 20, 5);生成5个，从5到24的随机数
*/
function differentRandom(len, x, y) {
	var arr = [];
	var num;
	for (var i = 0; i < len; i++) {
		num = Math.floor(Math.random() * x + y);
		for (var j = 0; j < arr.length; j++) {
			if(num == arr[j]) {
				num = Math.floor(Math.random() * x + y);
				j = -1;
			}
		}
		arr.push(num);
	}
	return arr;
}

/*
* [getStyle 获取完成样式(获取元素已书写的样式)]
* @param {[字符串]} eleObj [获取标签的变量]
* @param {[字符串（"属性名"）]} property [标签样式属性值]
* @data 2016.5.11
* @author F
* demo
var box = document.getElementById("box");
var boxWidth = getStyle(box, "width");
*/
// 功能：获取渲染后标签的样式，ele是标签，prop是标签的属性值
function getStyle(ele, prop) {
	var proVal = 0;
	if(!document.defaultView) {
		proVal = ele.currentStyle[prop];//IE直接在window下获取
	}else {
		proVal = document.defaultView.getComputedStyle(ele)[prop];//(.defaultView)兼容FF
	}
	return proVal;
}

// 获取鼠标位置
/*
* [getBoundingClientRect 获取页面元素的位置]
* @param  {[obj]} ele [目标元素]
* @return {[obj]}     [对象]
* @author F
* demo 
// 调用方法
getBoundingClientRect(outerEle);
*/
function getBoundingClientRect(ele) {
  var top = document.documentElement.clientTop, 
      left = document.documentElement.clientLeft,
      rect = ele.getBoundingClientRect();
  // document.documentElement.clientTop/Left在IE下获取到的值为2，非IE获取到的值为0；
  // 这样保证在各个浏览器的效果都是一致的
  // 分别减去多出来的2px
  return {
      top: rect.top - top,
      right: rect.right - left,
      bottom: rect.bottom - top,
      left: rect.left - left
  }
}
/*
 * [handlder DOM 2级事件绑定IE8-兼容处理]
 * @ ele表示获取的标签；
 * @ evtName表示事件，如click；
 * @ fn表示调用的函数以及方法；如function evt() {};
 * @ demo handler(divs[0], click, show());
*/
function handler(ele, evtName, fn) {
	if(document.attachEvent) {
		ele.attachEvent("on" + evtName, fn);
	} else if(document.addEventListener) {
		ele.addEventListener(evtName, fn, false);
	}
}

/*
 * [removeEvt  DOM 2级移出函数兼容问题，点击一次实现效果，点击第二次无效。]
 * @ ele表示获取的标签；
 * @ evtName表示事件，如click;
 * @ fn表示调用的函数以及方法;
 * @ demo removeEvt(div[0], click, show());
*/
function removeEvt(ele, evtName, fn) {
	if(removeEventListener) {
		ele.removeEventListener(evtName, fn, false);
	} else {
		ele.detachEvent("on" + evtName, fn);
	}
}

/* 
*[targetEvt 事件目标对象的获取，常用于事件委托]
@ event [规定阻止哪个事件的默认动作。这个 event 参数来自事件绑定函数。] 
*/
function targetEvt(evt) {
	var evt = evt || window.event;
	// 获取目标对象的兼容处理
	var targetEle = evt.target || evt.scrElement;
	return targetEle;
}

/* [stopEvt 取消冒泡事件兼容,防止父级对应事件的发生]
@ evt [事件对象]
*/
function stopEvt(evt) {
	var evt = evt || window.event;
	if(evt.stopPropagation) {
		evt.stopPropagation;
	} else {
		evt.cancelBubble = true;
	}
}

//生成随机颜色rgb();
function randomColor() {
	var num1 = Math.floor(Math.random() * 256);
	var num2 = Math.floor(Math.random() * 256);
	var num3 = Math.floor(Math.random() * 256);
	var str = "rgb(" + num1 + "," + num2 + "," + num3 + ")";
	return str;
}
/*
 * [getEleByClass 通过类名获取标签]
 * @param  {[字符串]} className [要获取标签的类名]
 * @param  {[字符串]} tagName   [要获取标签的类名]
 * @return   {[数组]}           [获取标签的结果]
 * @date  2015.01.07
 * @demo var demo = getEleByClass("con", "div");用法
 */
function getEleByClass(className, elemt) { //利用形参
	var allEle = document.getElementsByTagName(elemt);
	var arr = []; //声明一个空数组
	var len = allEle.length;
	for(var i = 0; i < len; i++) {
		if(allEle[i].className == className) {
			arr.push(allEle[i]); //往数组里添加内容。
		} 
	}
	return arr;
}
