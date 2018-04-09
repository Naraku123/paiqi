/**
 * Created by toshiba on 2018/1/21.
 */

;$(function(){
    var num = 0;
    $(".esb_case_txt").animate({top:0,opacity:1},1000,function(){
        $(".dimo").animate({top:0,opacity:1},500)
    });
    $(".page > li").click(function(){
        var idx =  $(this).index();
       if(idx < 3){
           $(".page > li span").attr("class","");
           $(this).find("span").attr("class","cur");
           $(".dimo > li").eq(idx).show().siblings().hide();
           num = idx;
       }else{
           num++;
           if(num === 3){
               num = 0;
           }
           $(".page > li span").attr("class","");
           $(".dimo > li").eq(num).show().siblings().hide();
           $(".page > li span").eq(num).attr("class","cur");
        }
    });
    $(window).scroll(function(){
       if(window.pageYOffset >= 500){
           $(".box1").animate({top:0,opacity:1},600,function(){
               $(".box2").animate({top:0,opacity:1},600,function(){
                   $(".box3").animate({top:0,opacity:1},600)
               })
           })
       }
        if(window.pageYOffset >= 1200){
            $(".box4").animate({top:0,opacity:1},600,function(){
                $(".box5").animate({top:0,opacity:1},600,function(){
                    $(".box6").animate({top:0,opacity:1},600)
                })
            })
        }

    });

    $("#esb_case_lab li").mouseenter(function(){
        $("#bgBox2").stop().animate({
            left:this.offsetLeft
        })
    });
    $("#esb_case_lab li").mouseleave(function(){
        $("#bgBox2").stop().animate({
            left: 230
        })
    });


});
