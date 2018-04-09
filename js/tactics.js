/**
 * Created by Administrator on 2018/1/31 0031.
 */

$(function () {
    $(".content-banner-box>.img1").addClass("animate001");
    $(".content-banner-box>.text-content").addClass("animate002");
    $(".system-box>.system-text").addClass("animate003");
    $(".pasted-box").addClass("animate004");
    $(".pasted-black").addClass("animate005");
    $(".brand-idea-box>.text").addClass("animate003");
    $(".brand-idea-box>.grids").addClass("animate003");
    $(".service-integrate-box>.text").addClass("animate003");
    $(".service-integrate-box li").addClass("animate003");
    $(".service-integrate-box .text-bottom").addClass("animate003");
    $(".soft-service-box .soft-text").addClass("animate003");
    $(".soft-service-box .nav").addClass("animate003");
    $(".our-idea-box .text").addClass("animate003");
    $(".our-idea-box li").addClass("animate003");

    $(window).on("load", function () {
        $(".content-banner-box>.img1").addClass("noneanimate001");
        setTimeout(function () {
            $(".content-banner-box>.text-content").addClass("noneanimate001");
        }, 500);
    });

    $(window).on("scroll", function () {
        var scrollTop = $(this).scrollTop();
        if (scrollTop >= 500) {
            $(".system-box>.system-text").addClass("noneanimate001");
        }
        if (scrollTop >= 1300) {
            $(".pasted-box").addClass("noneanimate001");
            setTimeout(function () {
                $(".pasted-black").addClass("noneanimate001");
            }, 1000);
        }
        if (scrollTop >= 2000) {
            $(".brand-idea-box>.text").addClass("noneanimate001");

        }
        if (scrollTop >= 2200) {
            $(".brand-idea-box>.grids").addClass("noneanimate001");
        }
        if (scrollTop >= 3000) {
            $(".service-integrate-box>.text").addClass("noneanimate001");
            setTimeout(function () {
                $(".service-integrate-box li").eq(0).addClass("noneanimate001");
            }, 500);
            setTimeout(function () {
                $(".service-integrate-box li").eq(1).addClass("noneanimate001");
            }, 1000);
            setTimeout(function () {
                $(".service-integrate-box li").eq(2).addClass("noneanimate001");
            }, 1500);
            setTimeout(function () {
                $(".service-integrate-box .text-bottom").addClass("noneanimate001");
            }, 2000);
        }
        if (scrollTop >= 3700) {
            $(".soft-service-box .soft-text").addClass("noneanimate001");
            $(".soft-service-box .nav").addClass("noneanimate001");
        }
        if (scrollTop >= 4100) {
            $(".our-idea-box .text").addClass("noneanimate001");
            setTimeout(function () {
                $(".our-idea-box li").eq(0).addClass("noneanimate001");
            }, 500);
            setTimeout(function () {
                $(".our-idea-box li").eq(1).addClass("noneanimate001");
            }, 1000);
            setTimeout(function () {
                $(".our-idea-box li").eq(2).addClass("noneanimate001");
            }, 1500);
        }
    });
    var flag = true;
    $(".pasted-box>.pasted-black").on("mouseenter", function () {
        if (flag) {
            flag = false;
            $(this).css("animation", "pasted-black-ani .8s linear ");
            var that = this;
            setTimeout(function () {
                $(that).css("animation", "none");
            }, 800);
        }
    });
    $(".pasted-box >.pasted-black").on("mouseleave", function () {
        setTimeout(function(){
            flag = true;
        },1000)
    });
    $(".brand-idea-box > .grids li").on("mouseenter",function(){
        if(flag) {
            flag = false;
            $(this).stop().animate({width: 800, height: 400}, "linear").css("padding", "128px 0 0 120px");
            $(this).siblings().stop().animate({width: 460, height: 240}, "linear").css("padding", "56px 0 0 53px");
        }
    });
    $(".brand-idea-box> .grids li").on("mouseleave",function(){
        flag = true;
        $(this).stop().animate({width:630,height:320},"linear").css("padding","85px 0 0 80px");
        $(this).siblings().stop().animate({width:630,height:320},"linear").css("padding","85px 0 0 80px");
    });
    $(".service-integrate-box li img").on("mouseenter",function(){
        $(this).removeClass("animate006");
        $(this).removeClass("noneanimate002");
        $(this).addClass("animate006");
    });
    $(".service-integrate-box li img").on("mouseleave",function(){
        $(this).addClass("noneanimate002");
    });
    var arr001 = ["slide001","slide002","slide003","slide004","slide005","slide006"];
    var $li001 = $(".way-box li");
    setInterval(function(){
        var last = arr001.pop();
        arr001.unshift(last);
        for(var i=0;i<$li001.length;i++){
            $li001.eq(i).removeClass().addClass(arr001[i]);
        }
    },4000)


});