import { useState } from 'react';

import './App.css';

import Task from './components/Task';
import TaskForm from './components/TaskForm';
import Search from './components/search';
import Filter from './components/Filter';



function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      category: 'Study',
      text: 'Estudar react',
      isCompleted: false,
    },
    {
      id: 2,
      category: 'Work',
      text: 'Investir',
      isCompleted: false,
    },
    {
      id: 3,
      category: 'Health',
      text: 'Ir para academia',
      isCompleted: false,
    },
  ]);

//ADD
  const addTask = (text, category) => {
    const newTask = [ 
    ...task,
    {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    },
  ];
    setTask(newTask);
  };

//REMOVE
  const removeTask = (id) => {
    const newTask = [...task]
    const filteredTasks = newTask.filter(task =>
       task.id !=  id ? task : null
       ); 
    setTask(filteredTasks);
  };

//COMPLETE TASK
const completeTask = (id) =>{
  const newTask = [...task]
  newTask.map((task) => task.id === id ? task.isCompleted = !task.isCompleted: task)
  setTask(newTask);
}

const [search, setSearch] =  useState('');

const [filter, setFilter] = useState();

const [show, setShow] = useState("A to Z");


//HTML
  return (
    <div className="app">
      <h1>My Tasks</h1>
      
      <Search search={search} setSearch={setSearch} />
      
      <Filter filter={filter} setFilter={setFilter} />
      
      <div className="taskList">
        {task
          .filter((task)=>
           filter === "All" 
           ? true 
           : filter === "Completed" 
           ? task.isCompleted 
           : !task.isCompleted
           )
          .filter((task) =>
           task.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((task) => (
          <Task key={task.id} task={task} removeTask={removeTask} completeTask={completeTask} />
        ))}
      </div>

      <div>
        <TaskForm addTask={addTask} />
      </div>
    </div>
  );
}

export default App;