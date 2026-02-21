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

const initialState = { value: 10 };

const INCREMENT = "INCREMENT";
const incrementAction = () => ({
  type: INCREMENT,
});

//action creators
const ADD = "ADD";
const addActionCreator = (amount) => ({ type: ADD, payload: amount });

//pass initial state here
const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { value: state.value + 1 };
  }

  if (action.type === ADD) {
    return { value: state.value + action.payload };
  }
  return state;
};

//pass initial state here is also possible
// const store = createStore(reducer,initialState);
const store = createStore(reducer);

const subscriber = () =>
  console.log("SUBSCRIBE to the store state", store.getState());

store.subscribe(subscriber);

const actionbinder = bindActionCreators(
  { incrementAction, addActionCreator },
  store.dispatch
);

actionbinder.addActionCreator(100);
actionbinder.incrementAction();
console.log(store);
