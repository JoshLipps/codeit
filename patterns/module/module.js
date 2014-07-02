
//module pattern example

var JL = JL || {};

JL.module = (function(){
  "use strict";
  //private stuff
  var member = "me";
  var privateFun = function(){};
  var publicNumber = 0;
  somthing = 3;
  
  return {
    publicFun: function(){

    },
    publicNumber: publicNumber
  };
}());
