$(function () {
    $("#div_box-right-5 div").addClass('co');
    $("#div_box-right-5 div").click(function () {
        $(this).siblings('div').removeClass('cu');
        $(this).addClass('cu');
    })
    $("#div_box-right-6 ul li").addClass("co");
    $("#div_box-right-6 ul li").click(function () {
        $(this).siblings('li').removeClass('ck');
        $(this).addClass('ck');
    })
    $(".list_item-one").mouseenter(function () {
        $(this).css("border", "1px solid #000");
        $(this).siblings("li").css("border", "1px solid #fff");
        $(".preview_img img").attr("src", "images/home/dain1.jpg");
    })
    $(".list_item-two").mouseenter(function () {
        $(this).css("border", "1px solid #000");
        $(this).siblings("li").css("border", "1px solid #fff");
        $(".preview_img img").attr("src", "images/home/dain1.jpg");
    })
    $(".list_item-three").mouseenter(function () {


        $(this).css("border", "1px solid #000");
        $(this).siblings("li").css("border", "1px solid #fff");
        $(".preview_img img").attr("src", "images/home/dain2.jpg");
    })
    $(".list_item-four").mouseenter(function () {
        $(this).css("border", "1px solid #000");
        $(this).siblings("li").css("border", "1px solid #fff");
        $(".preview_img img").attr("src", "images/home/dain3.jpg");
    })
    var  x=1;
    $("#div_box-right-7-div-2-onck1").click(function () {
             
             x++;
             $("#div_box-right-7-div-1").text(x);
    })
    $("#div_box-right-7-div-2-onck2").click(function()
    {     
        if(x>=2)
        {
            x--;
            $("#div_box-right-7-div-1").text(x);
        }
        else 
        {
            $("#div_box-right-7-div-1").text(x);
        }
    })
    $("#div_box-right-6-1").click(function () {  
        $(".preview_img img").attr("src", "images/home/dain1.jpg");
    })
    $("#div_box-right-6-2").click(function () {  
        $(".preview_img img").attr("src", "images/home/dain2.jpg");
    })
    $("#div_box-right-6-3").click(function () {  
        $(".preview_img img").attr("src", "images/home/dain3.jpg");
    })
    $("#div_box-right-6-4").click(function () {  
        $(".preview_img img").attr("src", "images/home/dain4.jpg");
    })

})