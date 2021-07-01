define(['dataService'],function (dataService) {
    let name = 'tom'
    function showMsg() {
        alert(dataService.showMsg()+''+name)
    }
    return { showMsg }
})