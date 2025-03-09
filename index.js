/*function receivesAFunction(callback) {
  callback();
  if (callback) {
    return callback;
  }
}
*/
function receivesAFunction(callback) {
  callback();
}
function returnsANamedFunction() {
  return function namedFunction() {
    return "Hello";
  };
}
function returnsAnAnonymousFunction() {
  return function () {
    return "Hello";
  };
}

