(function (window) {
    let msg = 'www.baidu.com'
    function showMsg() {
        return msg.toUpperCase()
    }
    window.dataService = { showMsg }
})(window)