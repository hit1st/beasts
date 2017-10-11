function runWithDebugger(callback, args) {
  if (!callback || (Object.prototype.toString.call(callback) !== '[object Function]')) throw 'error: first argument is not a function';

  debugger;
  // check if args.length
  //   if true invoke callback function
  if (!args) return callback();
  
  // if false invoke callback function passing in args array as arguments to callback
  if (Object.prototype.toString.call(args) !== '[object Array]') throw 'error: second argument is not an array'; 
  return callback.apply(window, args);
};

function sayHi() {
  console.log('hi!');
}

function sayHiTo(name) {
  console.log('hi ' + name);
}

function sayFullName(first, last) {
  console.log(first + ' '  + last);
}
