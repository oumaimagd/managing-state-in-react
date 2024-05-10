import React, { useState } from "react";

const AddNewTask = ({ addFunction }) => {
  const [newTask, setNewTask] = useState({
    action: "",
    description: "",
    isDone: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.action.trim() || !newTask.description.trim()) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    addFunction(newTask);
    setNewTask({ action: "", description: "", isDone: false });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="action"
          className="todo-input"
          placeholder="Qu'avez-vous à faire ?"
          value={newTask.action}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          className="todo-input"
          placeholder="Description"
          value={newTask.description}
          onChange={handleChange}
        />
        <input type="submit" value="Ajouter" className="todo-btn" />
      </form>
    </div>
  );
};

export default AddNewTask;
