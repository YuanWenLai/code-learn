/*
 * @Author: your name
 * @Date: 2020-03-15 12:31:13
 * @LastEditTime: 2020-03-15 13:09:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code-learn\es6\test\proxy.test.js
 */

import {
    creatArry,
    pipe
} from '../code/proxy'

test('proxy-get1', () => {
    let arr = creatArry(1, 2, 3)
    expect(arr[-1]).toEqual(3)
})

// test('proxy-pipe', () => {
//     var double = n => n * 2
//     var pow = n => n * n
//     var reverseInt = n => n.toString().split("").reverse().join("") | 0;
//     var rest = pipe(3).double.pow.reverseInt.get
//     console.log(rest)
// })