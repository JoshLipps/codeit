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
    var newData = new Node(data,null,null);


    if(root === null){
      root = newData;
      return; //return on insert
    }

    var current = root;

    while( current !== null ){

      if( newData.value < current.value ){

        //left empty insert left
        if( current.left === null ){
          // less than left insert left
          current.left = newData;
          return; //return on insert

        //restart loop with left node
        } else{
          current = current.left;
        }

      // greater-than-equal insert right
      } else{
        if( current.right === null ){

          current.right = newData;
          return; //return on insert

        } else{
          current = current.right;
        }
      }
    }
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

bst.inOrder(function printVal(value){
  console.log(value);
});
