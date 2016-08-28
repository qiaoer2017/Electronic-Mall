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

$(function () {
    $('.collect').click(function () {
        addFavorite(window.location, document.title);
    });
});