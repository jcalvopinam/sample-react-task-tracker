import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          data={task}
          actionDelete={onDelete}
          actionToggle={onToggle} />
      ))}
    </>
  )
}

export default Tasks
