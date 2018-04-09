/**
 * Created by chaochao on 2018/1/18.
 */
function animate(ele, obj, fn) {
    if (ele.timer) {
        clearInterval(ele.timer);
    }
    ele.timer = setInterval(function () {
        var flag = true;
        for (var attr in obj) {
            var target = obj[attr];
            var leader = getStyle(ele, attr);
            var  step;
            if (attr == "zIndex") {
                ele.style.zIndex = target;
                continue;
            }else if (attr == "opacity") {
                leader = parseInt(leader * 100) / 100 || 0;
                target *= 1000;
                leader *= 1000;
            }else {
                leader = parseInt(leader) || 0;
            }
            step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader += step;
            if (attr == "opacity") {
                ele.style.opacity = leader / 1000;
            }else {
                ele.style[attr] = leader + "px";
            }
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(ele.timer);
            fn && fn();
        }
    }, 16)
}

function getStyle(ele, attrName) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(ele,null)[attrName];
    }
    return ele.currentStyle[attrName];
}