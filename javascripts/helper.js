window.bind = function(func, thisValue) {
  return function() {
    return func.apply(thisValue, arguments);
  }
};
