var attr1 = new Array();
var attr2 = new Array();
$(".inp input").eq(2).click(function(event) {
    attr1 = $("#one").prop("value").split(",");
    attr2 = $("#two").prop("value").split(",");
    $("#spr div").eq(0).animate({"height": attr1[0] / 100 * 250 + "px"}, 500).siblings("div").animate({"height": attr2[0] / 100 * 250 + "px"}, 500);
    $("#sum div").eq(0).animate({"height": attr1[1] / 100 * 250 + "px"}, 500).siblings("div").animate({"height": attr2[1] / 100 * 250 + "px"}, 500);
    $("#aut div").eq(0).animate({"height": attr1[2] / 100 * 250 + "px"}, 500).siblings("div").animate({"height": attr2[2] / 100 * 250 + "px"}, 500);
    $("#win div").eq(0).animate({"height": attr1[3] / 100 * 250 + "px"}, 500).siblings("div").animate({"height": attr2[3] / 100 * 250 + "px"}, 500);
});