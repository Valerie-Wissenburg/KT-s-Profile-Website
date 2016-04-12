// JavaScript Document
$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $(".maintext");
    var offset = startchange.offset();

    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $("nav").css('background-color', 'rgba(202, 200, 200, 0.15)');
            } else {
                $('nav').css('background-color', 'transparent');
            }
        });
    }
});