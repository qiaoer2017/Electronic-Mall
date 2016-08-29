/**
 * Created by qiaoer on 16/8/25.
 */

//分类导航菜单
$(function () {
    $('.categories dl').mouseover(function () {
            changeColors($(this));

            $(this).find('span').hide(0);

            $(this).addClass('hover');//背景变白

            //子分类出现
            var index = $(this).index() + 1;
            $('.sub-categories .sub-category:' + 'nth-child(' + index + ')').removeClass('hide').siblings().addClass('hide');
    }).mouseleave(function () {
            recoverColors($(this));

            $(this).find('span').show(0);

            $(this).removeClass('hover');//背景恢复

            //子分类消失
            $('.sub-categories .sub-category').addClass('hide');
    });

    $('.categories dl:first-child').css('border-top', 'none');
    $('.categories dl:last-child').css('border-bottom', 'none');

    $('.sub-categories .sub-category').mouseover(function () {
        $(this).removeClass('hide');

        var index = $(this).index() + 1;
        $('.categories dl:' + 'nth-child(' + index + ')').addClass('hover');


        var obj = $('.categories dl:' + 'nth-child(' + index + ')');
        changeColors(obj);

    }).mouseleave(function () {
        $(this).addClass('hide');

        var index = $(this).index() + 1;
        $('.categories dl:' + 'nth-child(' + index + ')').removeClass('hover');

        var obj = $('.categories dl:' + 'nth-child(' + index + ')');
        recoverColors(obj);
    });


    //改变.categories dl元素下子元素的颜色
    function changeColors(obj) {
        obj.find('a').css('color', '#4593fd');
        obj.find('.special').css('color', '#fff');
        obj.find('dd').find('a').css('color', '#999');
    }

//恢复.categories dl元素下子元素的颜色
    function recoverColors(obj) {
        obj.find('a').css('color', '#fff');
        obj.find('dd a').css('color', '#c2d9f8');
    }
});





