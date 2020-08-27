//Objective is to find the maximum depth (or height) of a binary tree

class Node {
    constructor(left, right, data) {
        this.data = data
        this.left = null 
        this.right = null
    }
}

class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(data) {
      this.root = new Node(null, null, data)
    }
  
    addLeftNode(node, data) {
      node.left = new Node(null, null, data)
    }
  
    addRightNode(node, data) {
      node.right = new Node(null, null, data)
    }
}

let tree = new Tree()
tree.createRoot(200)
tree.addLeftNode(tree.root, 500)
tree.addRightNode(tree.root, 700)
tree.addLeftNode(tree.root.left, 600)
tree.addRightNode(tree.root.right, 800)
tree.addLeftNode(tree.root.left.left, 1000)
tree.addRightNode(tree.root.left, 950)
tree.addLeftNode(tree.root.right, 720)
tree.addRightNode(tree.root.right.right, 440)
tree.addLeftNode(tree.root.left.left.left, 560)
tree.addRightNode(tree.root.right.right.right, 810)


//O(n) solution where n is the number of nodes in the binary tree
//We use a basic DFS approach

//A helper function to keep scanning the left and right sides of the trees
//until a null is hit, at which the greatest height will be returned
function max(root, level) {
    //Once a null node is hit, return the level
    if (!root) {
        return level
    }

    //Every time you go right or left, increase the level by 1
    return Math.max(max(root.left, level + 1), max(root.right, level + 1))
}

return max(tree.root, 0)
