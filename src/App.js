import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  const [toggleTask, setToggleTask] = useState(true)

  const [data, setData] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchData()
      setData(taskFromServer)
    }
    getTasks()
  }, [])

  // Fetch Data
  const fetchData = async () => {
    const response = await fetch('http://localhost:8080/tasks')
    const tasks = await response.json()

    return tasks;
  }


  // Fetch Data
  const fetchDataById = async (id) => {
    const response = await fetch(`http://localhost:8080/tasks/${id}`)
    const tasks = await response.json()

    return tasks;
  }

  // Add task
  const addTask = async (task) => {
    const response = await fetch('http://localhost:8080/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task),
    })

  }

  // Delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:8080/tasks/${id}`, {
      method: 'DELETE'
    })
    setData(data.filter((data) => data.id !== id))
  }

  // Toggle reminder

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchDataById(id)
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    const response = await fetch(`http://localhost:8080/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    })

    const task = await response.json()

    setData(data.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header showTaskForm={() => setToggleTask(!toggleTask)} changeButton={toggleTask} />
      {toggleTask && <AddTask onAdd={addTask} />}
      {data.length === 0
        ? 'No tasks to show'
        : <Tasks tasks={data} onDelete={deleteTask} onToggle={toggleReminder} />}
    </div>
  );
}

export default App;
