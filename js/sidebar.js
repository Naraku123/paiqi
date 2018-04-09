
$(".sidebar").on("mouseenter",function(){
    $(".sidebar li .text").stop().animate({left:-200});
});
$(".sidebar").on("mouseleave",function(){
    $(".sidebar li .text").stop().animate({left:50});
});