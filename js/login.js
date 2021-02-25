$('#password').focusin(function () {
    $('form').addClass('up')
})
// 眼睛移动
$(document).on('mousemove', function (event) {
    var dw = $(document).width() / 15
    var dh = $(document).height() / 15
    var x = event.pageX / dw
    var y = event.pageY / dh
    $('.eye-ball').css({
        width: x,
        height: y
    })
})
