$(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > $('.recommend').offset().top) {
            $('.fixedtool').show();
        } else {
            $('.fixedtool').hide();
        }
          $(".floor .w").each(function (i, n) {
        if ($(document).scrollTop() >= $(n).offset().top-3) {
            $('.fixedtool li').eq(i).addClass('current').siblings('li').removeClass('current');
    }
    })

  
})

    $('.fixedtool li').click(function () {
        $(this).addClass('current').siblings('li').removeClass('current');
        $('html,boyd').animate({
            scrollTop:$('.floor .w').eq($(this).index()).offset().top
        })
    })
})