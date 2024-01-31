const { returns } = require("chai-spies");

function returnsAnAnonymousFunction() {
  return function(){}
}

function returnsANamedFunction() {
  return returnsAnAnonymousFunction;
}

function receivesAFunction(callback) {
  callback(returnsANamedFunction);
}

function index(callback) {
  receivesAFunction(callback);
}

before(index);