import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
} from "redux";

// const toUpper = (string) => string.toUpperCase();
// const toRepeat = (string) => string.repeat(3);
// const toBold = (string) => string.bold();

// const mutant = (string) => toBold(toRepeat(toUpper(string)));
// const composedmutant = compose(toBold, toRepeat, toUpper);

// console.log(mutant("hello"));
// console.log(composedmutant("jaffa"));


//redux store, reducer----------------------------------------
const initialState = { value: 10 };

const INCREMENT = "INCREMENT";
const incrementAction = { type: INCREMENT };

const reducer = (state, action) => {
  if (action.type === INCREMENT) {
    return { state: state.value + 1 };
  }
  return state;
};

const store = createStore(reducer);

console.log(store);
