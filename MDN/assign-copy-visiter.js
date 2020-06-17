// assign 的拷贝访问器
const log = console.log

const obj = {
    name: 'cavin',
    get say() {
        return "hi , cavin!"
    }
}

let copyDemo = Object.assign({}, obj)

log(copyDemo) // { name: 'cavin', say: 'hi , cavin!' }

// copy的say的属性是函数返回的值，不是原始函数

// 因此需要拷贝访问器，达到完美复制
log("*****************************")
function completeAssgin(target, ...sources) {
    sources.forEach(source => {
        let desc = Object.keys(source).reduce((desc, key)=> {
            desc[key] = Object.getOwnPropertyDescriptor(source, key)
            return desc
        },{})

        // Object.assign 默认也会拷贝可枚举的Symbols
        Object.getOwnPropertySymbols(source).forEach(sym => {
            let desc = Object.getOwnPropertyDescriptor(source,sym)
            if(desc.enumerable) {
                desc[sym] = desc
            }
        })
        Object.defineProperties(target, desc)
    })
    return target
}
let copyDemo2 = completeAssgin({},obj)
log(copyDemo2) // { name: 'cavin', say: [Getter] }