import TaskItem from './TaskItem'
import TaskForm from './TaskForm'

function TaskList({ tasks, toggleTask, addTask }) {
  return (
    <section>
      <h2>Tasks</h2>

      <TaskForm addTask={addTask} />

      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleTask={toggleTask}
            />
          ))}
        </ul>
      )}

      <button>Add Task</button>
    </section>
  )
}

export default TaskList