import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
  combineReducers,
} from "redux";

const reducer = (state) => state;

// const monitorEnhancer = (createStore) => (reducer, initialState, enhance) => {
//   const monitorReducer = (state, action) => {
//     // Ignore Redux internal actions
//     if (action.type.startsWith("@@redux/")) {
//       return;
//     }
//     const start = performance.now();
//     const newState = reducer(state, action);
//     const end = performance.now();
//     const diff = end - start;
//     console.log("difference in time", diff);

//     return newState;
//   };

//   return createStore(monitorReducer, initialState, enhance);
// };

// const logEnhancer = (createStore) => (reducer, initialState, enhance) => {
//   const logReducer = (state, action) => {
//     // Ignore Redux internal actions
//     if (action.type.startsWith("@@redux/")) {
//       return reducer(state, action);
//     }

//     console.log("old state", state, "action: ", action);
//     const newState = reducer(state + 1, action);
//     console.log("new state", newState, "action: ", action);

//     return newState;
//   };

//   return createStore(logReducer, initialState, enhance);
// };

//middle ware
const logMiddleware = (store) => (next) => (action) => {
  console.log("old state", store.getState(), "action: ", action);
  next(action);
  console.log("new state", store.getState(), "action: ", action);
};

const monitorMiddleware = (store) => (next) => (action) => {
  const start = performance.now();
  next(action);
  const end = performance.now();
  const diff = end - start;
  console.log("difference in time", diff);
};

const store = createStore(
  reducer,
  1,
  applyMiddleware(logMiddleware, monitorMiddleware)
);
console.log("trigger");
store.dispatch({ type: "test" });
console.log(store.getState());
