import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
} from "redux";

const toUpper = (string) => string.toUpperCase();
const toRepeat = (string) => string.repeat(3);
const toBold = (string) => string.bold();

const mutant = (string) => toBold(toRepeat(toUpper(string)));
const composedmutant = compose(toBold, toRepeat, toUpper);

console.log(mutant("hello"));
console.log(composedmutant("jaffa"));
