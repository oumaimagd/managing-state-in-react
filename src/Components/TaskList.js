import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDeleteTask, onCompleteTask, onEditTask }) => {
  const activeTasks = tasks.filter((task) => !task.isDone);
  const completedTasks = tasks.filter((task) => task.isDone);

  return (
    <div>
      <h2>Tâches actives</h2>
      <div className="title">
        {activeTasks.map((task) => (
          <TaskItem
            key={task.id} 
            task={task}
            onDeleteTask={onDeleteTask}
            onCompleteTask={onCompleteTask}
            onEditTask={onEditTask}
          />
        ))}
      </div>
      <h2>Tâches complétées</h2>
      <div className="title">
        {completedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onCompleteTask={onCompleteTask}
            onEditTask={onEditTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
