import { useState } from 'react'
import TaskItem from './TaskItem'
import TaskForm from './TaskForm'

function TaskList({ tasks, toggleTask, addTask, deleteTask }) {
    const [filter, setFilter] = useState('all')

    const filteredTasks = tasks.filter((task) => {
        if(filter === 'completed'){
            return task.completed
        }

        if (filter === 'open') {
            return !task.completed
        }

        return true
    })

    const [sort, setSort] = useState('none')

    const sortedTasks = [...filteredTasks]

        if (sort === 'priority') {
            sortedTasks.sort((a, b) => {
                const priorityOrder = {
                high: 1,
                medium: 2,
                low: 3,
            }

        return priorityOrder[a.priority] - priorityOrder[b.priority]
        })
    }

  return (
    <section>
      <h2>Tasks</h2>

        <div>
            <button onClick={() => setFilter('all')}>
                All
            </button>

            <button onClick={() => setFilter('open')}>
                Open
            </button>

            <button onClick={() => setFilter('completed')}>
                Completed
            </button>
        </div>

        <select 
            value={sort} 
            onChange={(e) => setSort(e.target.value)}
        >
            <option value="none">Sort by</option>
            <option value="priority">Priority</option>
        </select>

      <TaskForm addTask={addTask} />

      {filteredTasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <ul>
          {sortedTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      )}

      <button>Add Task</button>
    </section>
  )
}

export default TaskList