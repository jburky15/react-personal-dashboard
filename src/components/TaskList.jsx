import TaskItem from './TaskItem'

function TaskList({ tasks, toggleTask }) {
  return (
    <section>
      <h2>Tasks</h2>

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