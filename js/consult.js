/**
 * Created by ASUS on 2018/1/28.
 */
$(function () {

    var $li = $("#wrap li");

    $("#wrap").mouseenter(function () {
        $("#arrow").css("opacity", 1);
    });
    $("#wrap").mouseleave(function () {
        $("#arrow").css("opacity", 0);
    });

    var arr = ["pic-box1", "pic-box2", "pic-box3", "pic-box4", "pic-box5"];

    $("#arrRight").click(function () {
        var last = arr.pop();
        arr.unshift(last);

        for(var i = 0; i < $li.length; i++) {
            $li.eq(i).removeClass().addClass(arr[i]);
        }
    })
    $("#arrLeft").click(function () {
        var first = arr.shift();
        arr.push(first);

        for(var i = 0; i < $li.length; i++){
            $li[i].className = arr[i];
        }
    })
});
