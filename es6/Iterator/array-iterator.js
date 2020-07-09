let arr = [1,3,4]
let it = arr[Symbol.iterator]()

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// { value: 1, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// { value: undefined, done: true }
