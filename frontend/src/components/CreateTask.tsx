import { useState } from "react";
import type { Task } from "../App";

function CreateTask({ tasks, setTasks }: { tasks: Task[], setTasks: (tasks: Task[]) => void }) {
  const [text, setText] = useState("");

  function handleCreateTask(newDesc: string) {
    if (newDesc === "") {
      return;
    }
    
    setTasks([...tasks, {
      id: crypto.randomUUID(),
      desc: newDesc
    }]);
    setText("");
  }

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={() => handleCreateTask(text)}>Create</button>
    </div>
  );
}

export default CreateTask;