(function (window,dataService) {
    let name = 'tom'
    function showMsg() {
        alert(dataService.showMsg()+''+name)
    }
    window.alerter = { showMsg }
})(window,dataService)