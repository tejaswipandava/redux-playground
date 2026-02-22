import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
  combineReducers,
} from "redux";

//state
const initialState = {
  users: [
    { id: 1, name: "teja" },
    { id: 2, name: "devour" },
  ],
  tasks: [{ title: "Apply the skill" }, { title: "consume everything" }],
};

//actions
const USERS = "users";
const TASKS = "tasks";

const userAction = (id, name) => ({
  type: USERS,
  payload: { id: id, name: name },
});
const taskAction = (task) => ({
  type: TASKS,
  payload: { title: task },
});

//reducers
const userReducer = (users = initialState.users, action) => {
  if (action.type === USERS) {
    return [...users, action.payload];
  }

  return users;
};
const taskReducer = (tasks = initialState.tasks, action) => {
  if (action.type === TASKS) {
    return [...tasks, action.payload];
  }
  return tasks;
};

//combinator
const combineReducer = combineReducers({
  users: userReducer,
  tasks: taskReducer,
});

//store
const store = createStore(combineReducer);

//subscribe
const subscriber = () => {
  console.log("Subscribe", store.getState());
};
store.subscribe(subscriber);

//action invoke
store.dispatch(userAction(3, "crome"));
store.dispatch(taskAction("nothing here"));

//actionbinder
const actionBinder = bindActionCreators(
  { userAction, taskAction },
  store.dispatch
);
actionBinder.userAction(4, "zen");
actionBinder.taskAction("actionBinders");
