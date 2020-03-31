/*
 * @Author: your name
 * @Date: 2020-03-16 12:55:51
 * @LastEditTime: 2020-03-16 13:31:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code-learn\es6\code\proxy-set.js
 */

// 校验数字正确
var varlidator = {
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value > 200) {
                throw new RangeError('The age seems invalid');
            }
        }

        // 对于满足条件的 age 属性以及其他属性，直接保存
        obj[prop] = value;
        return true
    }
}

// _开头的私有属性设置不被读写
// class ProtestInvariant {
//     constructor() {
//         handle = {
//             get(target, key) {
//                 ProtestInvariant.invariant(key, 'get');
//             },
//             set(target, key, value) {
//                 ProtestInvariant.invariant(key, 'set');
//             }
//         }
//     }

//     static invariant(key, action) {
//         if (key[0] === '_') {
//             throw new Error(`Invalid attempt to ${action} private "${key}" property`)
//         }
//     }
// }

const handle = {
    get(target, key) {
        invariant(key, 'get');
    },
    set(target, key, value) {
        invariant(key, 'set');
    }
}

function invariant(key, action) {
    if (key[0] === '_') {
        throw new Error(`Invalid attempt to ${action} private "${key}" property`)
    }
}

export {
    varlidator,
    handle
}