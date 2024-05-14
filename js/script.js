$(document).ready(function(){
    $(".switch").click(function(){
        var target = $(this).data('target');
        var leftPos = $(this).position().left;
        var switchBar = $('.switch-bar');

        if (target === "work") {
            switchBar.animate({left: leftPos}, 300);
        } else if (target === "info") {
            switchBar.animate({left: leftPos}, 300);
        }
    });
});

