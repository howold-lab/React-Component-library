window.onload = function () {
    //下方的切换js代码
    var tab_list = document.querySelector('.tab_list');
    var lis = tab_list.querySelectorAll('li');
    var items = document.querySelectorAll('.item');
    for (var i = 0; i < lis.length; i++) {
        // 开始给5个小li 设置索引号 
        lis[i].setAttribute('index', i);
        lis[i].onclick = function () {
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            // 留下我自己 
            this.className = 'current';
            // 2. 下面的显示内容模块
            var index = this.getAttribute('index');
            // 干掉所有人 让其余的item 这些div 隐藏
            for (var i = 0; i < items.length; i++) {
                items[i].style.display = 'none';
            }
            // 留下我自己 让对应的item 显示出来
            items[index].style.display = 'block';
        }
    }
    // 图片放大镜的js效果
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var bigphoto = document.querySelector('.bigphoto');
    var bgr = document.querySelector('.bgr');
    preview_img.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        bigphoto.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        bigphoto.style.display = 'none';
    })
    preview_img.addEventListener('mousemove', function (e) {
        // 要算出鼠标在盒子里面的位置然后在赋值给mask遮罩层
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var maskX = x - (mask.offsetWidth / 2);
        var maskY = y - (mask.offsetHeight / 2);
        if (maskX < 0) {
            maskX = 0;
        } else if (maskX >= (preview_img.offsetWidth - mask.offsetWidth)) {
            maskX = (preview_img.offsetWidth - mask.offsetWidth);
        }
        if (maskY < 0) {
            maskY = 0;
        } else if (maskY >= (preview_img.offsetWidth - mask.offsetWidth)) {
            maskY = (preview_img.offsetWidth - mask.offsetWidth);
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        var bgr = document.querySelector('.bgr');
        // 遮挡层的最大移动距离
        var maskMax = preview_img.offsetWidth - mask.offsetWidth;
        // 大图片最大移动距离
        var bigMax = bgr.offsetWidth - bigphoto.offsetWidth;
        console.log(bgr.offsetWidth);
        // // 大图片的移动距离 X Y
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        bgr.style.left = -bigX + 'px';
        bgr.style.top = -bigY + 'px';
     
    })
    var s=location.href;
    s=s.substring((s.length-9),s.length);
    console.log(s);
    $("#div_box-right-8-div-1 ").on("click", (function (e) {
        if (($("#div_box-right-5 .cu").text()!== "") && ($("li[class='ck']"))) {
            if (localStorage.shopuserdata != null) {
                var persondata = JSON.parse(localStorage.shopuserdata);
                var length = persondata.length;
                if (length != "") {
                    // 时间封装
                    function getTimer() {
                        var date = new Date();
                        var year = date.getFullYear();
                        var month = date.getMonth() + 1;
                        var dates = date.getDate();
                        var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
                        var day = date.getDay();
                        var h = date.getHours();
                        h = h < 10 ? '0' + h : h;
                        var m = date.getMinutes();
                        m = m < 10 ? '0' + m : m;
                        var s = date.getSeconds();
                        s = s < 10 ? '0' + s : s;
                        return year + '年' + month + '月' + dates + '日 ' + arr[day] + h + ':' + m + ':' + s;
                    }
                    var goods = $(".itemInfo_wrap h1").text();
                    var ordername = persondata[length - 1].username;
                    var goodsprice = parseFloat($(".tm-price").text());
                    var size = $("#div_box-right-5 .cu").text();
                    var num = parseInt($("#div_box-right-7-div-1").text());
                    var totalprice = goodsprice * num;
                    var time = getTimer();
                    console.log(time);
                    console.log(totalprice);
                    // 动态异步
                    var type = "post";
                    var url = "php/buy.php";//服务器端的地址
                    // 使用ajax重点 以对象形式传递参数注意里面的键值对的的对应写法,对应的属性不能自己编
                    $.ajax({
                        url: url,
                        data:
                        {
                            ordername: ordername,
                            goods: goods,
                            goodsprice: goodsprice,
                            size: size,
                            num: num,
                            totalprice: totalprice,
                            time: time
                        },
                        type: type,
                        dataType: "text",
                        success: function (result) {
                            if (result == "ok") {
                                location.href = "pay.html";
                            }
                            else {
                                console.log(777);
                            }
                        },
                        async: true
                    });
                }
            }
            else {
                $("#div_box-right-8-div-1 a").prop("href", "login.html");
            }
        }
        else{
            alert("请选择尺码和款式");
        }
    }))
    
}