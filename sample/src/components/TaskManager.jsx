import { useState } from 'react'
import './TaskManager.css'

function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Complete React assignment', completed: false },
    { id: 2, text: 'Review JavaScript concepts', completed: false },
    { id: 3, text: 'Practice coding exercises', completed: false },
    { id: 4, text: 'Read documentation', completed: false },
    { id: 5, text: 'Attend team meeting', completed: false },
  ])

  const handleToggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  return (
    <div className="task-manager-container">
      <h2>Task Manager</h2>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <label className="task-label">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
                className="task-checkbox"
              />
              <span className={task.completed ? 'task-completed' : 'task-text'}>
                {task.text}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskManager

