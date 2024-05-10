import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  LOAD_TASKS,
  COMPLETE_TASK,
} from "./actionType";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const updateTask = (task) => ({
  type: UPDATE_TASK,
  payload: task,
});

export const loadTasks = () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  return {
    type: LOAD_TASKS,
    payload: savedTasks,
  };
};

export const completeTask = (taskId) => ({
  type: COMPLETE_TASK,
  payload: taskId,
});
