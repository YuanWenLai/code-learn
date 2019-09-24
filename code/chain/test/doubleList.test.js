import {DoubleList} from "../doubleList";


test('1',()=>{
  let list = new DoubleList([8,7,6,4,9,3,1,2,5])
  //list.insert(10,8)
  list.remove(7)
  list.displayReverse()
})