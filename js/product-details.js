/**
 * Created by qiaoer on 16/9/1.
 */
$(function () {
    $('.description-comment .menu .desc').click(function () {
        $('.description-comment .menu .comm').removeClass('active');
        $(this).addClass('active');
        $('.description-comment .description').css('display', 'block');
        $('.description-comment .comment').css('display', 'none');
    });
    $('.description-comment .menu .comm').click(function () {
        $('.description-comment .menu .desc').removeClass('active');
        $(this).addClass('active');
        $('.description-comment .description').css('display', 'none');
        $('.description-comment .comment').css('display', 'block');
    });
});