/**
 * Created by qiaoer on 16/8/29.
 */
var index = 0;

$('.choice-item .choice dd').mouseover(function () {
    $(this).addClass('hover').siblings().removeClass('hover');
    index = $(this).index() + 1;
    // alert(index)
    $('.choice-item .items').removeClass('hide');
    $('.choice-item .items div:nth-child(' + index + ')').removeClass('hide').siblings().addClass('hide');
}).mouseleave(function () {
    $('.choice-item .items').addClass('hide');
    $(this).removeClass('hover').siblings().removeClass('hover');
    // $('.choice-item .items div').addClass('hide');
});

$('.choice-item .items').mouseover(function () {
    // var index = $(this).index() + 1;
    $(this).removeClass('hide');
    $('.choice-item .choice dd:nth-child(' + index + ')').addClass('hover');
}).mouseleave(function () {
    $(this).addClass('hide');
    $('.choice-item .choice dd').removeClass('hover');
});