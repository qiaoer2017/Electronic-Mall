/**
 * Created by qiaoer on 16/8/25.
 */
function addFavorite(sURL, sTitle) {
    try {
        window.external.addFavorite(sURL, sTitle);
        notie.alert(1, '加入收藏成功！', 9);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e) {

            notie.alert(3, '您的浏览器不支持自动收藏，请使用Ctrl+D进行添加！', 3);
        }
    }
}

//添加收藏
$(function () {
    $('.collect').click(function () {
        addFavorite(window.location, document.title);
    });
});


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