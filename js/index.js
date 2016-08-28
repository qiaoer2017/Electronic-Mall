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

// | | | | | | |

//焦点图
$(function () {
    var len = 4;
    var currentIndex = 1;
    var sliding = false;
    var timer;

    var list = $('.list');
    var next = $('#next');
    var prev = $('#prev');

    play();

    $('.carousel').mouseover(function () {
        stop();
    }).mouseleave(function () {
        play();
    });

    next.click(function () {
        if (!sliding) {
            if (currentIndex >= len) {
                currentIndex = 1;
            } else {
                currentIndex++;
            }
            switchingCurrentItem(-810);
            changeIndicator();
        }


    });
    prev.click(function () {
        if (!sliding) {
            if (currentIndex <= 1) {
                currentIndex = len;
            } else {
                currentIndex--;
            }
            switchingCurrentItem(810);
            changeIndicator();
        }
    });

    $('.buttons span').click(function () {
        if (!sliding) {
            var myIndex = $(this).index() + 1;
            var offset = myIndex - currentIndex;

            switchingCurrentItem(offset * (-810));
            currentIndex = myIndex;
            changeIndicator();
        }
    });

    function switchingCurrentItem(offset) {
        sliding = true;

        var newLeft = parseInt(list.css('left')) + offset;
        var time = 200;//位移总时间
        var interval = 5;//位移间隔时间
        var speed = offset / (time / interval);

        function slide() {
            if ((offset < 0 && parseInt(list.css('left')) > newLeft) || (offset > 0 && parseInt(list.css('left')) < newLeft)) {
                list.css('left', parseInt(list.css('left')) + speed + 'px');
                setTimeout(slide, interval);
            } else {

                if (newLeft < len * (-810)) {
                    newLeft = -810;
                } else if (newLeft > -810) {
                    newLeft = len * (-810);
                }
                list.css('left', newLeft + 'px');
                sliding = false;

            }
        }

        slide();
    }

    function changeIndicator() {
        for (var i = 0; i < len; i++) {
            var span = $('.buttons span:nth-child(' + (i + 1) + ')');
            if (span.hasClass('on')) {
                span.removeClass('on');
                break;
            }
        }
        $('.buttons span:nth-child(' + currentIndex + ')').addClass('on');
    }

    function play() {
        timer = setInterval(function () {
            next.click();
        }, 3000);
    }

    function stop() {
        clearInterval(timer);
    }
});





