var flag1 = 1;//判断是否可以提交表单之手机号
var flag2 = 1;//判断是否可以提交表单之用户名
var flag3 = 1;//判断是否可以提交表单之密码
var flag4 = 1;//判断是否可以提交表单之确认密码
$(function () {
    $("#one").on("blur", function () {
        var pnumberreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
        var inpone = document.querySelector('#one').value;
        var phonenumber = document.querySelector('#phonenumber');
        if (inpone.length != 0) {
            if (pnumberreg.test(inpone)) {
                flag1 = 1;
                phonenumber.className = "right";
                phonenumber.innerHTML = "手机号码格式正确";
                // 动态异步验证手机号是否已经在后端存在
                var inpone = inpone;
                var type = "get";
                var url = "php/regcheck.php";//服务器端的地址
                // 使用ajax重点 以对象形式传递参数注意里面的键值对的的对应写法,对应的属性不能自己编
                $.ajax({
                    url: url,
                    data: { inpone: inpone },
                    type: type,
                    dataType: "text",
                    success: function (result) {
                        if (result == "false") {
                            flag1 = 0;
                            alert("手机号已经注册");
                        }
                    },
                    async: true
                });
            }
            else {
                phonenumber.className = "wrong";
                phonenumber.innerHTML = "手机号码格式有误";
                flag1 = 0;
            }
        }
    })
    $("#two").on("blur", function () {
        var usernamereg = /^[0-9a-zA-Z]{4,}$/;
        var username = document.querySelector('#two').value;
        var textnumber = document.querySelector('#textnumber');
        if (username.length != 0) {
            if (usernamereg.test(username)) {
                flag2 = 1;
                textnumber.className = "right";
                textnumber.innerHTML = "用户名格式正确";
                // 动态异步验证手机号是否已经在后端存在
                var type = "post";
                var username = username;
                var url = "php/regcheck.php";//服务器端的地址
                // 使用ajax重点 以对象形式传递参数注意里面的键值对的的对应写法,对应的属性不能自己编
                $.ajax({
                    url: url,
                    data: { username: username },
                    type: type,
                    dataType: "text",
                    success: function (result) {
                        if (result == "ufalse") {
                            flag2 = 0;
                            alert("该用户已经存在");
                        }
                    },
                    async: true
                });
            }
            else {
                textnumber.className = "wrong";
                textnumber.innerHTML = "用户名格式错误";
                flag2 = 0;
            }
        }
    })
    $("#three").on("blur", function () {
        var pwreg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,30}$/;
        var pw = document.querySelector('#three').value;
        var pwnumber = document.querySelector('#pwnumber');
        if (pw != 0) {
            flag = 0;
            if (pwreg.test(pw)) {
                pwnumber.className = "right";
                pwnumber.innerHTML = "密码格式正确";
                flag3 = 1;
            }
            else {
                pwnumber.className = "wrong";
                pwnumber.innerHTML = "密码格式错误";
                flag3 = 0;
            }
        }
    })
    $("#four").on("blur", function () {
        var checkpw = $("#four").val();
        var check = document.querySelector("#checkpwnumber");
        var pw = document.querySelector('#three').value;
        console.log(pw);
        if (checkpw.length != 0) {
            if (checkpw != pw) {
                check.className = "wrong";
                $("#checkpwnumber").html("两次密码输入不一致");
                flag4 = 0;
            }
            else {
                check.className = "right";
                $("#checkpwnumber").html("密码输入一致");
                flag4 = 1;
            }
        }

    })
    var marqueeScroll = function (id1, id2, id3, timer) {
       console.log("548");
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
    
})
function sub() {
    if (!$("#box").prop("checked")) {
        return false;
    }
    else {
        var result = flag1 && flag2 && flag3 && flag4;
        console.log(result);
        if (result) {
            return true;
        }
        else {
            return false;
        }

    }

}
