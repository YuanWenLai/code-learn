const log = console.log

function init () {
    var name = 'cavin'
    function displayName() {
        log(name)
    }
    displayName()
    name = 'change name'
    return displayName
}

init()
// cavin

var myFunc = init()
myFunc()
// cavin
// change name


