$(function(){
    $('a[href^="#"]').click(function(){
        var speed = 700;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-55;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
    $(document).scroll(function() {
        if(100 < $(this).scrollTop()){
            $(".scroll-top").fadeIn();
        } else {
            $(".scroll-top").fadeOut();
        }
         /*
        if(1835 < $(this).scrollTop()){
            $(".scroll-top").css('background-color','rgba(204, 204, 204, .5)');
        } else {
            $(".scroll-top").css('background-color','rgba(52, 58, 64, .5)');
        }
         */
    });
});