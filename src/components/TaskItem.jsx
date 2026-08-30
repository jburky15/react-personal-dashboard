function TaskItem({ task, toggleTask, deleteTask }) {
    return(
        <li className={task.completed ? 'completed' : ''}>
            <label>
                <input 
                    type="checkbox" 
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}    
                />
            
                <span>{task.title}</span>
            </label>

            <span>{task.priority}</span>

            <button onClick={() => deleteTask(task.id)}>
                Delete
            </button>
        </li>
    )
}

export default TaskItem