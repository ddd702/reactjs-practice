var host = 'http://test.ueker.cn/';
var leftMenuOpt = [{
        name: '用户对外账目列表',
        link: '#outList',
        subMenus: []
    }, {
        name: '用户对内账目列表',
        link: '#inList',
        subMenus: []
    }, {
        name: '提现受理，转账',
        link: '#inList',
        subMenus: [{
            name: '提现初审',
            link: '#first',
            subMenus: []
        }, {
            name: '提现终审',
            link: '#last',
            subMenus: []
        }, {
            name: '财务转账',
            link: '#first',
            subMenus: []
        }]
    }, {
        name: '收款列表',
        link: '#first',
        subMenus: []
    }, {
        name: '老板银行卡审核',
        link: '#first',
        subMenus: []
    }


];
var options = {
    leftMenuOpt: leftMenuOpt,
    urls: {
        'name': host + ''
    }
}
export { options as appOpt,leftMenuOpt }
