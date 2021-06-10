import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  const [toggleTask, setToggleTask] = useState(true)

  const [data, setData] = useState([
    {
      id: 1,
      name: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      name: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      name: 'Food Shooping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ])

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setData([...data, newTask])
    console.log('Add task')
  }

  // Delete task
  const deleteTask = (id) => {
    setData(data.filter((data) => data.id !== id))
    console.log('delete', id)
  }

  // Toggle reminder

  const toggleReminder = (id) => {
    setData(data.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
    console.log('toggle reminder', id)
  }

  return (
    <div className="container">
      <Header showTaskForm={() => setToggleTask(!toggleTask)} changeButton={toggleTask}/>
      {toggleTask && <AddTask onAdd={addTask} />}
      {data.length === 0
        ? 'No tasks to show'
        : <Tasks tasks={data} onDelete={deleteTask} onToggle={toggleReminder} />}
    </div>
  );
}

export default App;
