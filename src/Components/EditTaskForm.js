import React, { useState } from "react";

const EditTaskForm = ({ task, onUpdateTask, onCancel }) => {
  const [updatedAction, setUpdatedAction] = useState(task.action);
  const [updatedDescription, setUpdatedDescription] = useState(
    task.description
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
      ...task,
      action: updatedAction,
      description: updatedDescription,
    };
    onUpdateTask(updatedTask);
  };

  return (
    <div>
      <h2>Modifier la tâche</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={updatedAction}
          onChange={(e) => setUpdatedAction(e.target.value)}
        />
        <input
          type="text"
          value={updatedDescription}
          onChange={(e) => setUpdatedDescription(e.target.value)}
        />
        <button type="submit">Enregistrer</button>
        <button onClick={onCancel}>Annuler</button>
      </form>
    </div>
  );
};

export default EditTaskForm;
