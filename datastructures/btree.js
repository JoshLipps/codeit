//simple binary tree

var bst =  (function binarySearchTree(){

  //private variables
  var root = null;

  function Node(value, left, right){
    this.value = value;
    this.left = left;
    this.right = right;
  }

  function insert(data){
    if(!data) return;

    //create BSTNode with data
    var node = new Node(data, null, null);

    //call recursive Insert
    root = insertRecurse(node, root);
  }

  function insertRecurse(data, current){
    if(current === null){
      return data;
    }

    if(data.value < current.value){
      current.left = insertRecurse(data, current.left);
    } else{
      current.right = insertRecurse(data, current.right);
    }

    //returns self if no insert
    return current;
  }

  function search(value){

  }

  function inOrder(callback){
    inOrderRecurse(root, callback);
  }

  function inOrderRecurse(node, callback){
    if(!node) return;

    inOrderRecurse(node.left, callback);
    callback(node.value);
    inOrderRecurse(node.right, callback);

  }

  return {
    insert: insert,
    inOrder: inOrder,
    search: search
    };
}());


bst.insert(5);
bst.insert(5);
bst.insert(3);
bst.insert(4);
bst.insert(6);

bst.inOrder(function printVal(data){
  console.log(data);
});
