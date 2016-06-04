/* 
* @Author: anchen
* @Date:   2016-06-04 19:17:20
* @Last Modified by:   anchen
* @Last Modified time: 2016-06-04 19:19:26
*/
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    mousewheelControl: true
});
$(".contit dl dd").animate({left: 0}, 600);
var index = 1;
setInterval(function() {
    $(".contit dl dt img").eq(index).fadeIn("600").siblings().fadeOut("600");
    $(".conmain dl dt img").eq(index).fadeIn("600").siblings().fadeOut("600");
    index++;
    if (index >= $(".contit dl dt img").length) {
        index = 0;
    };
}, 2000);
$(".conmain dl dd").animate({left: 0}, 600);
function takePic() {
    var index = 1;
    setInterval(function() {
        $(".pic img").eq(index).fadeIn("2000").css({"z-index": "-1"}).siblings().css({"z-index": "1"}).fadeOut("2000");
        index++;
        if(index == $(".pic img").length) {
            $(".pic img").fadeIn("2000");
        }
    }, 2000);
}takePic();
function sizeShow() {
    var ddBox = $(".swiper-wrapper dl dd");
    ddBox.stop(true).animate({left: "-50%"}, 600).children().eq(1).stop(true).animate({left: "0"}, 1200);
    ddBox.children().eq(2).stop(true).animate({left: "0"}, 1800);
    ddBox.children().eq(3).stop(true).animate({left: "0"}, 2400);
    ddBox.children().eq(4).stop(true).animate({left: "0"}, 3000);
    ddBox.stop(true).animate({left: "-50%"}, 600).children().eq(5).stop(true).animate({left: "0"}, 3600);
    ddBox.children().eq(6).stop(true).animate({left: "0"}, 4200);
    ddBox.children().eq(7).stop(true).animate({left: "0"}, 4800);
    ddBox.children().eq(8).stop(true).animate({left: "0"}, 5200);
    ddBox.children().eq(9).stop(true).animate({left: "0"}, 5600);
    ddBox.children().eq(10).stop(true).animate({left: "0"}, 6200);
    ddBox.children().eq(11).stop(true).animate({left: "0"}, 6800);
    ddBox.children().eq(12).stop(true).animate({left: "0"}, 7400);
}sizeShow();
// 图片渐变  
function imgShow() {
    var index = 1;
    var timer = setInterval(function() {
        if (timer) {
            clearInterval(timer);
        };
        $(".contit dl dt img").eq(index).fadeIn("600").siblings().fadeOut("600");
        $(".conmain dl dt img").eq(index).fadeIn("600").siblings().fadeOut("600");
        index++;
        if (index >= $(".contit dl dt img").length) {
            index = 0;
        };
    }, 2000);
}imgShow();   