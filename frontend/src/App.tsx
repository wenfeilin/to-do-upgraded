import { useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList'

export type Task = {
  id: string;
  desc: string;
};

const mockData = [
  {id: "1", desc: "Merp"},
  {id: "2", desc: "Clean merp"}
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(mockData);

  return (
    <>
      <ToDoList tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default App
