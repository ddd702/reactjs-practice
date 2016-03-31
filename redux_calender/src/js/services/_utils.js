import $ from 'jquery';
import D from '../tools/dialog.d/dialog.d';
var utils = {
    send(url, data, fn, setting) {
        var _this = this;
        var sendData = null;
        var opt = Object.assign({
            type: 'post',
            dataType: 'json',
            async: true,
            hasBefore: true,
            checkLogin: false
        }, setting);
        if (opt.checkLogin) {
            sendData = Object.assign(data, {
                userId: D.utils.getCookie('userid'),
                sessionKey: D.utils.getCookie('sessionKey')
            });
        } else {
            sendData = data;
        }

        return $.ajax({
            url: url,
            type: opt.type,
            data: sendData,
            dataType: opt.dataType,
            async: opt.async,
            success: function(rs) {
                D.rmNotify();
                if (typeof rs.resultCode !== 'undefined' && rs.resultCode !== 0) {
                    switch (rs.resultCode) {
                        case -3: //需要登录

                            window.location.href = "login.html";
                            break;
                        default:
                            D.notify(rs.resultMsg);
                            break;
                    }
                } else {
                    fn(rs);
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log(errorThrown);
                D.alert('>_<~出错了：' + errorThrown);
                D.rmNotify();
            },
            beforeSend: function() {
                if (opt.hasBefore) {
                    D.notify('正在发送请求~~', {
                        operate: false,
                        autoRm: false
                    });
                }
            }
        });

    }
    getDay(date){
        return date.getDay();
    }
}
export default utils;
