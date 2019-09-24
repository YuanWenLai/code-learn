function Node(data,left,right){
  this.data = data
  this.left = left
  this.right = right
  this.show = show
}

function BST(){
  this.root = null
  this.insert = insert
  this.inOrder = inOrder
}

function show(){return this.data}

function insert(data) {
  let n = new Node(data,null,null)
  if(this.root == null){
    this.root = n
  }else {
    let current = this.root
    let parent
    while (true){
      parent = current
      if(data < current.data){
        current = current.left
        if(current == null){
          parent.left = n
          break;
        }
      }else{
        current = current.right
        if(current ===null){
          parent.right = n
          break
        }
      }
    }
  }
}

//中序遍历
function inOrder(node){
  if(node !== null){
    inOrder(node.left)
    console.log(node.show() + '')
    inOrder(node.right)
  }
}

//先序遍历
function preOrder(node) {
  if(node !== null){
    console.log(node.show()+'')
    preOrder(node.left)
    preOrder(node.right)
  }
}

//后序遍历
function postOrder(node) {
  if(node!== null){
    postOrder(node.left)
    postOrder(node.right)
    console.log(node.show()+'')
  }
}

//非递归的先序遍历
function preOrederUnRecur(node) {
  if(node !== null){
    let stack = []
    stack.push(node)
    while (stack.length !==0){
      node = stack.pop()
      console.log(node.show()+'')
      if(node.right != null){
        stack.push(node.right)
      }
      if(node.left != null){
        stack.push(node.left)
      }
    }
  }
}

//中序遍历
function inOrderUnRecur(node) {
  if(node !== null){
    let stack = []
    let head = node
    while (stack.length !=0 || head != null){
      if(head != null){
        stack.push(head)
        head = head.left
      }else {
        head = stack.pop()
        console.log(head.show())
        head = head.right
      }
    }
  }
}

//后续遍历
function postOrderUnRecur(node) {
  if(node != null){
    let s1=[],s2=[]
    s1.push(node)
    while (s1.length !=0){
      let head = s1.pop()
      s2.push(head)
      if(head.left !=null){
        s1.push(head.left)
      }
      if(head.right != null){
        s1.push(head.right)
      }
    }
    while (s2.length != 0){
      console.log(s2.pop().show())
    }
  }
}



