// 打地鼠游戏功能描述
/* 
在页面中随机出现一只地鼠，若鼠标击中这只地鼠，地鼠消失，分数增加；
设置关卡，指定每个关卡需得多少分可过关
*/
var con = document.getElementById("con");
var imgs = con.getElementsByTagName("img");
var score = document.getElementById("score");
var rank = document.getElementById("rank");
var only = document.getElementById("only");
var stop = document.getElementById("stop");
var start = document.getElementById("start");
var end = document.getElementById("end");//获取标签
var ranNum;//声明一个随机数
var count = 0;//计算得分
var second = 0;//倒计时秒数
var time = null;//计时器调用函数
var timer = null; //倒计时计时器
var nowRank = 0; //关卡设置
var arr = [5, 11, 18, 26]; //过关需要点击的地鼠个数
// var boxNum = arr[nowRank];
// 随机出现一只地鼠，若鼠标击中该地鼠，地鼠消失，分数增加，出现下一只地鼠
function up() {
	if (ranNum >= 0) {
		imgs[ranNum].style.display = "none";
	}
	ranNum = Math.floor(Math.random() * imgs.length);
	imgs[ranNum].style.display = "block";
	rank.value = nowRank + 1;	
	for (var i = 0; i < imgs.length; i++) {
		imgs[i].onclick = function(i) {
			this.style.display = "none";
			count++;
			score.value = count;
		}			
		if (count >= arr[nowRank]) {
			nowRank++;
			rank.value = nowRank + 1;			
			if (nowRank == arr.length) {
				clearInterval(time);
				clearInterval(timer);
				alert("您通关了");
			} else {
				alert("进入下一关");
				second = 20;
			}				
		}	
	}
}
// 倒计时计数
function clock() {
	second--;
	only.value = second;	
	if (second <= 0) {
		clearInterval(time);
		clearInterval(timer);
		alert("时间到了！你得了" + count + "分！");
	}	
}
//开始按钮开始计时器调用函数
start.onclick = function() {
	count = 0;
	score.value = count;
	second = 20;
	clearInterval(time);
	clearInterval(timer);
	time = setInterval(up, 1200);
	timer = setInterval(clock, 1000);	
}
// 暂停按钮
stop.onclick = function() {
	clearInterval(time);
	clearInterval(timer);
	if (confirm("敢不敢继续啊？")) {
		time = setInterval(up, 1200);
		timer = setInterval(clock, 1000);
	} 
}
//停止
end.onclick = function() {
	clearInterval(time);
	clearInterval(timer);
}
// 修改鼠标样式
con.onmousemove = function () {
    con.style.cursor = "url(images/cursor.png),auto";
}
