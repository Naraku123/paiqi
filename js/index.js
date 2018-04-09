/**
 * Created by 赵春明 on 2018/1/20.
 */

    //轮播图部分开始
var slidul = document.querySelector(".nav-slide-box ul");
var slidspans = document.querySelectorAll(".nav-slide-box .counts span");
var slidpush = document.querySelector(".slides-push");
var img004 = document.querySelectorAll(".img-4 img")[1];
var img04 = document.querySelector(".img-4");
var img03 = document.querySelector(".img-3");
var img05 = document.querySelector(".img-5");
var img06 = document.querySelector(".img-6");
var img07 = document.querySelector(".img-7");
var img08 = document.querySelector(".img-08");
var img10 = document.querySelector(".img-10");
var img11 = document.querySelector(".img-11");
var img012 = document.querySelector(".img-012");
var img14 = document.querySelector(".img-14");
var img17 = document.querySelector(".img-17");
var img18 = document.querySelector(".img-18");
var img19 = document.querySelector(".img-19");
var img20 = document.querySelector(".img-20");
var img21 = document.querySelector(".img-21");
var img22 = document.querySelector(".img-22");
var img1 = document.querySelector(".slideshow7 .img-1");
var img001 = document.querySelector(".slideshow7 .img-01");
var img2 = document.querySelector(".slideshow7 .img-2");
var imgg1 = document.querySelector(".slideshow1 .img-1");
var imgg001 = document.querySelector(".slideshow1 .img-01");
var imgg2 = document.querySelector(".slideshow1 .img-2");
var img131 = document.querySelectorAll(".img-13 img")[1];
var img132 = document.querySelectorAll(".img-13 img")[2];
var link1 = document.querySelectorAll(".slideshow3 a")[0];
var link2 = document.querySelectorAll(".slideshow3 a")[1];
var link3 = document.querySelector(".slideshow4 a");
var link4 = document.querySelector(".slideshow5 a");
var link5 = document.querySelector(".slideshow6 a");
var link6 = document.querySelector(".slideshow1 a");
var link7 = document.querySelector(".slideshow7 a");
var autoTimer1;
for (var i = 0; i < slidspans.length; i++) {
    slidspans[i].index = i;
    slidspans[i].onclick = function () {
        for (var j = 0; j < slidspans.length; j++) {
            slidspans[j].className = "fl";
        }
        this.className = "fl count";
        animate(slidul, {"left": -this.index * 1349}, function () {
            animate(img05, {"left": 45, "opacity": 1});
            animate(img06, {"top": 462, "opacity": 1});
            animate(img004, {"top": -28, "opacity": 1});
            animate(img04, {"left": 45, "opacity": 1});
            animate(img03, {"bottom": 0, "right": 0, "opacity": 1});
            animate(img07, {"left": 45, "opacity": 1});
            animate(img08, {"bottom": 0, "opacity": 1});
            animate(img10, {"left": 45, "opacity": 1});
            animate(img11, {"left": 134, "opacity": 1});
            animate(img012, {"left": 64, "opacity": 1});
            animate(img14, {"left": 45, "opacity": 1});
            animate(img17, {"left": 45, "opacity": 1});
            animate(img18, {"left": 108, "opacity": 1});
            animate(img19, {"left": 175, "opacity": 1});
            animate(img20, {"left": 45, "opacity": 1});
            animate(img21, {"left": 45, "opacity": 1});
            animate(img22, {"left": 45, "opacity": 1});
            animate(img1, {"left": 45, "opacity": 1});
            animate(img001, {"left": 110, "opacity": 1});
            animate(img2, {"left": 45, "opacity": 1});
            animate(imgg1, {"left": 45, "opacity": 1});
            animate(imgg001, {"left": 110, "opacity": 1});
            animate(imgg2, {"left": 45, "opacity": 1});
            animate(img131, {"bottom": 100, "opacity": 1});
            animate(img132, {"bottom": 125, "opacity": 1});
            animate(link1, {"top": 435, "opacity": 1});
            animate(link2, {"top": 435, "opacity": 1});
            animate(link3, {"top": 354, "opacity": 1});
            animate(link4, {"top": 503, "opacity": 1});
            animate(link5, {"top": 438, "opacity": 1});
            animate(link6, {"top": 438, "opacity": 1});
            animate(link7, {"top": 438, "opacity": 1});
            //img05.style.transform = "translate(-100%)";
            //animate(img05, {"left" : 500})
        });
        animate(img004, {"top": -400, "opacity": 0});
        animate(img03, {"bottom": -40, "right": -40, "opacity": 0});
        animate(img06, {"top": 562, "opacity": 0});
        animate(img05, {"left": -60, "opacity": 0});
        animate(img04, {"left": 100, "opacity": 0});
        animate(img07, {"left": -60, "opacity": 0});
        animate(img10, {"left": 245, "opacity": 0});
        animate(img11, {"left": -66, "opacity": 0});
        animate(img012, {"left": -120, "opacity": 0});
        animate(img14, {"left": 160, "opacity": 0});
        animate(img17, {"left": -100, "opacity": 0});
        animate(img18, {"left": -340, "opacity": 0});
        animate(img19, {"left": 375, "opacity": 0});
        animate(img20, {"left": -175, "opacity": 0});
        animate(img21, {"left": -175, "opacity": 0});
        animate(img22, {"left": -175, "opacity": 0});
        animate(img1, {"left": -145, "opacity": 0});
        animate(img001, {"left": 300, "opacity": 0});
        animate(img2, {"left": -200, "opacity": 0});
        animate(imgg1, {"left": -45, "opacity": 0});
        animate(imgg001, {"left": 200, "opacity": 0});
        animate(imgg2, {"left": -165, "opacity": 0});
        animate(img08, {"bottom": -100, "opacity": 0});
        animate(img131, {"bottom": 500, "opacity": 0});
        animate(img132, {"bottom": 525, "opacity": 0});
        animate(link1, {"top": 735, "opacity": 0});
        animate(link2, {"top": 535, "opacity": 0});
        animate(link3, {"top": 454, "opacity": 0});
        animate(link4, {"top": 666, "opacity": 0});
        animate(link5, {"top": 666, "opacity": 0});
        animate(link6, {"top": 666, "opacity": 0});
        animate(link7, {"top": 666, "opacity": 0});
        clearInterval(autoTimer1);
        return;
    }
}
var content = 0;
slidpush.onclick = function () {
    if (content >= slidul.children.length - 1) {
        content = 0;
        slidul.style.left = 0;
    }
    content++;
    animate(slidul, {"left": -content * 1349}, function () {
        //img05.style.transform = "translate(100%)";
        animate(img05, {"left": 45, "opacity": 1});
        animate(img06, {"top": 462, "opacity": 1});
        animate(img004, {"top": -28, "opacity": 1});
        animate(img04, {"left": 45, "opacity": 1});
        animate(img03, {"bottom": 0, "right": 0, "opacity": 1});
        animate(img07, {"left": 45, "opacity": 1});
        animate(img08, {"bottom": 0, "opacity": 1});
        animate(img10, {"left": 45, "opacity": 1});
        animate(img11, {"left": 134, "opacity": 1});
        animate(img012, {"left": 64, "opacity": 1});
        animate(img14, {"left": 45, "opacity": 1});
        animate(img17, {"left": 45, "opacity": 1});
        animate(img18, {"left": 108, "opacity": 1});
        animate(img19, {"left": 175, "opacity": 1});
        animate(img20, {"left": 45, "opacity": 1});
        animate(img21, {"left": 45, "opacity": 1});
        animate(img22, {"left": 45, "opacity": 1});
        animate(img1, {"left": 45, "opacity": 1});
        animate(img001, {"left": 110, "opacity": 1});
        animate(img2, {"left": 45, "opacity": 1});
        animate(img131, {"bottom": 100, "opacity": 1});
        animate(img132, {"bottom": 125, "opacity": 1});
        animate(link1, {"top": 435, "opacity": 1});
        animate(link2, {"top": 435, "opacity": 1});
        animate(link3, {"top": 354, "opacity": 1});
        animate(link4, {"top": 503, "opacity": 1});
        animate(link5, {"top": 438, "opacity": 1});
        animate(link6, {"top": 418, "opacity": 1});
        animate(link7, {"top": 418, "opacity": 1});
    });
    animate(img004, {"top": -400, "opacity": 0});
    animate(img03, {"bottom": -40, "right": -40, "opacity": 0});
    animate(img06, {"top": 562, "opacity": 0});
    animate(img05, {"left": -60, "opacity": 0});
    animate(img04, {"left": 100, "opacity": 0});
    animate(img07, {"left": -60, "opacity": 0});
    animate(img10, {"left": 245, "opacity": 0});
    animate(img11, {"left": -66, "opacity": 0});
    animate(img012, {"left": -120, "opacity": 0});
    animate(img14, {"left": 160, "opacity": 0});
    animate(img17, {"left": -100, "opacity": 0});
    animate(img18, {"left": -340, "opacity": 0});
    animate(img19, {"left": 375, "opacity": 0});
    animate(img20, {"left": -175, "opacity": 0});
    animate(img21, {"left": -175, "opacity": 0});
    animate(img22, {"left": -175, "opacity": 0});
    animate(img08, {"bottom": -100, "opacity": 0});
    animate(img1, {"left": -145, "opacity": 0});
    animate(img001, {"left": 300, "opacity": 0});
    animate(img2, {"left": -200, "opacity": 0});
    animate(img131, {"bottom": 500, "opacity": 0});
    animate(img132, {"bottom": 525, "opacity": 0});
    animate(link1, {"top": 735, "opacity": 0});
    animate(link2, {"top": 535, "opacity": 0});
    animate(link3, {"top": 454, "opacity": 0});
    animate(link4, {"top": 666, "opacity": 0});
    animate(link5, {"top": 666, "opacity": 0});
    animate(link6, {"top": 666, "opacity": 0});
    animate(link7, {"top": 666, "opacity": 0});
    for (var i = 0; i < slidspans.length; i++) {
        slidspans[i].className = "fl";
    }
    if (content >= slidul.children.length - 1) {
        slidspans[0].className = "fl count";
    } else {
        slidspans[content].className = "fl count";
    }
};
autoTimer1 = setInterval(function () {
    slidpush.click();
    //console.log(1);
}, 6000);
//轮播图部分结束
//  主体案例部分开始
var cases = document.getElementsByClassName("case-banner")[0];
var ul = cases.getElementsByTagName("ul")[0];
var spans = ul.getElementsByTagName("span");
var boxes = cases.getElementsByClassName("case-boxes");
for (var i = 0; i < spans.length; i++) {
    spans[i].index = i;
    spans[i].onmouseover = function () {
        for (var j = 0; j < spans.length; j++) {
            spans[j].className = "";
            boxes[j].className = "case-boxes hide fl";

        }
        this.className = "current";
        boxes[this.index].className = "case-boxes visible fl";
    }
}
//  主体案例部分结束
//主体观点部分轮播图开始
var pointBox = document.getElementById("point-box");
var lis = pointBox.getElementsByTagName("li");
var pointIndexes = document.getElementsByClassName("point-index");
var arrow = document.getElementById("point-arrow");
var arrLeft = document.getElementById("arrLeft");
var arrRight = document.getElementById("arrRight");

