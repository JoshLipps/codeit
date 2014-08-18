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

  function insertRecurse(data, current) {
    if(current === null){
      return data;
    }

    if(data.value < current.value) {
      current.left = insertRecurse(data, current.left);
    } else{
      current.right = insertRecurse(data, current.right);
    }

    //returns self if no insert
    return current;
  }

  function search(value) {
    return searchRecurse(value, root);
  }

  function searchRecurse(value, node) {

    //end of tree return false for this path
    if(node === null){
      return false;
    }

    //found return true
    if (value === node.value){
      return true;
    }

    //search both left and right if found either return true
    return ( searchRecurse(value, node.left) || searchRecurse(value, node.right) );

  }

  function inOrder(callback) {
    inOrderRecurse(root, callback);
  }

  function inOrderRecurse(node, callback) {
    if(!node) return;

    inOrderRecurse(node.left, callback);
    callback(node.value);
    inOrderRecurse(node.right, callback);

  }

  function preOrder(callback) {
    preOrderRecurse(root, callback);
  }

  function preOrderRecurse(node, callback){
    if(!node) return;

    callback(node.value);
    inOrderRecurse(node.left, callback);
    inOrderRecurse(node.right, callback);

  }

  function postOrder(callback){
    postOrderRecurse(root, callback);
  }

  function postOrderRecurse(node, callback){
    if(!node) return;


    inOrderRecurse(node.left, callback);
    inOrderRecurse(node.right, callback);
    callback(node.value);
  }

  return {
    insert: insert,
    inOrder: inOrder,
    search: search,
    preOrder: preOrder,
    postOrder: postOrder
    };
}());


bst.insert(5);
bst.insert(5);
bst.insert(3);
bst.insert(4);
bst.insert(6);
bst.insert(1);
bst.insert(2);

console.log("BST in order:");
bst.inOrder(function printVal(data){
  console.log(data);
});

console.log("BST pre order:");
bst.preOrder(function printVal(data){
  console.log(data);
});

console.log("BST post order:");
bst.postOrder(function printVal(data){
  console.log(data);
});

console.log( bst.search(2) );
console.log( bst.search(3) );
console.log( bst.search(7) );
