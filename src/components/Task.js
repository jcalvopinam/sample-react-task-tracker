import { FaTimes } from 'react-icons/fa'

const Task = ({ data, actionDelete, actionToggle }) => {
  return (
    <div
      className={`task ${data.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => actionToggle(data.id)}>
      <h3> {data.name}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => actionDelete(data.id)} />
      </h3>
      <p>{data.day}</p>
    </div>
  )
}

export default Task