var datas = [
    {
        "width": 300,
        "top": 20,
        "left": 120,
        "opacity": 0.2,
        "zIndex": 2
    },
    {
        "width": 380,
        "top": 70,
        "left": 0,
        "opacity": 0.6,
        "zIndex": 3
    },
    {
        "width": 440,
        "top": 100,
        "left": 250,
        "opacity": 1,
        "zIndex": 4
    },
    {
        "width": 380,
        "top": 70,
        "left": 560,
        "opacity": 0.6,
        "zIndex": 3
    },
    {
        "width": 300,
        "top": 20,
        "left": 520,
        "opacity": 0.2,
        "zIndex": 2
    }
];
var datas1 = [
    {
        "opacity": 0,
        "zIndex": 2
    },
    {
        "opacity": 0,
        "zIndex": 3
    },
    {
        "opacity": 1,
        "zIndex": 4
    },
    {
        "opacity": 0,
        "zIndex": 3
    },
    {
        "opacity": 0,
        "zIndex": 2
    }
];
for (var i = 0; i < lis.length; i++) {
    animate(lis[i], datas[i]);
}
for (var i = 0; i < pointIndexes.length; i++) {
    animate(pointIndexes[i], datas1[i]);
}
//pointBox.onmouseover = function () {
//    animate(arrow, {"opacity": 1})
//}
//pointBox.onmouseout = function () {
//    animate(arrow, {"opacity": 0})
//}
var flag = true;
//var content = 0;
arrRight.onclick = function () {
    if (flag) {
        flag = false;
        datas.unshift(datas.pop());
        datas1.unshift(datas1.pop());
        for (var i = 0; i < lis.length; i++) {
            //lis[i].index = i;
            animate(lis[i], datas[i], function () {
                flag = true;
            });
            for (var j = 0; j < pointIndexes.length; j++) {
                animate(pointIndexes[j], datas1[j])
            }
        }
        //content++;
    }
    //for (var i = 0; i < lis.length; i++) {
    //    for (var j = 0; j < pointIndexes.length; j++) {
    //        if (lis[i].style.opacity == "1") {
    //            pointIndexes[j].className = "point-index visible";
    //        }else {
    //            pointIndexes[j].className = "point-index hide";
    //        }
    //    }
    //}

    //for (var i = 0; i < pointIndexes.length; i++) {
    //    pointIndexes[i].className = "point-index visible";
    //}
    //pointIndexes[i].className = "point-index hide"
    //}
};
arrLeft.onclick = function () {
    if (flag) {
        flag = false;
        datas.push(datas.shift());
        datas1.push(datas1.shift());
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], datas[i], function () {
                flag = true;
            });
            for (var j = 0; j < pointIndexes.length; j++) {
                animate(pointIndexes[j], datas1[j]);
            }
        }
    }
};
autoTimer = setInterval(function () {
    arrRight.click();
}, 2000);
pointBox.onmouseover = function () {
    clearInterval(autoTimer);
    animate(arrow, {"opacity": 1});
};
pointBox.onmouseout = function () {
    autoTimer = setInterval(function () {
        arrRight.click();
    }, 2000);
    animate(arrow, {"opacity": 0});
};
//主体观点部分轮播图结束
// 主体底部部分开始
var linkLis = document.querySelectorAll(".footer-link-ul > li");
var banLtems = document.querySelectorAll(".banner-footer-item");
var ies = document.querySelectorAll(".footer-link-ul i");
for (var i = 0; i < linkLis.length; i++) {
    linkLis[i].index = i;
    linkLis[i].onclick = function () {
        console.log(11);
        for (var j = 0; j < linkLis.length; j++) {
            linkLis[j].className = "fl";
            ies[j].className = "hide";
            banLtems[j].className = "banner-footer-item hide";
        }
        ies[this.index].className = "visible";
        this.className = "fl cur";
        banLtems[this.index].className = "banner-footer-item visible";

    };
}
// 主体底部部分开始
//scroll事件
var scroll1 = document.querySelector(".paiky-direction-box");
var scroll2 = document.querySelector(".paiky-direction-point h2");
var scroll3 = document.querySelector(".paiky-direction-point p");
//var scroll4 = document.querySelector(".paiky-design h2");
//var scroll5 = document.querySelector(".paiky-design h3");
//var scroll6 = document.querySelector(".paiky-design p");
var scroll4 = document.querySelector(".paiky-design-img > img");
var scroll5 = document.querySelector(".img-left > .img-left1");
var scroll6 = document.querySelector(".img-left > .img-left2");
var scroll7 = document.querySelector(".img-right > .img-right1");
var scroll8 = document.querySelector(".img-right > .img-right2");
var scroll9 = document.querySelector(".cimg-1");
var scroll10 = document.querySelector(".cimg-2");
var scroll11 = document.querySelector(".cimg-3");
var scroll12 = document.querySelector(".cimg-4");
var onload01 = document.querySelector(".slideshow1 .img-1");
var onload02 = document.querySelector(".slideshow1 .img-01");
var onload03 = document.querySelector(".slideshow1 .img-2");
var onload04 = document.querySelector(".slideshow1 .more");
window.onscroll = function () {
    // console.log("top = " + getScroll().top);
    // console.log("left = " + getScroll().left);
    if (getScroll().top > 550) {
        animate(scroll1, {"top": 30, "opacity": 1});
    }
    if (getScroll().top > 700) {
        animate(scroll2, {"bottom": 120, "opacity": 1});
    }
    if (getScroll().top > 760) {
        animate(scroll3, {"bottom": 95, "opacity": 1});
    }
    if (getScroll().top > 2500) {
        scroll4.style.transform = "rotate(360deg)";
        animate(scroll5, {"top": 0, "right": 0, "opacity": 1});
        animate(scroll6, {"bottom": 0, "right": 0, "opacity": 1});
        animate(scroll7, {"top": 0, "left": 0, "opacity": 1});
        animate(scroll8, {"bottom": 0, "left": 0, "opacity": 1});
    }
    if (getScroll().top > 3000) {
        animate(scroll9, {"left": 0, "opacity": 1});
        animate(scroll10, {"left": 0, "opacity": 1});
        animate(scroll12, {"left": 0, "opacity": 1});
        animate(scroll11, {"right": -1260, "opacity": 1})
    }
};
window.onload = function () {
    animate(onload01, {"left": 45, "opacity": 1});
    animate(onload02, {"left": 110, "opacity": 1});
    animate(onload03, {"left": 45, "opacity": 1});
    animate(onload04, {"top": 418, "opacity": 1})
};
scroll4.onmouseover = function () {
    scroll4.style.transform = "rotate(-360deg)";
};
scroll4.onmouseout = function () {
    scroll4.style.transform = "rotate(360deg)";
};

function getScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;

    return {top: scrollTop, left: scrollLeft};
}