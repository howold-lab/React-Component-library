$(function()
{
    var url=document.referrer;
    console.log(url);
    if(url!=="http://localhost:8080/shopbefore/car.html")
    {
            var type = "post";
            var urlone = "php/buycheck.php";//服务器端的地址
            // 使用ajax重点 以对象形式传递参数注意里面的键值对的的对应写法,对应的属性不能自己编
            $.ajax({
                url: urlone,
                type: type,
                dataType: "json",
                success: function (result) {
                    if (result != "") {
                        $(".zhifu_price").text("￥"+result["user"][0].totalprice);
                    }
                    else {
                       
                    }
                },
                async: true
            });
    }
    else if(url=="http://localhost:8080/shopbefore/car.html")
    {   
        var price = JSON.parse(localStorage.pricedata);
        var length=price.length;
        price=price[length-1].price;
        $(".zhifu_price").text("￥"+price);
    }
})
