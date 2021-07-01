(function () {
    require.config({
        baseUrl: 'js/', // 基本路径
        paths: {
            // 映射，模块标识名，路径
            alerter: './modules/alerter',// 此处不能写alerter.js，会报错
            dataService: './modules/dataService'
        }
    })
    require(['alerter'],function (alerter) {
        alerter.showMsg()
    })
})()