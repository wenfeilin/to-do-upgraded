import type { Task } from "../App";
import { useState } from "react";

function ToDoItem({task, tasks, setTasks}: {task: Task, tasks: Task[], setTasks: (newTasks: Task[]) => void}) {
  const [text, setText] = useState(task.desc);
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave(taskId: string, newDesc: string) {
    const newTasks = tasks.map((task) => task.id === taskId ? {id: taskId, desc: newDesc} : task);
    setTasks(newTasks);
    setIsEditing(false);
  }

  function handleDelete(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <li>
    {isEditing? (
      // Edit mode
      <>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={() => handleSave(task.id, text)}>Save</button>
        <button onClick={() => handleDelete(task.id)}>Delete</button>
      </>
    ): (
      // Non-edit mode
      <>
        <p>{task.desc}</p>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => handleDelete(task.id)}>Delete</button>
      </>
    )}
    </li>
  );
}

export default ToDoItem;