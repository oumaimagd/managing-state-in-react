import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  completeTask,
  deleteTask,
  loadTasks,
  updateTask,
} from "./redux/actions";
import AddNewTask from "./Components/AddNewTask";
import TaskList from "./Components/TaskList";
import EditTaskForm from "./Components/EditTaskForm";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [editTaskData, setEditTaskData] = useState(null);

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  const handleAddTask = (task) => {
    dispatch(addTask(task));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleCompleteTask = (taskId) => {
    dispatch(completeTask(taskId));
  };

  const handleEditTask = (task) => {
    setEditTaskData(task);
  };

  const handleUpdateTask = (updatedTask) => {
    dispatch(updateTask(updatedTask));
    setEditTaskData(null);
  };

  return (
    <div className="App">
      <h1>Tâches</h1>
      <AddNewTask addFunction={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onCompleteTask={handleCompleteTask}
        onEditTask={handleEditTask}
      />
      {editTaskData && (
        <EditTaskForm
          task={editTaskData}
          onUpdateTask={handleUpdateTask}
          onCancel={() => setEditTaskData(null)}
        />
      )}
    </div>
  );
}

export default App;
