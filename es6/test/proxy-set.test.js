/*
 * @Author: your name
 * @Date: 2020-03-16 13:01:57
 * @LastEditTime: 2020-03-16 13:32:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code-learn\es6\test\proxy-set.test.js
 */
import {
    varlidator,
    ProtestInvariant,
    handle
} from '../code/proxy-set'

test('1', () => {
    let person = new Proxy({}, varlidator)
    person.age = 100
})

test('2', () => {
    const target = {}
    const proxy = new Proxy(target, handle)
        //console.log(proxy._a)//Invalid attempt to get private "_a" property
})