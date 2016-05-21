var imgs = document.getElementById("con").getElementsByTagName("img");
var ranNum = Math.floor(Math.random() * imgs.length);
var score = document.getElementById("score");
var only = document.getElementById("only");
var con = document.getElementById("con");
var time = null;
var count = 0;
// var second = 10;
//关卡设置
var nowRank = 0;
var arr = [5, 10, 4];
var second = arr[nowRank];
// 随机出现一只地鼠，若鼠标击中该地鼠，地鼠消失，分数增加，出现下一只地鼠
function up() {
	imgs[ranNum].style.display = "none";
	ranNum = Math.floor(Math.random() * imgs.length);
	imgs[ranNum].style.display = "block";
	for (var i = 0; i < imgs.length; i++) {
		if (i == ranNum) {
			imgs[i].onclick = function(i) {
				imgs[ranNum].style.display = "none";
				count++;
			}	
			score.value = count;
		}	
	}
}
// 倒计时计数
var timer = setInterval(function() {
	second--;
	only.value = second;
	if (second <= 0) {
		if (count >= 1) {
			count = 0;
			nowRank++;
			second = arr[nowRank];
			if (nowRank == arr.length) {
				alert("您已经通关了");
				clearInterval(timer);
				second = 0;
			} else {
				alert("进入下一关");
			}
		} else {
			clearInterval(time);
			clearInterval(timer);
			alert("时间到！");
		}
	}
}, 1000);
// 计时器调用函数
time = setInterval(function() {		
	up();
}, 1000);
// 修改鼠标样式
con.onmousemove = function () {
    con.style.cursor = "url(images/cursor.png),auto";
}	
// <audio autoplay="autoplay"  loop="loop" id="bgm">
// 	<source src="audio/bgm.wav" type="audio/wav"/ id="bgm">
// </audio>
