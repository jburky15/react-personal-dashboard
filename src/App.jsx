import { useEffect, useState } from 'react'

import Header from './components/Header'
import Stats from './components/Stats'
import TaskList from './components/TaskList'
import Goals from './components/Goals'

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')

    return savedTasks ? JSON.parse(savedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      ))
  }

  function addTask(taskData) {
    const newTask = {
      id: Date.now(),
      title: taskData.title,
      priority: taskData.priority,
      completed: false,
    }

    setTasks([...tasks, newTask])
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <main>
      <Header />
      <Stats tasks={tasks} />
      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        addTask={addTask}
        deleteTask={deleteTask}
      />
      <Goals />
    </main>
  )
}

export default App
