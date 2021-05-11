
// currying allows you to take a function with n arguments and convert it to a function that has a single argument

function add(a) {
  return function(a) {
    return a + b;
  }
}

const addSimple = a => b => a + b;

const result = addSimple(1)(2);