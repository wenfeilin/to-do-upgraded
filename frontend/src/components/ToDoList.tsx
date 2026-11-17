import type { Task } from "../App";
import CreateTask from "./CreateTask";
import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, setTasks }: { tasks: Task[], setTasks: (newTasks: Task[]) => void}) {
  return (
    <div>
      {/* Add task */}
      <CreateTask tasks={tasks} setTasks={setTasks} />

      {/* Created tasks */}
      <ul>
        {tasks.map((task, i) => (
          <ToDoItem key={i} task={task} tasks={tasks} setTasks={setTasks} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;