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
    <section className='rounded-xl border border-slate-200 bg-white p-6 shadow-sm'>
      <div className='mb-6'>
        <h2 className='text-lg font-semibold text-slate-900'>
          Tasks
        </h2>

        <p className='mt-1 text-sm text-slate-500'>
          Manage your current tasks and goals
        </p>

          <div className='mb-6 flex flex-wrap gap-2'>
              <button onClick={() => setFilter('all')}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                      filter === 'all'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    All
                  </button>

                  <button
                    onClick={() => setFilter('open')}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                      filter === 'open'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Open
                  </button>

                  <button
                    onClick={() => setFilter('completed')}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                      filter === 'completed'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                  Completed
              </button>
          </div>

          <select 
              value={sort} 
              onChange={(e) => setSort(e.target.value)}
              className="ml-auto rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600"
          >
              <option value="none">Sort by</option>
              <option value="priority">Priority</option>
          </select>
      </div>

      <TaskForm addTask={addTask} />

      {filteredTasks.length === 0 ? (
        <p className='rounded-lg bg-slate-50 px-4 py-8 text-center text-sm text-slate-500'>No tasks yet.</p>
      ) : (
        <ul className='space-y-3'>
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
    </section>
  )
}

export default TaskList