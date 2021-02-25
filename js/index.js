window.onload = function () {
    var searchname = document.querySelector('.name');
    document.addEventListener('keyup', function (e) {
        if (e.keycode == 9) {
            searchname.focus();
        }
    })
}
$(function () {
    // 波浪效果
    var marqueeScroll = function (id1, id2, id3, timer) {
        var $parent = $("#" + id1);
        var $goal = $("#" + id2);
        var $closegoal = $("#" + id3);
        $closegoal.html($goal.html());
        function Marquee() {
            if (parseInt($parent.scrollLeft()) - $closegoal.width() >= 0) {
                $parent.scrollLeft(parseInt($parent.scrollLeft()) - $goal.width());
            } else {
                $parent.scrollLeft($parent.scrollLeft() + 1);
            }
        }
        setInterval(Marquee, timer);
    }

    var marqueeScroll1 = new marqueeScroll("marquee-box", "wave-list-box1", "wave-list-box2", 20);
    var marqueeScroll2 = new marqueeScroll("marquee-box3", "wave-list-box4", "wave-list-box5", 40);
    // 波浪效果结束
    // 搜索商品功能开始
    $(".search").click(function () {
        var commodity = $("#commodity").val();
        var flag;
        if (commodity != "") {
            flag=0;
            var commoditydata = $(".box h4");
            for (var i = 0; i < commoditydata.length; i++) {
                if (($(commoditydata[i]).text().trim()) == (commodity)) {
                    location.href = $(commoditydata[i]).siblings("a").prop("href");
                    flag=1;
                    break;
                }
            }
            if(flag==0)
            {
                $("#commodity").val("");
                $("#commodity").attr("placeholder","输入正确的商品名称")
            }
        }
    })
    // 搜索商品功能结束
    // 电梯导航

    var flag = true;
    // 1.显示隐藏电梯导航
    var toolTop = $(".box-bd").offset().top;
    toggleTool();
    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        };
    }
    $(window).scroll(function () {
        toggleTool();
        // 3. 页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名
        if (flag) {
            $(".floor .w").each(function (i, ele) {
                if ($(document).scrollTop() >= ($(ele).offset().top-200)) {
                    console.log($(ele).offset().top);
                    console.log(i);
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();

                }
            })
        }
    });
    // 2. 点击电梯导航页面可以滚动到相应内容区域
    $(".fixedtool li").click(function () {
        flag = false;
        console.log($(this).index());
        // 当我们每次点击小li 就需要计算出页面要去往的位置 
        // 选出对应索引号的内容区的盒子 计算它的.offset().top
        var current = $(".floor .w").eq($(this).index()).offset().top;
        // 页面动画滚动效果
        $("body, html").stop().animate({
            scrollTop: current
        }, function () {
            flag = true;
        });
        // 点击之后，让当前的小li 添加current 类名 ，姐妹移除current类名
        $(this).addClass("current").siblings().removeClass();
    })
    // 电梯导航js
});