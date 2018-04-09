/**
 *
 */

 $(function () {

     $(window).scroll(function () {

        var top = $(this).scrollTop();

         if(top>500) {
             $(".main-point-left img").animate({top:"0px"},500, "linear").show(1000);
             $(".main-point-right").animate({right:"0px"},500, "linear" ).show(1000)
             }

         if(top>1400) {
             $(".Team-culture-left").show(1400).slideDown(1400);
                 $(".Team-culture-right").show(1400).slideDown(1400);


         }
         if(top>2056) {
             $(".seek-l-l").show(1400).slideDown(1400);
                 $(".seek-l-r").show(1400).slideDown(1400);


         }
         if(top>3000) {
             $(".partner-1").show(1400).slideDown(1400);
                 $(".partner-2").show(1400).slideDown(1400);



         }
         if(top>3500) {
             $(".help-current").show(1400).slideDown(1400);
                 $(".help-second").show(1400).slideDown(1400);


         }
         if(top>4500) {
             $(".footer1-1 p").show(1400).slideDown(1400);


         }
         if(top>4800) {
             $(".footer1-2").show(1400).slideDown(1400);
             $(".footer1-3").show(1400).slideDown(1400);
             $(".footer1-4").show(1400).slideDown(1400);


         }

     });

     $(".model").slideDown(1500).show(700);
     $(".model").on("click",function(){

     })
     //
     //  $(".band").on("click",function(){
     //
     //          $(this).css("backgroundImage", "url(../images/img/login_bg.jpg)");
     //
     //
     //          fadeIn(1000);
     //
     //      });

 $(".footer1-2").on("mouseover",function(){
     $(".footer1-2").addClass("bgg");
 });
     $(".footer1-2").on("mouseout",function(){
         $(".footer1-2").removeClass("bgg");

     });


     $(".footer1-3").on("mouseover",function(){
        $(this).addClass("bcc");
    });
     $(".footer1-3").on("mouseout",function(){
         $(this).removeClass("bcc");
     });
     $(".footer1-4").on("mouseover",function(){
         $(this).addClass("bdd");
     });

     $(".footer1-4").on("mouseout",function(){
         $(this).removeClass("bdd");
     });

 });






