import { useState } from 'react'

function TaskForm({ addTask }) {
    const [title, setTitle] = useState('')
    const [priority, setPriority] = useState('medium')

    function handleSubmit(e) {
        e.preventDefault()

        if (!title.trim()) {
        return
    }

        addTask({
            title: title.trim(),
            priority
    })

        setTitle('')
        setPriority('medium')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a task..."    
            />

            <select 
                value={priority} 
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <button type="submit">
                Add Task
            </button>
        </form>
    )
}

export default TaskForm