/* 
* @Author: anchen
* @Date:   2016-05-28 09:29:25
* @Last Modified by:   anchen
* @Last Modified time: 2016-05-28 16:21:12
*/
//可以据需要更改data和colors中的数据，实现数据的饼状比例展示。
var data=[
    {name: "第一组", num: 49},
    {name: "第二组", num: 56},
    {name: "第三组", num: 89},
    {name: "第四组", num: 20},
    {name: "第五组", num: 34},
    {name: "第六组", num: 67},
    {name: "第七组", num: 12}
    ];
var colors=[
    "#fe0003",
    "#fe9102",
    "#ff0",
    "#009f04",
    "#00c4bd",
    "#3a0299",
    "#8e018e"
    ];
var sum = 0;
var lastsum=0;
var timer;
var timer1;
var chartStartAngle = -.5 * Math.PI;//转换起始从12点开始
window.onload = function(){
    var canvas = document.getElementById("cav");
    if(cav == null) {
        return;
    }
    ctx = canvas.getContext("2d");
    sumData();//总数
    timer = setInterval(function(){
        drawChart(200);
    }, 200);
    timer1 = setTimeout(drawitem, 1500);
}

//求数据总和
function sumData(){
    for(var i = 0; i < data.length; i++){
        sum += data[i].num;
    };
}
 //上一个结束值是下一个的起始值，每次用都重置
function lastSum(i){
    lastsum = 0;
    for (var j = 0; j < i; j++) {
        lastsum += data[j].num;
    };
}
 //画饼图
function drawChart(radius){
    chartStartAngle++;
    if(chartStartAngle >= Math.PI * 3 / 2) {
        clearInterval(timer);
    }
    for (var i = 0; i < data.length;i++) {
        fillcolors = colors[i];
        lastSum(i);
        var startAngle = (Math.PI * 2) * (lastsum / sum) + chartStartAngle;//起始弧度
        lastSum(i + 1);
        var endAngle = (Math.PI * 2) * (lastsum / sum) + chartStartAngle;//结束弧度
        ctx.save();//每次都保存画的图
        ctx.fillStyle = this.colors[i];//用当前的this的colors数组中的颜色填充
        ctx.beginPath();
        ctx.moveTo(300, 200);//从哪里开始画
        ctx.arc(300, 200, radius, startAngle, endAngle, false);//画扇形，300是圆心横坐标、200是圆心纵坐标，startAngle是开始的角度，endAngle是结束的角度，false是顺时针转
        ctx.closePath();//闭合路径
        ctx.fill();
        ctx.restore(); 
    };
}
function drawitem() {
    //绘制图例
    for (var i = 0; i < data.length;i++) {
        ctx.fillStyle = colors[i];
        ctx.fillRect(650, 50 + 18 * i, 16,16);
        ctx.fillStyle = colors[i];
        ctx.fillText(data[i].name, 670, 62 + 18 * i);
        ctx.fillText(data[i].num, 720, 62 + 18 * i);
        ctx.fillText((data[i].num / sum).toFixed(2) * 100 + "%", 750, 62 + 18 * i);
    }
}
