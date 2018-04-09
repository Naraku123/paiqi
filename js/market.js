/**
 * Created by ASUS on 2018/1/31.
 */
var tophigh = document.querySelector(".top-box");
var imgbottom = document.querySelector(".img-box");
var topherf = document.querySelector(".top-href");
var leftbox = document.querySelector(".left-box");
var rightbox = document.querySelector(".right-box");
var blankbg = document.querySelector(".blank-bg");
var imgbox1 = document.querySelector(".img-box1");
var topbg = document.querySelector(".top-bg");
var leftbox1 = document.querySelector(".left-box1");
var rightbox1 = document.querySelector(".right-box1");
var centerbox = document.querySelector(".center-box");
var caseboxtext = document.querySelector(".case-box-text");
var lisbox = document.querySelector(".lis-box");
var morebox = document.querySelector(".more-box");
var videoboxtext = document.querySelector(".video-box-text");
var libox = document.querySelector(".li-box");
var consultboxtext = document.querySelector(".consult-box-text");
var consultboxmore = document.querySelector(".consult-box-more");


window.onload = function () {
    animate(tophigh,{"top" : 162}, function () {
        animate(topherf, {"top": 200,"opacity" : 1})
    });
};
window.onscroll = function () {
    console.log("top = " + getScroll().top);
    console.log("left = " + getScroll().left);
    if (getScroll().top > 250){
        animate(imgbottom,{"left" : 100});
    };
    if (getScroll().top > 550){
        animate(leftbox,{"left" : 45});
    };
    if (getScroll().top > 550){
        animate(rightbox,{"right" : 45,});
    };
    if (getScroll().top > 1350){
        animate(blankbg,{"opacity" : 1.2});
    };
    if (getScroll().top > 1300){
        animate(imgbox1,{"top" : 125});
    };
    if (getScroll().top > 2000){
        animate(topbg,{"top" : 80});
    };
    if (getScroll().top > 2200){
        animate(leftbox1,{"left" : 45});
    };
    if (getScroll().top > 2200){
        animate(rightbox1,{"right" : 45});
    };
    if (getScroll().top > 2600){
        animate(centerbox,{"opacity" : 1.2});
    };
    if (getScroll().top > 3000){
        animate(caseboxtext,{"top" : 80});
    };
    if (getScroll().top > 3200){
        animate(lisbox,{"top" : 160});
    };
    if (getScroll().top > 3600){
        animate(morebox,{"top" : 760});
    };
    if (getScroll().top > 3900){
        animate(videoboxtext,{"top" : 60});
    };
    if (getScroll().top > 4200){
        animate(libox,{"top" : 195});
    };
    if (getScroll().top > 4500){
        animate(consultboxtext,{"top" : 90});
    };
    if (getScroll().top > 4700){
        animate(consultboxmore,{"top" : 230});
    };
};

function getScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;

    return {top:scrollTop,left:scrollLeft};
}