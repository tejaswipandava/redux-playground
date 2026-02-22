import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
} from "redux";

const initialState = {
  users: [
    { id: 1, name: "teja" },
    { id: 2, name: "devour" },
  ],
  tasks: [{ title: "Apply the skill" }, { title: "consume everything" }],
};

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

const reducer = (state = initialState, action) => {
  if (action.type === USERS) {
    return { ...state, users: [...state.users, action.payload] };
  }
  if (action.type === TASKS) {
    return { ...state, tasks: [...state.tasks, action.payload] };
  }
  return state;
};

const store = createStore(reducer);
store.dispatch(userAction(3, "crome"));
store.dispatch(taskAction("nothing here"));
console.log(store.getState());
