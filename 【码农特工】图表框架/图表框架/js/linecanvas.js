/* 
* @Author: dchen
* @Date:   2016-05-28 
* @Last Modified by:   anchen
* @Last Modified time: 2016-05-28
*/
// 可以根据需要更改data数据，在页面显示折线
$(document).ready(function(){
    var data = [100,62,104,200,150,250, 300];   
    // 获取上下文
    var canvasText = document.getElementById("cvs");
    var context = canvasText.getContext("2d");
    //边框
    var cols = data.length + 1;//边框竖线个数
    var rows = data.length + 1;//边框行线个数
    cellHeight = canvasText.height / rows;//单元格高度
    cellWidth = canvasText.width / cols;//单元格宽度
    context.lineWidth = 1;
    context.strokeStyle = "#a00";
    //画横线
    context.beginPath();
    for(var i = 0; i <= cols; i++) {
        var x = i * cellWidth;
        context.moveTo(x, 0);
        context.lineTo(x, canvasText.height);
    }
    
    // 画竖线
    for (var i = 0; i <= rows; i++) {
        var y = i * cellHeight;
        context.moveTo(0, y);
        context.lineTo(canvasText.width, y); 
    }
    context.lineWidth = 1;
    context.strokeStyle = "#900";
    context.stroke();
    // 数据换算为坐标
    var maxs = 0;
    for(var i = 0; i < data.length; i++) {
        if (data[i] > maxs) {
            maxs = data[i];//数组中的最大值
        }
    }
    maxs = maxs * 1.1;
    var points = [];
    for (var i = 0; i < data.length; i++) {
        var sum = data[i];
        var pointsX = cellWidth * (i + 1);
        var pointsY = canvasText.height - canvasText.height * (sum / maxs);
        points.push({"x" : pointsX, "y" : pointsY});
    }
    // 绘制折线
    context.beginPath();
    context.moveTo(points[0].x, points[0].y);
    for (var i = 0; i < points.length; i++) {
        context.lineTo(points[i].x, points[i].y);
    };
    context.strokeStyle = "red";
    context.stroke();
    //绘制折线点
    for(var i in points) {
        context.beginPath();
        context.arc(points[i].x, points[i].y, 3, 0, 2 * Math.PI);//显示圆点 
        context.fillStyle = "#f00";
        context.fill();
    } 
    // 鼠标移动点附近显示数据
    $("canvas").mousemove(function(evt) {
        var evt = event || window.event;
        for (var i = 0; i < data.length; i++) {
            if ((2 * (i + 1) * cellWidth - 35) < evt.clientX && evt.clientX < (2 * (i + 1) * cellWidth + 10)) {
                context.fillText(data[i], points[i].x + 10, points[i].y - 5); //显示数据                       
            }
        }
    });  
});