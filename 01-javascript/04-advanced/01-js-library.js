

// Finish the five methods attached to the _ object to create your own custom library.  The purpose of this assignment is to show how a simple JavaScript library can be made.

// Consider the below example:

// //Can we make this into a method of an object?
// function each(arr, callback) {
//   // loop through the array
//   for(var i = 0; i < arr.length; i++) {
//     callback(arr[i]); // invoking the callback many times... delegation!
//   }
// }
// Your mission is to build your own version of the underscore library. Try to get as close as you can to what underscore provides for each example below.

// To create your own custom JavaScript library, you will just add methods to a JS object! (Later on when we teach you about immediate functions you’ll see how to make this more robust to build libraries like jQuery!).

// Let’s build a few methods of underscore!

var _ = {
  map: function(array, callback) {
    for (let i = 0; i < array.length; i++) {
      array[i] = callback(array[i]);
    }
  },
  reduce: function(array, callback, memo) {
    let el = 0;
    if (!memo) {
      memo = array[0];
      el = 1;
    }
    for (let i = el; i < array.length; i++) {
      memo = callback(array[i], memo);
    }
    return memo;
  },
  find: function(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        return array[i];
      }
    }
  },
  filter: function(array, callback) {
    const tempArray = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        tempArray.push(array[i]);
      }
    }
    // we could also modify the original array
    return tempArray;
  },
  reject: function(array, callback) {
    const tempArray = [];
    for (let i = 0; i < array.length; i++) {
      if (!callback(array[i])) {
        tempArray.push(array[i]);
      }
    }
    // we could also modify the original array
    return tempArray;
  },
 }
// // you just created a library with 5 methods!
// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(evens); // if things are working right, this will return [2,4,6].
// Hints:

// Look at _.filter when it is invoked.

// How many arguments was _.filter passed?
// What are those arguments?
// If you had to classify them, what names would you give each of them?
// Given your answers (especially #3), place those names into your filter as parameters.
// Use what you learned in the previous chapter about callbacks and delegation to complete the assignment.

// One important concept that we want you to learn through this assignment is how to pass data to and from callbacks. You pass data to a callback with a parameter and you pass data from the callback back to the parent function with a return. While you are going through this assignment pay close attention to this relationship.

// Each method’s functionality is described here: underscore.js.

// Note that your method does not have to be as robust as underscore’s you just need to get the base functionality working. Therefore for most methods, you will only have the array and a callback as parameters and for the callback, you will pass in each element and potentially a “memo” also known as a “collector”.

console.log(" ");

//just testing n practicing:

var _={
filter: filter_.filter(list, predicate, [context])

}

function _.filter(list, function){
    console.log("nothing");
} //Alias: select
//Looks through each value in the list, returning an array of all the values that pass a truth test (predicate). predicate is transformed through iteratee to facilitate shorthand syntaxes.

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//=> [2, 4, 6]
