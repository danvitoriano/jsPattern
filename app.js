var app = (function(){
  
  "use strict";
  
  var foo = 'green';
  
  var message = function(){
    var newMessage = "My fav color is " + foo;
    return newMessage;
  }; // message function
  
  return {
    message : message
  }; //return
  
}()); // app function self-invoked


// example of use
console.log(app.message());
