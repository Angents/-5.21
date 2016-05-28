/* 
* @Author: dchen
* @Date:   2016-05-28 
* @Last Modified by:   anchen
* @Last Modified time: 2016-05-28 
*/
// 可以根据需要更改differentRandom(len, x, y)的len获取随机个数，在页面随机显示各点
$(document).ready(function(){
    $(document).ready(function(){
        var data = differentRandom(9, 300, 0);
        // 获取上下文
        var canvasText = document.getElementById("cavs");
        var context = canvasText.getContext("2d");
        //边框
        var cols = data.length + 1;
        var rows = data.length + 1;
        cellHeight = canvasText.height / rows;//一个单元格宽度
        cellWidth = canvasText.width / cols;//一个单元格高度
        context.lineWidth = 1;
        context.strokeStyle = "#aaa";
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
        context.strokeStyle = "#9ff";
        context.stroke();
        // 数据换算为坐标
        var maxs = 0;
        for(var i = 0; i < data.length; i++) {
            if (data[i] > maxs) {
                maxs = data[i];//数组数据中的最大值
            }
        }
        maxs = maxs * 1.1;//数据较大时不会在边框边缘，使数字超出被隐藏
        var points = [];
        for (var i = 0; i < data.length; i++) {
            var sum = data[i];
            var pointsX = cellWidth * (i + 1);
            var pointsY = canvasText.height - canvasText.height * (sum / maxs);
            points.push({"x" : pointsX, "y" : pointsY});
        }
        //绘制折线点
        for(var i in points) {
            context.beginPath();
            context.arc(points[i].x, points[i].y, 2, 0, 2 * Math.PI);//折线点
            context.fillStyle = "#f00";
            context.fillText(data[i], points[i].x + 2, points[i].y - 2);//显示数据 
            context.fill();             
            };   
        // 随机数
        /*
         *[differentRandom生成不重复的随机数]
         *@param {[字符串]} len [要产生的随机个数]
         *@param {[字符串]} x, y [控制范围 y ~ x + y -1]
         *@date 2016.05.04
         *@author JH
         *@demo var arr = differentRandom(5, 20, 5);
         */
        function differentRandom(len, x, y) {
            var arr = [];
            var num;
            for (var i = 0; i < len; i++) {
                num = Math.floor(Math.random() * x + y);
                for (var j = 0; j < arr.length; j++) {
                    if (num == arr[j]) {
                        num = Math.floor(Math.random() * x + y);
                        j = -1;
                    }
                }
                arr.push(num);
            }
            return arr;
        }
    });
});