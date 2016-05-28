var attr = new Array();
var sum = 0;
$(".press input").eq(1).click(function(event) {
    attr = $("#num").prop("value").split(","); 
    for (var i = 0; i < 6; i++) {
        $(".wrap div").eq(i).html(attr[i]);
        sum += attr[i];
    };
})
$(".wrap div").hover(function() {
    $(this).css({
        "opacity": 0.5,
    })
}, function() {
    $(this).css({
        "opacity": 1
    })
}) 