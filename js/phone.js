/**
 * Created by toshiba on 2018/1/17.
 */
$(function () {
    var leads = 0;
    var li_img = [{"top": 72, "left": 19, "zIndex": 1},
        {"top": 20, "left": 200, "zIndex": 2},
        {"top": -30, "left": 400, "zIndex": 3}
    ];
    $(".app_left").stop().animate({left: 0, opacity: 1}, 1700);
    $(".app_right").stop().animate({left: 600, opacity: 1}, 1700, function () {
        $(".app_right .phone li").eq(2).stop().animate(li_img[2], 1000);
        $(".app_right .phone li").eq(1).stop().animate(li_img[1], 1000);
        $(".app_right .phone li").eq(0).stop().animate(li_img[0], 1000);
    });
    $(".app_right .phone li").click(function () {
        li_img.push(li_img.shift());
        $(".app_right .phone li").eq(2).stop().animate(li_img[2], 500);
        $(".app_right .phone li").eq(1).stop().animate(li_img[1], 500);
        $(".app_right .phone li").eq(0).stop().animate(li_img[0], 500);
    });
    $(".imgs").mouseenter(function (ev) {
        ev.stopPropagation();
        $(this).find(".phone3").stop().animate({left: 127});
        $(this).find(".phone2").stop().animate({left: 127});
    });
    $(".imgs").mouseleave(function (ev) {
        ev.stopPropagation();
        $(this).find(".phone3").stop().animate({left: 193});
        $(this).find(".phone2").stop().animate({left: 166});
    });
    $(window).scroll(function () {
        if (window.pageYOffset >= 700 && leads == 0) {
            leads = null;
            $("#weChat-m").animate({"bottom": 0}, 800, function () {
                $(this).find(".phone3").stop().animate({left: 193}, 800);
                $(this).find(".phone2").stop().animate({left: 166}, 800);
            })
        }
        if (window.pageYOffset >= 1300) {
            $(".service-feature-1").css({width: "100%"});
        }
        ;
        if (window.pageYOffset >= 1450) {
            $(".service-feature-2").css({width: "100%"});
        }
        ;
        if (window.pageYOffset >= 2070) {
            $(".service-feature-3").css({width: "100%"});
        }
        ;
        if (window.pageYOffset >= 2550) {
            $(".service-feature-4").css({width: "100%"});
        }
        ;
    });

    var items = document.querySelectorAll("#help li i");
    items.forEach(function (v, i) {
        v.style.backgroundImage = "url(../images/a" + (i + 1) + ".png)";
    });

    $("#help li").mouseenter(function (ev) {
        ev.stopPropagation();
        var idx = $(this).index() + 1;
        var w = $(this).width(),
            h = $(this).height(),
            x = (ev.pageX - $(this).position().left - (w / 2) * (w > h ? (h / w) : 1)),
            y = (ev.pageY - $(this).position().top - (h / 2) * (h > w ? (w / h) : 1)),
            d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
        switch (d) {
            case 3 :
                $(this).children().eq(1).css("backgroundImage", "url(../picture/hoverImg" + idx + ".png)").removeClass().addClass("inLeft");
                break;
            case 1 :
                $(this).children().eq(1).css("backgroundImage", "url(../picture/hoverImg" + idx + ".png)").removeClass().addClass("inRight");
                break;
            case 0 :
                $(this).children().eq(1).css("backgroundImage", "url(../picture/hoverImg" + idx + ".png)").removeClass().addClass("inTop");
                break;
            case 2 :
                $(this).children().eq(1).css("backgroundImage", "url(../picture/hoverImg" + idx + ".png)").removeClass().addClass("inBottom");
                break;
        }
    });

    $("#help li").mouseleave(function (ev) {
        ev.stopPropagation();
        var idx = $(this).index() + 1;
        var w = $(this).width(),
            h = $(this).height(),
            x = (ev.pageX - $(this).position().left - (w / 2) * (w > h ? (h / w) : 1)),
            y = (ev.pageY - $(this).position().top - (h / 2) * (h > w ? (w / h) : 1)),
            d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
        switch (d) {
            case 3 :
                $(this).children().eq(1).removeClass().addClass("outLeft");
                break;
            case 1 :
                $(this).children().eq(1).removeClass().addClass("outRight");
                break;
            case 0 :
                $(this).children().eq(1).removeClass().addClass("outTop");
                break;
            case 2 :
                $(this).children().eq(1).removeClass().addClass("outBottom");
                break;
        }
    });

    var arr_1 = ["toPlace1", "toPlace2", "toPlace3", "toPlace4"];
    var arr_2 = ["place1", "place2", "place3", "place4"];
    var lis_arr = $(".mobile-case-show .imgbox li");
    var hidBox = $("#hidbox");
    var txtBox = lis_arr.find("div:last");
    var myNum = 1;
    lis_arr.click(function () {
        if (myNum === 1) {
            for (var i = 0; i < lis_arr.length; i++) {
                lis_arr[i].className = arr_1[i];
            }
            txtBox.hide(400, function () {
                lis_arr.css("border", "10px solid #fff");
            });
            hidBox.show(1000);
            $("#closebox").show();
            myNum = null;
        } else {
            var target = -$(this).index() * 1260;
            hidBox.animate({left: target}, 800);
        }
    });
    $("#closebox").click(function () {
        for (var i = 0; i < lis_arr.length; i++) {
            lis_arr[i].className = arr_2[i];
        }
        $("#closebox").hide();
        hidBox.hide(1000);
        txtBox.show(1000);
        myNum = 1
    });

    var num$ = 0;
    $(".wxAppBox1").click(function (e) {
        e.stopPropagation();
        if (num$ > 3) {
            num$ = 0;
        }
        num$++;
        var bg = "url(../picture/Screenshot" + num$ + ".png)";
        var div1 = $("<div class='tp'></div>");
        div1.css("background-image", bg);
        var div2 = $("<div class='bm'></div>");
        div2.css("background-image", bg);
        $(this).append(div1);
        $(this).append(div2);
        $(this).children(".bm").stop().animate({opacity: 1});
        $(this).children(".tp").css({
            transform: "rotateX(0deg)"
        }).stop().animate({opacity: 1});
        if (num$ > 2) {
            $(this).children().eq(0).remove();
            $(this).children().eq(0).remove();
        }
    });

    var oldColor;

    $("p.tgColor").on("mouseenter", function () {
        oldColor = $(this).css("color");
        if (this.querySelector("em")) {
        } else {
            var content = $(this).text();
            $(this).text("");
            for (var i = 0; i < content.length; i++) {
                $("<em>" + content[i] + "</em>").appendTo(this);
            }
        }
    });

    $("p.tgColor").on("mouseenter", "em", function () {
        $(this).css("color", "gold").prevAll().css("color", "gold");
        $(this).nextAll().css("color", "");
    });

    $("p.tgColor").on("mouseleave", function () {
        $(this).children().css("color", "");
    });

var str1 = [
    "建设高端网站目的就是吸引潜在客户户",
    "高端设计服务的内容要针对用户心理理",
    "上海高端网站建设哪家公司比较靠谱谱"
];
var cont1 = 0;
    var over;
    $(".list-box li").each(function (i) {
        $(this).width(420).css({
            backgroundImage: "url(../picture/pecccccc" + (i +1) + ".jpg)",
            opacity:0.3
    });
});

$(".list-box li").on("mouseenter", function () {
    var idx = $(this).index();
    $(this).css("opacity",1).stop().animate({width: 660}).siblings().css("opacity",0.3).stop().animate({width: 300});
    var that = this;
 over = setInterval(function(){
      $(that).children()[0].innerText += str1[idx][cont1];
      cont1++;
      if(cont1 >= str1[idx].length - 1){
          clearInterval(over);
          $(that).children("a").fadeIn(1000);
      }
  },100)
});
$(".list-box li").on("mouseleave", function () {
    $(".list-box li").css("opacity",0.3).stop().animate({width: 420});
    $(this).children("h3").text("");
    $(this).children("a").fadeOut();
    clearInterval(over);
    cont1 = 0;
})

})
;
