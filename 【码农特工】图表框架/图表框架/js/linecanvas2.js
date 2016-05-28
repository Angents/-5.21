/* 
* @Author: dchen
* @Date:   2016-05-28 
* @Last Modified by:   anchen
* @Last Modified time: 2016-05-28
*/
// 可以根据需要更改data数据，在页面显示不同的折线
$(document).ready(function(){
    var data = [10,122,104,200,150,250];   
    // 获取上下文
    var canvasText = document.getElementById("cvs");
    var context = canvasText.getContext("2d");
    //边框
    var cols = data.length + 1;
    var rows = data.length + 1;
    cellHeight = canvasText.height / rows;
    cellWidth = canvasText.width / cols;
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
            maxs = data[i];
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
        context.arc(points[i].x, points[i].y, 3, 0, 2 * Math.PI); 
        context.fillStyle = "#f00";
        context.fill();
    } 
    // 鼠标移动点附近显示数据
    $("canvas").mousemove(function(evt) {
        var evt = event || window.event;
        if ((2 * cellWidth - 5) < evt.clientX && parseInt(evt.clientX) < (2 * cellWidth + 15)) {
            var px = data[0];
            context.fillText(px, points[0].x + 10, points[0].y - 5);                       
        }
        if ((4 * cellWidth - 5) < evt.clientX && parseInt(evt.clientX) < (4 * cellWidth + 5)) {
            var px = data[1];
            context.fillText(px, points[1].x + 10, points[1].y - 5);
        };
        if (230 < evt.clientX && evt.clientX < 245) {
            var px = data[2];
            context.fillText(px, points[2].x + 10, points[2].y - 5);
        };
        if (300 < evt.clientX && evt.clientX < 320) {
            var px = data[3];
            context.fillText(px, points[3].x + 10, points[3].y - 5);
        };
        if (375 < evt.clientX && evt.clientX < 390) {
            var px = data[4];
            context.fillText(px, points[4].x + 10, points[4].y - 5);
        };
        if (445 < evt.clientX && evt.clientX < 465) {
            var px = data[5];
            context.fillText(px, points[5].x + 10, points[5].y - 5);
        };
    });  
});