// 递归利用reduce处理tree树形

var data = [
    {
        id:1,
        name: 'cavin',
        pid:1,
        children: [
            {
                id:2,
                name: '2',
                children: [
                    {
                        id:3,
                        name: '3'
                    }
                ]
            }
        ]
    },
    {
        id:4,
        name: '4',
        children: [
            {
                id: 5,
                name: '5',
                children: [
                    {
                        id: 6,
                        name: '6'
                    }
                ]
            }
        ]
    }
]


const arr = data.reduce(function(pre, item) {
    console.log("item", item)
    console.log("pre", pre.length)
    const callee = arguments.callee //将运行函数赋值给一个变量备用
    pre.push(item)
    if(item.children && item.children.length > 0) {
        item.children.reduce(callee, pre)
    }
    return pre
},[]).map( item => {
    item.children = []
    return item
})

console.log(arr)