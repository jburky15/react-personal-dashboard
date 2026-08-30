function TaskItem({ task, toggleTask }) {
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
        </li>
    )
}

export default TaskItem