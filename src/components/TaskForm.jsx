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
        <form 
            onSubmit={handleSubmit}
            className='mb-6 flex flex-col gap-3 sm:flex-row'    
        >
            <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What do you need to get done?"    
                className='flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
            />

            <select 
                value={priority} 
                onChange={(e) => setPriority(e.target.value)}
                className='rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <button 
                type="submit"
                className='rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700'    
            >
                Add Task
            </button>
        </form>
    )
}

export default TaskForm