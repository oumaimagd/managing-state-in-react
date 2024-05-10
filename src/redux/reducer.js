import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  LOAD_TASKS,
  COMPLETE_TASK,
} from "./actionType";

const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case LOAD_TASKS:
      const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      return {
        ...state,
        tasks: [...state.tasks, ...savedTasks],
      };

    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    default:
      return state;
  }
};

export default reducer;
