function TaskItem({ task, toggleTask, deleteTask }) {
  const priorityStyles = {
    high: 'bg-red-100 text-red-700',
    medium: 'bg-amber-100 text-amber-700',
    low: 'bg-emerald-100 text-emerald-700',
  }

  return (
    <li
      className={`flex items-center justify-between gap-4 rounded-lg border p-4 transition ${
        task.completed
          ? 'border-slate-200 bg-slate-50'
          : 'border-slate-200 bg-white hover:border-slate-300'
      }`}
    >
      <label className="flex min-w-0 flex-1 cursor-pointer items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="h-4 w-4 cursor-pointer rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
        />

        <span
          className={`truncate text-sm font-medium ${
            task.completed
              ? 'text-slate-400 line-through'
              : 'text-slate-800'
          }`}
        >
          {task.title}
        </span>
      </label>

      <div className="flex items-center gap-3">
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${
            priorityStyles[task.priority]
          }`}
        >
          {task.priority}
        </span>

        <button
          onClick={() => deleteTask(task.id)}
          className="text-sm font-medium text-slate-400 transition hover:text-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TaskItem